# @shaharmor/eslint-config

My opinionated eslint config

### Installation

1. Install eslint & relevant eslint plugins
```sh
npm i --save-dev eslint eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier
```

2. Install this eslint config
```sh
npm i --save-dev @shaharmor/eslint-config
```

### Configuration

1. Configure eslint to use this module`s eslint config:

    Add `.eslintrc` file to your project`s root folder with the contents of:
    ```json
    {
      "extends": [
        "@shaharmor/eslint-config"
      ]
    }
    ```

That's it!
