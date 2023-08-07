module.exports = {
  plugins: ['@emotion'],
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
    '@emotion/babel-preset-css-prop',
  ],
};
