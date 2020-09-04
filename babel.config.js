const presets = [
  // 必须添加这个才会对箭头函数等进行转译
  '@babel/preset-env',
  '@babel/preset-typescript',
];

const plugins = ['@babel/plugin-transform-runtime', '@babel/plugin-transform-object-assign'];

module.exports = {
  presets,
  plugins,
};
