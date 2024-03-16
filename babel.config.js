module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      [
        "module-resolver",
        {
          root: ['./src'],
          alias: {
            '@assets' : './assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@data': './src/data',
            '@utils': './src/utils'
          },
        },
      ],
    ],
  };
};
