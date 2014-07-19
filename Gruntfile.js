module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'assets/css/app.css' : 'assets/sass/bootstrap.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 9']
			},
			styles: {
				src: 'assets/css/app.css'
			}
		},

		cssmin: {
			combine: {
				files: {
					'assets/css/app.css': ['assets/css/*.css', '!assets/css/app.css']
				}
			}
		},

		uglify: {
			options: {
				mangle: true
			},
			dist: {
				files: {
					'assets/js/app.js': ['assets/js/src/*.js']
				}
			}
		},

		watch: {
			scripts: {
				files: ['assets/js/src/*.js'],
				tasks: ['uglify']
			},
			css: {
				files: ['assets/sass/*.scss'],
				tasks: ['sass', 'autoprefixer', 'cssmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	
	grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'uglify']);
}