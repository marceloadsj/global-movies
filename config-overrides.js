const reactAppRewirePostcss = require("react-app-rewire-postcss");

module.exports = config => {
  reactAppRewirePostcss(config, true);

  return config;
};
