// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var sass = require("gulp-sass");
var cleancss = require("gulp-clean-css");
var concat = require('gulp-concat');


var public = "public";
var source_scss = "public/stylesheets";
var source_js = "public/javascripts";
var dest_css = "public/stylesheets/compilado";


// Inject CSS and JS
gulp.task('inject', ['sass'], function(){

	var sourceOptions = {
		read: false, 
		cwd: __dirname + "/" + public
	};

	var injectOptions = {
		addRootSlash: false
	};

	var target = gulp.src('./views/index.ejs');
	var sources = gulp.src(['stylesheets/compilado/*.css', 'javascripts/**/*.js'], sourceOptions);
	return target.pipe(inject(sources, injectOptions))
	.pipe(gulp.dest('./views'));
});


// Wire Bower dependencies to HTML
gulp.task('wiredep', function () {	
	gulp.src('views/index.ejs')
	.pipe(wiredep({ignorePath: '../public/'}))
	.pipe(gulp.dest('views')); 
});




// Compile Sass
gulp.task('sass', function(){
	return gulp.src(source_scss+'/*.scss')
	.pipe(sass())
	.pipe(cleancss())
	.pipe(concat('todo.css'))
	.pipe(gulp.dest(dest_css));
});


gulp.task('watch', function(){
	gulp.watch([
		source_scss+'/*.scss',
		source_js+'/*.js',
		source_js+'/**/*.js' // Deberia funcionar para todo el arbol de subdirectorios...
	], ['inject']);
});

// Modo desarrollo. Primero compila e inyecta, y luego se pone en modo watch
gulp.task('dev', ['inject', 'watch']);
