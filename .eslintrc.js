module.exports = {
  root: true,
  // 将使用 eslint.config.js 作为主要配置
  // 这个文件仅作为备用配置
  rules: {
    quotes: ["error", "single", { avoidEscape: true }],
  },
};
