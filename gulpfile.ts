import {utility} from "./custom_module/utility.module"
import {mainCode} from "./custom_module/mainCode.module"

/*
==============================
REQUIRED
==============================
*/

const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	bs = require('browser-sync').create(),
	reload = bs.reload,
	plumber = require('gulp-plumber'),
	ts = require('gulp-typescript'),
	tsProject = ts.createProject("tsconfig.json"),
	replace = require('gulp-string-replace'),
	browserify = require("browserify"),
	source = require('vinyl-source-stream'),
	tsify = require("tsify"),
	watchify = require("watchify"),
	sourcemaps = require('gulp-sourcemaps'),
	filePush = require('gulp-file'), //need to create file
	fileExists = require('file-exists'),
	buffer = require('vinyl-buffer'),
	meta_data = require('./meta_data_CRO.ts'); //custom meta data form-CRO

/*
==============================
PATHS - REWRITEFILE
==============================
*/

const paths: any = {
	main_tsFile: ['src/'+meta_data.testCRO.id+'/main.ts']
};

const rewriteFile: any = {
	freo: {
		all: /Scripts\/FreoWebsite\/polyfills.js\?v=\d+.\d+.\d.\d+/g
	},
	gStar: {
		beforeCheckout: '_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js',
		checkoutAndAbove: '_ui/g-star/js/app/base.11a824aec69af596fb137ffdfb67515e.js'
	}
};

console.log(rewriteFile[meta_data.testCRO.customer][meta_data.testCRO.whichPage])

/*
==============================
SEND TO MAIN.TS
==============================
*/

gulp.task('replace::testIdAndUrlOriginOnMain.ts', ['create::mainCodeModule'], function() {
	console.log(meta_data.testCRO.id);
	console.log(meta_data.testCRO.targetProxy + rewriteFile[meta_data.testCRO.customer][meta_data.testCRO.whichPage]);
  gulp.src("src/"+meta_data.testCRO.id+"/main.ts")
    .pipe(replace('0000', meta_data.testCRO.id))
    .pipe(replace('origin_url_string', meta_data.testCRO.targetProxy + rewriteFile[meta_data.testCRO.customer][meta_data.testCRO.whichPage]))
    .pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

/*
==============================
GULP TASK
==============================
*/

//START BROWSER-SYNCS
gulp.task('openBrowser::browser-sync', function () {
	bs.init({
	  proxy: {
	  	target : meta_data.testCRO.targetProxy,
	  	ws: true
	  },
	  files: ['public/'+meta_data.testCRO.id+'/bundle.js'],
	  serveStatic: ['public/' + meta_data.testCRO.id],
	  rewriteRules: [
	    {
	      	match: rewriteFile[meta_data.testCRO.customer][meta_data.testCRO.whichPage],
	      	replace: 'bundle.js'
	    }
	  ]
	});
});

//START CREATE FILES MODULES

gulp.task('create::utilityModule', () => {
	return filePush('utility.ts', utility(), {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::mainCodeModule', () => {
	console.log('create main.ts file!');  
	return filePush('main.ts', mainCode(), {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

//END CREATE FILES MODULES

const watchedBrowserify = watchify(browserify({
    basedir: '.',
	debug: true,
	entries: paths.main_tsFile,
	cache: {},
	packageCache: {}
	})
	.plugin(tsify, {
		"files": [
	        "src/"+meta_data.testCRO.id+"/*.ts"
	    ],
	    "compilerOptions": {
	        "noImplicitAny": true,
	        "target": "es5"
	    },
	     "removeComments": true
	})
	.transform("babelify", {
			"presets": [
			    [
					"@babel/preset-env", {
					  "useBuiltIns": "entry",
					  "targets": {
					    "browsers": [
					      "last 2 versions",
					      "safari >= 7",
					      "ie >= 11"
					    ]
					  }
					}
				]
			]
	})
);

const bundle = () => {
	console.log('------------PREPARING TEST ID: ', meta_data.testCRO.id, '------------')
	console.log('------------PREPARING TEST CUSTOMER: ', meta_data.testCRO.customer, '------------')

    return watchedBrowserify
        .bundle()
    	.pipe(source('bundle.js'))
    	.pipe(buffer())
	    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("public/"+meta_data.testCRO.id))
        .pipe(reload({stream:true}));
}

gulp.task('build::modules', () => {

	fileExists("src/"+meta_data.testCRO.id+"/main.ts").then(function(exists:boolean ) {
		if(exists) {
			console.log('📁 modules allready created!');  
		}else {
			console.log('create 📁 modules!');
			gulp.start("create::utilityModule");
			gulp.start("replace::testIdAndUrlOriginOnMain.ts");
		}
	})
});

/*
==============================
WATCH TASK
==============================
*/

watchedBrowserify.on("update", bundle);

/*
==============================
DEFAULT TASK
==============================
*/

gulp.task('default', [
	"build::modules",
	"openBrowser::browser-sync"
], bundle);