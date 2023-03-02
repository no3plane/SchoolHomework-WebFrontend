// Postcss好像vite有内置

const px2rem = require('postcss-px2rem') // 等比适配器

module.exports = {
  plugins: [
    require("postcss-px2rem")({
      // 基准大小 baseSize，需要和rem.js中相同
      remUnit: 16,
    }),
  ],
};
