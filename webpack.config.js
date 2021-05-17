/*
  webpack configuration url : https://webpack.docschina.org/configuration/
  webapck version           : 5.37.0
*/
module.export ={
  mode: 'production',
  entry: __dirname + 'src/index.js', // 入口文件
  output: {
    path: __dirname + '/lib/', // 打包后的文件村方的地方
    filename: 'index.js', // 打包后输出文件的文件名
    library:{
      name: 'hello', // 指定库的名称。
      type: 'umd', // 配置将库暴露的方式。
      export :'defalut', // 指定哪一个导出应该被暴露为一个库。
      auxiliaryComment: 'Test Comment', // [String|Object]在 UMD 包装器中添加注释。
      umdNamedDefine: '' //当使用 output.library.type: "umd" 时，将 output.library.umdNamedDefine 设置为 true 将会把 AMD 模块命名为 UMD 构建。否则使用匿名 define。
    },
    libraryTarget: 'umd', // 配置如何暴露 library
  }
}