/*import {mainCode} from "./custom_module/mainCode.module"*/
/*import {utility} from "./custom_module/utility.module"*/

/*
==============================
REQUIRED
==============================
*/
//gulp
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
	meta_data = require('./meta_data_CRO.ts');

//moudles
const mainCode = require('./custom_module/mainCode.module'),
	cookie = require('./custom_module/cookie.module'),
	customEventEmitter = require('./custom_module/customEventEmitter.module'),
	findThatClassFirst = require('./custom_module/findThatClassFirst.module'),
	debounce = require('./custom_module/debounce.module'),
	languages = require('./custom_module/language.module'),
	country = require('./custom_module/country.module'),
	tryAndCatch = require('./custom_module/tryAndCatch.module'),
	mediaQuery = require('./custom_module/mediaQuery.module'),
	style = require('./custom_module/style.module'),
	log = require('./custom_module/log.module'),
	develop = require('./custom_module/develop.module'),
	nodeListExist = require('./custom_module/nodeListExist.module');

/*
==============================
PATHS - REWRITEFILE
==============================
*/

gulp.task('test', function() {
	console.log(mainCode.str)
});

const paths: any = {
	main_tsFile: ['src/'+meta_data.testCRO.id+'/main.ts']
};

const rewriteFile: any = {
	freo: {
		all: 'Scripts/FreoWebsite/polyfills.js'
	},
	gStar: {
		beforeCheckout: '_static/20190419144157/js/app/components/vendor/utils/lightningjs.js',
		checkoutAndAbove: '_ui/g-star/js/app/base.dc229c6530fb5f61e1fd41e58619c70c.js',
		all: '_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
	}
};
console.log(rewriteFile[meta_data.testCRO.customer][meta_data.testCRO.whichPage]);
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
//==============================

gulp.task('create::mainCodeModule', () => {
	console.log('create main.ts file!');  
	return filePush('main.ts', mainCode.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

//modules
//==============================

gulp.task('create::develop.Module', () => {
	return filePush('develop.ts', develop.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::cookie.module', () => {
	console.log('create cookie.ts file!');  
	return filePush('cookie.ts', cookie.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::customEventEmitter.module', () => {
	console.log('create customEventEmitter.ts file!');  
	return filePush('customEventEmitter.ts', customEventEmitter.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::findThatClassFirst.module', () => {
	console.log('create findThatClassFirst.ts file!');  
	return filePush('findThatClassFirst.ts', findThatClassFirst.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::debounce.module', () => {
	console.log('create debounce.ts file!');  
	return filePush('debounce.ts', debounce.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::languages.module', () => {
	console.log('create languages.ts file!');  
	return filePush('languages.ts', languages.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::country.module', () => {
	console.log('create country.ts file!');  
	return filePush('country.ts', country.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::tryAndCatch.module', () => {
	console.log('create tryAndCatch.ts file!');  
	return filePush('tryAndCatch.ts', tryAndCatch.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::mediaQueryModule', () => {
	return filePush('mediaQuery.ts', mediaQuery.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::style.module', () => {
	console.log('create style.ts file!');  
	return filePush('style.ts', style.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::log.module', () => {
	console.log('create log.ts file!');  
	return filePush('log.ts', log.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});

gulp.task('create::nodeListExist.module', () => {
	console.log('create nodeListExist.ts file!');  
	return filePush('nodeListExist.ts', nodeListExist.str, {src: true})
	.pipe(gulp.dest("src/"+meta_data.testCRO.id))
});


//END CREATE FILES MODULES
//==============================

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
	        "downlevelIteration" : true,
	        "noImplicitAny": true,
	        "target": "ES5",
	        "experimentalDecorators": true,
	        "types" : ["node"],
        	"typeRoots": [ "node_modules/@types" ]
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

			gulp.start("create::develop.Module");
			gulp.start("replace::testIdAndUrlOriginOnMain.ts");
			gulp.start("create::cookie.module");
			gulp.start("create::customEventEmitter.module");
			gulp.start("create::findThatClassFirst.module");
			gulp.start("create::debounce.module");
			gulp.start("create::languages.module");
			gulp.start("create::tryAndCatch.module");
			gulp.start("create::country.module");
			gulp.start("create::mediaQueryModule");
			gulp.start("create::style.module");
			gulp.start("create::log.module");
			gulp.start("create::nodeListExist.module");
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