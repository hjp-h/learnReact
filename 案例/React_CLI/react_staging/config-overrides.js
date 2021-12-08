//配置具体的修改规则 配置了之后就不用在app.js中引入所有的样式 按需引入
 const { override, fixBabelImports ,addLessLoader} = require('customize-cra');
 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
      lessOptions: {
        javascriptEnabled: true, //允许使用js代码修改css
        modifyVars: { '@primary-color': 'orange' },//修改配置中的变量
      }
    })
 );