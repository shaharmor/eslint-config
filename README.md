# @shaharmor/eslint-config

### Installation

1. Install eslint & relevant eslint plugins
```sh
npm i eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier eslint-import-resolver-typescript @typescript-eslint/eslint-plugin prettier
```

2. Install this eslint config
```sh
npm i @shaharmor/eslint-config
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

2. Configure prettier to use this module's prettier config:

    Add `.prettierrc` in your project`s root folder with the contents of:
    ```
    @shaharmor/eslint-config/prettier
    ``` 

That's it!
