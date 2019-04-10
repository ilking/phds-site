module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": ["warn", { code: 150 }],
    "prettier/prettier": ["warn", { printWidth: 150 }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
