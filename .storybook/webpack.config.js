const path = require('path');

const pathToComponents = path.resolve(__dirname, '../src');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.svg$/;

  // let rule = config.module.rules.find((rule) => rule.use[0].loader.includes("ts-loader"));
  // rule.use[0].options.transpileOnly = true;

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.svg$/,
    include: pathToComponents,
    use: [{
      loader: '@svgr/webpack',
      options: {
        dimensions: false,
      }
    }],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    options: { configFileName: path.resolve(__dirname, './tsconfig.json') } // << added
  });

  // config.module.rules.push({
  //   test: /\.tsx?$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: require.resolve("babel-loader"),
  //       options: {
  //         presets: [
  //           require("@babel/preset-typescript").default,
  //           require("@babel/preset-react").default
  //         ]
  //       }
  //     },
  //     require.resolve("react-docgen-typescript-loader")
  //   ]
  // });

  // Return the altered config
  return config;
};
