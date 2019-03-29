import {customLog} from "./custom_module/customConsoleLog.module"
import {language} from "./custom_module/languageCheck.module"
import {customStyle} from "./custom_module/customStyle.module"
import {cookieCheck} from "./custom_module/cookieCheck.module"
import {countryCheck} from "./custom_module/countryCheck.module"
import {appendJsOrigin} from "./custom_module/appendJsOrigin.module"
import {customCodeInit} from "./custom_module/customCodeInit.module"
import {mainCode} from "./custom_module/mainCode.module"
import {mediaCheck} from "./custom_module/mediaQueryCheck.module"

import {utility} from "./custom_module/utility.module"

import {metaData} from "./meta_data_CRO"

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
	buffer = require('vinyl-buffer');

/*
==============================
TEST ID
- MAKE SURE TO SET ID
- MAKE SURE TO SET CUSTOMER

for option look const 'rewriteFile-Object' below
==============================
*/
const testCRO = metaData();

console.dir(testCRO);
/*
==============================
PATHS - REWRITEFILE
==============================
*/

const paths: any = {
	main_tsFile: ['src/'+testCRO.id+'/main.ts']
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

console.log(rewriteFile[testCRO.customer][testCRO.whichPage])

/*
==============================
SEND TO MAIN.TS
==============================
*/

gulp.task('replace::testIdAndUrlOriginOnMain.ts', ['create::mainCodeModule'], function() {
	console.log(testCRO.id);
	console.log(testCRO.targetProxy + rewriteFile[testCRO.customer][testCRO.whichPage]);
  gulp.src("src/"+testCRO.id+"/main.ts")
    .pipe(replace('0000', testCRO.id))
    .pipe(replace('origin_url_string', testCRO.targetProxy + rewriteFile[testCRO.customer][testCRO.whichPage]))
    .pipe(gulp.dest("src/"+testCRO.id+""))
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
	  	target : testCRO.targetProxy,
	  	ws: true
	  },
	  files: ['public/'+testCRO.id+'/bundle.js'],
	  serveStatic: ['public/' + testCRO.id],
	  rewriteRules: [
	    {
	      	match: rewriteFile[testCRO.customer][testCRO.whichPage],
	      	replace: 'bundle.js'
	    }
	  ]
	});
});

//START CREATE FILES MODULES

gulp.task('create::utilityModule', () => {
	return filePush('utility.ts', utility(), {src: true})
	.pipe(gulp.dest("src/"+testCRO.id+""))
});

/*gulp.task('create::customLogModule', () => {
	return filePush('log.ts', customLog(), {src: true})
	.pipe(gulp.dest("src/"+testCRO.id+""))
});

gulp.task('create::languageModule', () => {
	return filePush('language.ts', language(), {src: true})
	.pipe(gulp.dest("src/"+testCRO.id+""))
});

gulp.task('create::customStyleModule', () => {
	return filePush('customStyle.ts', customStyle(), {src: true})
	.pipe(gulp.dest("src/"+testCRO.id+""))
});

gulp.task('create::cookieCheckModule', () => {
	return filePush('cookie.ts', cookieCheck(), {src: true})
	.pipe(gulp.dest("src/"+testCRO.id+""))
});

gulp.task('create::mediaQueryCheckModule', () => {
	return filePush('mediaQuery.ts', mediaCheck(), {src: true})
	.pipe(gulp.dest("src/"+testCRO.id+""))
});

gulp.task('create::countryCheckModule', () => {
	return filePush('country.ts', countryCheck(), {src: true})
	.pipe(gulp.dest("src/"+testCRO.id+""))
});

gulp.task('create::appendJsOriginModule', () => {
	return filePush('appendJsOrigin.ts', appendJsOrigin(), {src: true})
	.pipe(gulp.dest("src/"+testCRO.id+""))
});*/

/*gulp.task('create::customCodeInitModule', () => {
	console.log('create 📁customCodeInit.ts file!');  
	return filePush('customCodeInit.ts', customCodeInit(), {src: true})
	.pipe(gulp.dest("src/"+testCRO.id+""))
});*/

gulp.task('create::mainCodeModule', () => {
	console.log('create main.ts file!');  
	return filePush('main.ts', mainCode(), {src: true})
	.pipe(gulp.dest("src/"+testCRO.id+""))
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
	        "src/"+testCRO.id+"/*.ts"
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
	console.log('------------PREPARING TEST ID: ', testCRO.id, '------------')
	console.log('------------PREPARING TEST CUSTOMER: ', testCRO.customer, '------------')

    return watchedBrowserify
        .bundle()
    	.pipe(source('bundle.js'))
    	.pipe(buffer())
	    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("public/"+testCRO.id+""))
        .pipe(reload({stream:true}));
}

gulp.task('build::modules', () => {

	fileExists("src/"+testCRO.id+"/main.ts").then(function(exists:boolean ) {
		if(exists) {
			console.log('📁modules allready created!');  
		}else {
			console.log('create 📁modules!');
			gulp.start("create::utilityModule");
			gulp.start("replace::testIdAndUrlOriginOnMain.ts");
			/*gulp.start("create::customLogModule");
			gulp.start("create::languageModule");
			gulp.start("create::customStyleModule");
			gulp.start("create::cookieCheckModule");
			gulp.start("create::mediaQueryCheckModule");
			gulp.start("create::countryCheckModule");
			gulp.start("create::appendJsOriginModule");*/
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