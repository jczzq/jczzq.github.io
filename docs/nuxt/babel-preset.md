---
title: babel-preset-app
---

# `@nuxt/babel-preset-app`

> nuxt 内置 babel preset

## 用法

Nuxt默认使用`@nuxt/babel-preset-app`预设，它主要是' @babel/preset-env '的包装器。
还包含了
- `@vue/babel-preset-jsx`
- `@babel/plugin-proposal-decorator`
- `@babel/plugin-proposal-class-properties`
- `@babel/plugin-transform-runtime`

这些预设。除此之外还加了一些polyfill(垫片)。

**注意**: 自从Babel 7.4.0同时支持`core-js@2`和`core-js@3`后, 官方建议直接添加 `core-js`并通过[' corejs '](#corejs)选项设置版本

```sh
yarn add --dev core-js@3 @babel/runtime-corejs3

# or

yarn add --dev core-js@2 @babel/runtime-corejs2

```

通常情况下是无需关心配置的，如果确实有需要可以添加相应的配置到`nuxt.config.js`:
![babel.presets](/assets/imgs/babel-presets.png)
```js
babel: {
  presets(env, [ preset, options ]) {
    return [
      [ "@nuxt/babel-preset-app", options ]
    ]
  }
}
```

`env` 包含 `envName` (`server`, `client`, `modern`) 和所有 `nuxtEnv` 的属性 (`isDev`, `isServer`, `isClient`, `isModern`, `isLegacy`)的一个对象

`preset` 是babel预设 `@nuxt/babel-preset-app`

`options` 是一个可选的参数对象:

```js
const options = {
  useBuiltIns: "entry"
}
```

下面是 `options` 对象所有可访问的属性:

### Options

* **configPath** - [`@babel/preset-env` parameter](https://babeljs.io/docs/en/babel-preset-env#configpath)
* **forceAllTransforms** - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#forcealltransforms)' parameter
* **debug**, 默认:`false` - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#debug)' parameter
* **decoratorsBeforeExport**
* **decoratorsLegacy**, 默认:`true`
* **exclude** - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#exclude)' parameter
* **ignoreBrowserslistConfig**, 默认: `modern` - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#ignorebrowserslistconfig)' parameter
* **include** - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#include)' parameter
* **jsx**, 默认: true, 可以是一个对象作为参数传递 [@vue/babel-preset-jsx](https://www.npmjs.com/package/@vue/babel-preset-jsx)
* **loose**, 默认: `false` - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#loose)' parameter and also sets `loose=true` for `@babel/plugin-proposal-class-properties`
* **modules**, 默认: `false` - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#modules)' parameter
* **polyfills**, 默认: `core-js@2: ['es6.array.iterator','es6.promise','es6.object.assign','es7.promise.finally']`, `core-js@3: ['es.array.iterator','es.promise','es.object.assign','es.promise.finally']`, 更多信息参考[core-js](https://github.com/zloirock/core-js)官方仓库 
* **shippedProposals** - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#shippedproposals)' parameter
* **spec** - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#spec)' parameter
* **targets** - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#targets)' parameter
* **useBuiltIns**, 默认: `"usage"` - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)' parameter
* **corejs**, 默认: `{ version: 2 }` - '[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#corejs)' parameter

这里是`@babel/preset-env`相关参数的[详细的文档](https://babeljs.io/docs/en/babel-preset-env#options).

### 示例 1. 更改配置分别处理服务器和客户端

>`build.babel.presets`中配置的预设将应用于客户端和服务器构建。目标将由Nuxt相应地设置（客户端/服务器）。如果要为客户端或服务器版本配置不同的预设，也可以使用presets作为函数

```js
export default {
  build: {
    babel: {
      presets({ envName }) {
        const envTargets = {
          client: { browsers: ["last 2 versions"], ie: 11 },
          server: { node: "current" },
        }
        return [
          [
            "@nuxt/babel-preset-app",
            {
              targets: envTargets[envName]
            }
          ]
        ]
      }
    }
  }
}
```

### 示例 2. 使用 core-js@3

**注意**: 确保所有依赖项都已升级为使用core-js@3. 如何 core-js@2 和 core-js@3 同时依赖, babel 也许会处理掉错误的 core-js

```sh
yarn add --dev core-js@3 @babel/runtime-corejs3
```

```js
export default {
  build: {
    babel: {
      // envName: server, client, modern
      presets({ envName }) {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}
```
