'use strict';
// чтобы установить сразу все плагины - нужно ввести npm install

//Init Plugins
var gulp  			= require('gulp'), //npm install --global gulp-cli   ,  npm install --save-dev gulp
	concatCSS 		= require('gulp-concat-css'), // npm install --save-dev gulp-concat-css
	sass 			= require('gulp-sass'), // npm install gulp-sass --save-dev
	rename 			= require('gulp-rename'), // npm install --save-dev  gulp-rename
	minifyCSS 		= require('gulp-minify-css'), // npm install --save-dev  gulp-minify-css
	browserSync 	= require('browser-sync'), // npm install browser-sync --save-dev
	imagemin 		= require('gulp-imagemin'), // npm install --save-dev gulp-imagemin
	watch 			= require('gulp-watch'), // npm install --save-dev gulp-watch
	wait 			= require('gulp-wait'), // npm install --save-dev gulp-wait
	pug 			= require('gulp-pug'), // npm install --save-dev gulp-pug
	gutil 			= require('gulp-util'), // npm install --save-dev gulp-util
	autoprefixer 	= require('gulp-autoprefixer'), // npm install --save-dev gulp-autoprefixer
	zip 			= require('gulp-zip'), // npm install --save-dev gulp-zip
	uglify 			= require('gulp-uglify'); // npm install --save-dev gulp-uglify




//<!--  Pug Task        ============================================ -->
gulp.task('pug', function buildHTML() {
  return gulp.src('app/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app'))
	.pipe(browserSync.reload({stream: true}))
	.on('end', function(){ gutil.log(' - - - - - - - - - - - - - Pug converted to HTML Succesfully! - - - - - - - - - - - - - '); })
	.on('error', gutil.log);
});


//<!--  SCss Task        ============================================ -->
gulp.task('scss', function () {
	return gulp.src([
	    'app/scss/**/*.scss',
	    '!app/scss/**/responsive.scss' 
	])
	.pipe(wait(500))
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
        browsers: ['last 16 versions'], // 'last 2 versions'
        cascade: false
    }))
	.pipe(concatCSS("style.css"))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
	.pipe(minifyCSS(''))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
	.on('end', function(){ gutil.log(' - - - - - - - - - - - - - Styles Complete! - - - - - - - - - - - - - '); })
	.on('error', gutil.log);
});



//<!--  Responsive Css Task        ============================================ -->
gulp.task('css', function (done) {
	return gulp.src([
	    'app/scss/**/responsive.scss'
	])
	.pipe(wait(500))
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
        browsers: ['last 16 versions'], // 'last 2 versions'
        cascade: false
    }))
	.pipe(concatCSS("responsive.css"))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
	.pipe(minifyCSS(''))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
	.on('end', function(){ gutil.log(' - - - - - - - - - - - - - Responsive Css Styles Complete! - - - - - - - - - - - - - '); })
	.on('error', gutil.log);
});


//<!--  Compress image Task        ============================================ -->
gulp.task('compress', function() {
	gulp.src('app/images/**/*.*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		optimizationLevel: 5,
		svgoPlugins: [{removeViewBox: true}]
	}))
	.pipe(gulp.dest('production/images'));
});


//<!--  JS Task        ============================================ -->
gulp.task('js', function () {
	return gulp.src([
		'app/js/script.core.js',
		'app/js/script.init.js'
	])
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/js/min/'))
	.pipe(browserSync.reload({stream: true}))
	.on('end', function(){ gutil.log(' - - - - - - - - - - - - - Js watch Complete! - - - - - - - - - - - - - '); })
	.on('error', gutil.log);
});


//<!--  BrowserSync server Task        ============================================ -->
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


//<!--  Default Task        ============================================ -->
gulp.task('default', ['browser-sync', 'scss', 'css', 'pug'], function() {
	
	gulp.watch([
	    'app/pug/*.pug'
	], ['pug']);

	gulp.watch([
	    'app/scss/**/*.scss',
	    '!app/scss/**/responsive.scss' 
	], ['scss']);

	gulp.watch([
	    'app/scss/**/responsive.scss'
	], ['css']);

	gulp.watch([
	    'app/js/*.js'
	], ['js'],);

});


//<!--  Build Task        ============================================ -->
// Когда проект полностью готов - вызываем таск ( gulp build ) - он создает папку production и заливает готовый проект внутрь папки. 
gulp.task('build', ['compress'], function () { 
    
    // css
    var buildCss = gulp.src('app/css/**/*.css')
	.pipe(gulp.dest('production/css'));

	// scss
    var buildSCss = gulp.src('app/scss/**/*.scss')
	.pipe(gulp.dest('production/scss'));

	//fonts
	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('production/fonts'));

	//js
	var buildJS = gulp.src('app/js/**/*')
	.pipe(gulp.dest('production/js'));

	//plugins
	var buildPluginsJS = gulp.src('app/plugins/**/*')
	.pipe(gulp.dest('production/plugins/'));

	//html
	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('production/'));

});



//<!--  ZIP Task        ============================================ -->
// Если проект нужно заархивировать - в консоли прописываем таск ( gulp zip ) - он берет нашу готовую папку production и архивирует ее.
gulp.task('zip', function () {
    gulp.src('production/**')
    .pipe(zip('production.zip'))
    .pipe(gulp.dest('production zip file'))
});