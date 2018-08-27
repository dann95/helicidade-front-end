require('dotenv').config()

const buildDIR = 'public/dist'

const resources = {
    /**
     * Vendor javascript (like bootstrap,jquery,etc,etc)
     */
    vendorJS: [
        'application/scripts/vendor/md-inputs-fix.js',
        'node_modules/jquery/dist/jquery.slim.js',
        'node_modules/moment/moment.js',
        'node_modules/echarts/dist/echarts.js'
    ],
    /**
     * CSS (vendor and styles)
     */
    CSS:[
        'node_modules/normalize.css/normalize.css',
        'node_modules/bootstrap/dist/css/bootstrap-grid.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'application/styles/theme.css',
        'application/styles/calendars.css',
        'application/styles/inputs.css',
        'application/styles/md-inputs.css',
        'application/styles/modals.css',
        'application/styles/tables.css',
        'application/styles/main.css',
        'application/styles/utils.css',
        'application/styles/buttons.css'
    ],
    /**
     * Copy
     */
    COPY:[
        'node_modules/font-awesome/fonts/',
        'application/img/'
    ],
    entry: 'application/index.js'
}

const   path = require('path'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    uglify  = require('gulp-uglify'),
    copy = require('gulp-copy'),
    replace = require('gulp-string-replace'),
    webpack = require('webpack-stream'),
    webpackSettings = require('./application/ENV/webpack/webpack.config.dev');

gulp.task('SPA', () => {
    gulp.src(resources.entry)
        .pipe(webpack(webpackSettings))
        .pipe(replace(/#_api_#/g, process.env['HLQ_API']))
        .pipe(
            gulp.dest(
                path.join(__dirname, buildDIR, 'js')
            )
        )
})

gulp.task('vendorJS', () => {
    gulp.src(resources.vendorJS)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(
            gulp.dest(
                path.join(__dirname, buildDIR, 'js')
            )
        )
})

gulp.task('styles', () => {
    gulp.src(resources.CSS)
        .pipe(concat('heliquality.css'))
        .pipe(cleanCSS({ debug:true }))
        .pipe(
            gulp.dest(
                path.join(__dirname, buildDIR, 'css')
            )
        )
})

gulp.task('copy', () => {
    resources.COPY.forEach((res) => {
        gulp.src(res+'**/*')
            .pipe(
                gulp.dest(
                    path.join(__dirname, buildDIR, path.basename(res))
                )
            )
    })
})

gulp.task('default', [
    'vendorJS',
    'styles',
    'copy',
    'SPA'
])