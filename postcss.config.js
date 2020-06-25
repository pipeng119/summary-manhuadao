module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],//定义被转换的css属性，必须精确
      selectorBlackList: ['font-'],//定义被忽略的选择器
    },
  }
}