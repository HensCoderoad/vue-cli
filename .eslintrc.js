module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    wx: false, // 这里值为 false 表示这个全局变量不允许被重新赋值，
    location: false,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/no-unresolved': [2, {
      ignore: ['^@/'], // @ 是设置的路径别名
    }],
    eqeqeq: ['off'], // 推荐使用的===
    'no-param-reassign': ['off'], // 不推荐给形参属性赋值
    'no-restricted-syntax': ['off'], // 不推荐for in、for of，推荐使用foreach
    'no-shadow': ['off'], // 不推荐重复
  },
};
