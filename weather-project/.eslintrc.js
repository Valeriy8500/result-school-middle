module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-var": "warn",
    "semi": "warn",
    "no-multi-spaces": "warn",
    "prefer-const": "warn",
    "no-console": ["warn", { "allow": ["warn", "error"] }]
  }
}
