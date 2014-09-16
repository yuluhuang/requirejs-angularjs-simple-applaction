module.exports = function (grunt) {

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            index: {
                src: ['scripts/App/indexApp.js', 'scripts/Controllers/indexCtrl.js'],//要压缩的源文件
                dest: 'scripts/<%= pkg.name %>.min.js'//压缩后的输出位置
            }
        },
        watch: {
            scripts: {
                files: ['scripts/**/*.js'],
                tasks: ['requirejs'],
                options: {
                    spawn: false
                }
            }

        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: ".",
                    paths: {requireLib: 'scripts/requireMain/require'},
                    include: 'requireLib',//如果需要把require也压进去（这样整个项目只需要一个js文件了），设置其path，并
                    name: 'scripts/requireMain/indexMain',
                    out: 'scripts/requireMain/index.js',//输出的文件名
                    // optimize:'none',//注释掉此行即可同时把合并后的js文件压缩
                    mainConfigFile: 'scripts/requireMain/indexMain.js'//用已写好的main.js文件来处理模块依赖关系
                }
            }
        }
    });

    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // 默认任务 使用uglify
    //grunt.registerTask('default', ['uglify']);

    // 默认任务 使用 requirejs
    grunt.registerTask('default', ['requirejs', 'watch']);
};

