module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    ENV: process.env.ENV,
    URL_BFF: process.env.URL_BFF
  }
};