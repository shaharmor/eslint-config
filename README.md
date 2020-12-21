# @shaharmor/eslint-config

My opinionated eslint config

### Installation

```sh
npm i --save-dev eslint prettier typescript @shaharmor/eslint-config
```

### Configuration

Configure eslint to use this eslint config:
Add `.eslintrc.js` file to your project`s root folder with the contents of:

    ```js
    require('@rushstack/eslint-patch/modern-module-resolution');

    module.exports = {
        extends: [
            "@shaharmor/eslint-config"
        ],
        parserOptions: {
            tsconfigRootDir: __dirname
        }
    }
    ```

That's it!
