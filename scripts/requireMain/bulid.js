/**
 * Created by yuluhuang on 2014/8/30 0030.
 */
({
    baseUrl:'.',
    paths:{requireLib:'require'},
    include:'requireLib',//如果需要把require也压进去（这样整个项目只需要一个js文件了），设置其path，并
    name:'indexMain',
    out:'index.js',//输出的文件名
   // optimize:'none',//注释掉此行即可同时把合并后的js文件压缩
    mainConfigFile:'indexMain.js'//用已写好的main.js文件来处理模块依赖关系
})