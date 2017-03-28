var config = {
  // 指定文件入口
  entry:'./main.js',

  // 配置打包结果,path定义输出的文件夹,filename定义打包结果文件的名称
  output:{
    path:'./',
    filename:'index.js',
  },

  // 设置服务器端口号
  devServer:{
    inline: true,
    port: 3003,
  },

  // 定义模块的处理逻辑,loaders定义了一系列的加载器以及正则
  module :{
    loaders:[{
      test: /\.jsx?$|\.js?$/,
      exclude:/node_modules/,
      loader: "babel",
      query:{
        presets:['es2015','react','stage-3']
      }
    },
      {
        test: /\.css/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader?sourceMap',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        include: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=100000000',
      },

    ]
  }
}

module.exports = config;