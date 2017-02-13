var gulp   		 = require('gulp'),
	sass 		 = require('gulp-sass'),
	jade   		 = require('gulp-jade'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename');
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    spritesmith  = require('gulp.spritesmith');



gulp.task('sass', function () {
  gulp.src('app/sass/*.scss')
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8'], {
      cascade: true
    }))
    .pipe(gulp.dest('dist/assests/styles/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('jade', function(){
	return gulp.src('app/pages/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false
	});
})

gulp.task('script', function(){
	return gulp.src('app/js/*.js')
	.pipe(concat('script.js'))
	.pipe(gulp.dest('dist/assests/scripts/'))
})

gulp.task('script-libs', function(){
	return gulp.src('app/libs/**/*.min.js')
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/assests/scripts/'));
})

gulp.task('css-libs',['sass'], function(){
	return gulp.src('app/libs/**/*.min.css')
	.pipe(cssnano())
	.pipe(rename('css-libs.min.css'))
	.pipe(gulp.dest('dist/assests/styles/'));
})

gulp.task('script-concat', function(){
	return gulp.src(['dist/assests/scripts/libs.min.js',
					 'dist/assests/scripts/script.js'])
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('prod/assests/scripts/'));
})

gulp.task('css-concat', function(){
	return gulp.src(['dist/assests/styles/css-libs.min.css',
					 'dist/assests/styles/style.css'])
	.pipe(concat('style.min.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('prod/assests/styles/'));
})

gulp.task('sprite', function () {
	var spriteData = gulp.src('app/img/sprite/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: '_sprite.scss',
		algorithm: 'binary-tree',
	}));
	spriteData.img.pipe(gulp.dest('dist/assests/images/sprite'));
	spriteData.css.pipe(gulp.dest('app/sass/'));
});

gulp.task('watch', ['sass', 'jade', 'script',  'script-libs', 'css-libs', 'browser-sync'], function(){
	gulp.watch('app/sass/*.scss', ['sass']);
	gulp.watch('app/**/*.jade', ['jade']);
	gulp.watch('app/js/*.js', ['script']);
	gulp.watch('dist/assests/scripts/*.js', browserSync.reload);
	gulp.watch('dist/assests/styles/*.css', browserSync.reload);
	gulp.watch('dist/*.html', browserSync.reload);
})

gulp.task('img', function(){
	return gulp.src('dist/assests/images/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
	})))
	.pipe(gulp.dest('prod/assests/images/'));
})

gulp.task('build', ['img', 'script-concat', 'css-concat'], function() {

    var buildFonts = gulp.src('dist/assests/fonts/**/*')
    .pipe(gulp.dest('prod/assests/fonts'))

    var buildHtml = gulp.src('dist/*.html')
    .pipe(gulp.dest('prod'));

});

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['watch']);