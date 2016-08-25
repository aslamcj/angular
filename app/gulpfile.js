// Generated on 2016-06-26 using generator-angular 0.15.1
'use strict';

var ENV = process.env.APP_ENV || 'dev';

// If our environment is dev, we load our local environment variables
if ( ENV === 'dev' ) {
    require( 'dotenv' ).load();
}

// Inculde required modules
var gulp = require( 'gulp' );
var $load = require( 'gulp-load-plugins' )();
var eslint = require( 'gulp-eslint' );
var rename = require( 'gulp-rename' );
var fs = require( 'fs' );
var zip = require( 'gulp-zip' );
var openURL = require( 'open' );
var lazypipe = require( 'lazypipe' );
var ngConfig = require( 'gulp-ng-config' );
var rimraf = require( 'rimraf' );
var wiredep = require( 'wiredep' ).stream;
var runSequence = require( 'run-sequence' );
// var connect = require( 'gulp-connect' );
var proxy = require( 'http-proxy-middleware' );
// var imagemin = require( 'gulp-imagemin' );
var configPath = require( './config' );
var argv = require( 'yargs' ).argv;
var json = JSON.parse( fs.readFileSync( './folder.json' ) );


// End required modules

// Configulre the folder and file paths
var config = {
    app: require( './bower.json' ).appPath || 'app',
    dist: 'dist',
    build: 'build'
};
var eslintScripts = [ 'app/scripts/**/*.js', '!app/scripts/common/config.js', '!node_modules/**', '!dist/**' ];


var environment;
if ( typeof argv.env !== 'undefined' ) {
    environment = argv.env;
}
else {
    environment = 'local';
}

var arg = configPath[ environment ];
var buildPath = {
    public: config.dist + arg.ENV.publicFolderPath,
    protected: config.dist + arg.ENV.protectedFolderPath
};
var makeJson = function ( env, filePath ) {
    fs.writeFileSync( filePath,
        JSON.stringify( env ) );
};

var paths = {
    scripts: [ config.app + '/scripts/**/*.js', config.app + '/scripts/*.js' ],
    styles: [ config.app + '/styles/*.scss', config.app + '/styles/*.css' ],
    views: {
        main: config.app + '/index.html',
        files: [ config.app + '/views/**/*.html' ]
    }
};
//End configulre the folder and file paths


/*
################################################################################
Misc
################################################################################
*/

/**
* Task to auto inject bower components
* @require : stream from wiredep plugin
*/
gulp.task( 'bower', function () {
    return gulp.src( paths.views.main )
        .pipe( wiredep( {
            directory: 'bower_components',
            ignorePath: '..'
        } ) )
        .pipe( gulp.dest( config.app ) );
} );

/**
* Task to create zip file/s based on the environment
* @require : gulp-zip plugin
*/
gulp.task( 'zip', function () {
    var zipFileName = 'b2b-angular-' + environment + '-' + Date.parse( new Date() ) + '.zip',
        zipPublic = 'b2b-angular-public-' + environment + '-' + Date.parse( new Date() ) + '.zip',
        zipProtected = 'b2b-angular-cmscommon-' + environment + '-' + Date.parse( new Date() ) + '.zip';

    if ( environment === 'dev' ) {
        return setTimeout( function () {
            gulp.src( [ config.build + '/*', config.build + '/**' ] )
                .pipe( zip( zipFileName ) )
                .pipe( gulp.dest( config.build ) );
        }, 10000 );
    }
    else {
        return setTimeout( function () {
            gulp.src( [ config.build + arg.ENV.publicFolderPath + '*', config.build + arg.ENV.publicFolderPath + '**' ] )
                .pipe( zip( zipPublic ) )
                .pipe( gulp.dest( config.build ) );
            gulp.src( [ config.build + arg.ENV.protectedFolderPath + '*', config.build + arg.ENV.protectedFolderPath + '**'] )
                .pipe( zip( zipProtected ) )
                .pipe( gulp.dest( config.build ) );
        }, 10000 );
    }

} );

/**
* Task to add a precommit githook
* @require : gulp-rename plugin
*/
gulp.task( 'githook', function () {
    gulp.src( '.pre-commit' )
        .pipe( rename( 'pre-commit' ) )
        .pipe( gulp.dest( '../../.git/hooks/' ) );
} );

/**
* Task to configure the environment variable
* @require : gulp-ng-config plugin
*/
gulp.task( 'ng-config', function () {
    makeJson( arg, './config.json' );
    gulp.src( './config.json' )
        .pipe(
            ngConfig( 'mastercard.b2b.common', {
                constants: config[ ENV ],
                createModule: false
            } )
        )
        .pipe( gulp.dest( './app/scripts/common/' ) );
} );

/**
* @function
* convert the sass to css (@todo : remove this)
*/
var styles = lazypipe()
    .pipe( $load.sass, {
        outputStyle: 'expanded',
        precision: 10
    } )
    .pipe( $load.autoprefixer, 'last 1 version' )
    .pipe( gulp.dest, '.tmp/styles' );

/**
* Task to execute the sass to css (@todo : remove this)
*/
gulp.task( 'styles', function () {
    return gulp.src( paths.styles )
        .pipe( styles() );
} );

/*
* Task to start server
* @require : gulp-load-plugins plugin
* @require : connect server plugin (part of gulp-load-plugins)
* @require : http-proxy-middleware plugin
*/
gulp.task( 'start:server', function () {
    $load.connect.server( {
        root: [ 'app', '.tmp' ],
        livereload: true,
        // Change this to '0.0.0.0' to access the server from outside.
        port: 9000,

        middleware: function ( connect ) {
            var middlewares = [];
            middlewares.push(
                connect().use( '/bower_components', connect.static( 'bower_components' ) ),
                proxy( [ '/public', '/currentsprint', '/serviceproxy', '/pkmslogin', '/pkmspasswd' ], {
                    target: 'http://localhost:3000',
                    changeOrigin: true
                } )
            );
            return middlewares;
        }

    } );
} );

/*
* Task to start clint server
* This taks internally calls the following tasks :
* * start:server
* * styles
* @require : open plugin
*/
gulp.task( 'start:client', [ 'start:server', 'styles' ], function () {
    openURL( 'http://localhost:9000' );
} );

/*
* Task to watch the files for reload the browser if any changes in css, html, js
* @require : gulp-load-plugins plugin
* @require : connect reload plugin
* @require : plumber plugin'
* @todo : remove styles from project
* @todo : remove jshint from project
*/
gulp.task( 'watch', function () {
    $load.watch( paths.styles )
        .pipe( $load.plumber() )
        .pipe( styles() )
        .pipe( $load.connect.reload() );

    $load.watch( paths.views.files )
        .pipe( $load.plumber() )
        .pipe( $load.connect.reload() );

    $load.watch( paths.scripts )
        .pipe( $load.plumber() )
        .pipe( lintScripts() )
        .pipe( $load.connect.reload() );

    gulp.watch( 'bower.json', [ 'bower' ] );
} );

/**
* Task to serve the client for developement purpose
* This taks internally calls the following tasks :
* * clean:tmp
* * ng-config
* * lint:noabort
* * start:client
* * watch
* * githook (@todo : remove this dependency, githooks should be standalone)
* @require : runSequence plugin
*/
gulp.task( 'serve', function ( cb ) {
    runSequence( 'clean:tmp', [ 'ng-config', 'lint:noabort', 'start:client' ],
        'watch', 'githook', cb );
} );

//@todo : remove unused task
gulp.task( 'serve:prod', function () {
    $load.connect.server( {
        root: [ config.dist ],
        livereload: true,
        port: 9000
    } );
} );

/**
* Task to generate low level code documentation based on code comments added
* Follows ng-docs standards : https://github.com/nikhilmodak/gulp-ngdocs
* @require : gulp-ngdocs plugin
*/
gulp.task( 'ngdocs', [], function () {
    var gulpDocs = require( 'gulp-ngdocs' );
    var options = {
        /* pass both .min.js and .min.js.map files for angular and angular-animate */
        scripts: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular/angular.min.js.map',
            'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.js',
            'bower_components/angular-animate/angular-animate.min.js',
            'bower_components/angular-animate/angular-animate.min.js.map'
        ]
    };

    return gulp.src( [ config.app + '/scripts/**/*.js' ] )
        .pipe( gulpDocs.process( options ) )
        .pipe( gulp.dest( config.app + '/docs' ) );
} );

/*
################################################################################
Linting
################################################################################
*/

/**
* @function
* function will lazy load the jshint functions
* @require : lazypipe plugin
* @require : gulp-load-plugins plugin
* @require : jshint plugin (part of gulp-load-plugins)
* @require : jshint reporter plugin (part of gulp-load-plugins)
* @todo : remove jshint from project
*/
var lintScripts = lazypipe()
    .pipe( $load.jshint, '.jshintrc' )
    .pipe( $load.jshint.reporter, 'jshint-stylish' );

/**
* JS hint the javascript files
* @require : gulp-eslint plugin
* @todo : remove jshint from project
*/
gulp.task( 'lint:scripts', function () {
    return gulp.src( paths.scripts )
        .pipe( lintScripts() );
} );

/**
* Lint the javascript files, fail if there is an error
* @require : gulp-eslint plugin
*/
gulp.task( 'lint', function () {
    return gulp.src( eslintScripts )
        .pipe( eslint() )
        .pipe( eslint.format() )
        .pipe( eslint.failAfterError() );
} );

/**
* Lint the javascript files, but won't fail if there is an error
* @require : gulp-eslint plugin
*/
gulp.task( 'lint:noabort', function () {
    return gulp.src( eslintScripts )
        .pipe( eslint() )
        .pipe( eslint.format() );
} );

/*
################################################################################
Clean
################################################################################
*/

/**
* Clean the dist folder
* @require : rimraf plugin
*/
gulp.task( 'clean:dist', function ( cb ) {
    rimraf( './dist', cb );
} );

/**
* Clean the build folder
* @require : rimraf plugin
*/
gulp.task( 'clean:build', function ( cb ) {
    rimraf( './build', cb );
} );

/**
* Clean the tmp folder
* @require : rimraf plugin
*/
gulp.task( 'clean:tmp', function ( cb ) {
    rimraf( './.tmp', cb );
} );

/**
* Perform all pre build clean operation
* This taks internally calls the following tasks :
* * clean:dist
* * clean:build
*/
gulp.task( 'clean:preBuild', [ 'clean:dist', 'clean:build' ] );

/**
* Perform all pre build clean operation
* This taks internally calls the following tasks :
* * clean:dist
* * clean:build
* @require : runSequence plugin
*/
gulp.task( 'clean:postBuild', function(){
  runSequence( 'clean:tmp', 'clean:dist' );
} );

/*
################################################################################
Copy
################################################################################
*/

/**
* Copy the htmls to dist views
*/
gulp.task( 'copy:html', function () {
    return gulp.src( config.app + '/views/**/*' )
        .pipe( gulp.dest( config.dist + '/views' ) );
} );

/**
* Copy the jsons to dist scripts
*/
gulp.task( 'copy:json', function () {
    return gulp.src( config.app + '/scripts/**/*.json' )
        .pipe( gulp.dest( config.dist + '/scripts' ) );
} );

/**
* Copy the resources to dist resources
*/
gulp.task( 'copy:resources', function () {
    return gulp.src( config.app + '/resources/*' )
        .pipe( gulp.dest( config.dist + '/resources' ) );
} );

/*
################################################################################
Move
################################################################################
*/

/**
* Move folder to public structure
*/
gulp.task( 'movePublic', function () {
    var src, dest;
    if ( environment === 'dev' ) {
        src = config.dist + '/dev-aem/**';
        dest = config.build + '/dev-aem/';
    }
    else {
        src = config.dist + '/public/**';
        dest = config.build + '/public/';
    }
    return gulp.src( src )
        .pipe( gulp.dest( dest ) );
} );

/**
* Move folder to protected structure
*/
gulp.task( 'moveProtected', function () {
    var src, dest;
    if ( environment === 'dev' ) {
        src = config.dist + '/dev-aem/**';
        dest = config.build + '/dev-aem/';
    }
    else {
        src = config.dist + '/cmscommon/**';
        dest = config.build + '/cmscommon/';
    }
    return gulp.src( src )
        .pipe( gulp.dest( dest ) );
} );

/**
* Task to move files based on the environment and create the public and protected structure
*/
gulp.task( 'move', function () {
    var key;
    for ( key in json.public ) {
        buildPublicStructure( json.public[ key ], key );
    }
    for ( key in json.protected ) {
        buildProtectedStructure( json.protected[ key ], key );
    }
} );

/**
* @function
* moves files to create public structure
*/
function buildPublicStructure( path, key ) {
    var srcPath, destPath, srcJsonPath, destJsonPath;
    for ( var i = 0; i < path.length; i++ ) {
        if ( key === 'root' ) {
            srcPath = config.dist + '/' + path[ i ] + '/*';
            destPath = config.build + arg.ENV.publicFolderPath + path[ i ];
        }
        else if ( key === 'views' ) {
            srcPath = config.dist + '/views/' + path[ i ] + '/*';
            destPath = config.build + arg.ENV.publicFolderPath + 'views/' + path[ i ];
        }
        else if ( key === 'scripts' ) {
            if ( path[ i ] === 'global' ) {
                srcPath = config.dist + '/scripts/' + path[ i ] + '.js';
            }
            else {
                srcPath = config.dist + '/scripts/' + path[ i ] + '.component.js';
            }
            destPath = config.build + arg.ENV.publicFolderPath + 'scripts/';
            srcJsonPath = config.dist + '/scripts/' + path[ i ] + '/*';
            destJsonPath = config.build + arg.ENV.publicFolderPath + 'scripts/' + path[ i ];
            moveFiles( srcJsonPath, destJsonPath );
        }
        moveFiles( srcPath, destPath );
    }

}

/**
* @function
* moves files to create protected structure
*/
function buildProtectedStructure( path, key ) {
    var srcPath, destPath, srcJsonPath, destJsonPath;
    for ( var i = 0; i < path.length; i++ ) {
        if ( key === 'views' ) {
            srcPath = config.dist + '/views/' + path[ i ] + '/*';
            destPath = config.build + arg.ENV.protectedFolderPath + '/views/' + path[ i ];
        }
        else if ( key === 'scripts' ) {
            srcPath = config.dist + '/scripts/' + path[ i ] + '.component.js';
            destPath = config.build + arg.ENV.protectedFolderPath + 'scripts/';
            srcJsonPath = config.dist + '/scripts/' + path[ i ] + '/*';
            destJsonPath = config.build + arg.ENV.protectedFolderPath + '/scripts/' + path[ i ];
            moveFiles( srcJsonPath, destJsonPath );
        }
        moveFiles( srcPath, destPath );
    }

}
/**
* @function
* copies files from source to destination
*/
function moveFiles( src, dest ) {
    return gulp.src( src )
        .pipe( gulp.dest( dest ) );
}

/*
################################################################################
Build
################################################################################
*/

/**
* Perform build client operation
* This taks internally calls the following tasks :
* * ng-config
* * copy:html
* * styles
* * copy:json
* * copy:resources
* @require : gulp-load-plugins plugin
* @require : filter plugin (part of gulp-load-plugins)
* @require : ngAnnotate plugin (part of gulp-load-plugins)
* @require : uglify plugin (part of gulp-load-plugins)
* @require : filter resotre plugin (part of gulp-load-plugins)
*/
gulp.task( 'client:build', [ 'ng-config', 'copy:html', 'styles', 'copy:json', 'copy:resources' ], function () {
    var jsFilter = $load.filter( 'scripts/*.js' );

    return gulp.src( paths.views.main )
        .pipe( $load.useref( {
            searchPath: [ config.app, '.tmp' ]
        } ) )
        .pipe( jsFilter )
        .pipe( $load.ngAnnotate() )
        .pipe( $load.uglify() )
        .pipe( jsFilter.restore() )
        .pipe( gulp.dest( config.dist ) );
} );

/**
* Task to perform the build and generate zip files based on the environment
* @param env
* @example :
*   gulp
*   gulp --env=local
*   gulp --env=dev
*   gulp --env=stage
*   gulp --env=uat
*   gulp --env=prod
* This taks internally calls the following tasks :
* * clean:preBuild
* * client : build
* * move
* * zip
* * clean:postBuild
*/
gulp.task( 'build', function ( cb ) {
    runSequence( 'clean:preBuild','client:build', 'move', 'movePublic', 'moveProtected', 'zip', 'clean:postBuild', cb );
} );

/**
* Run build task as default task. Please refer build task for more details
*/
gulp.task( 'default', [ 'build' ], function () {} );