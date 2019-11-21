---
title: 目录结构（v2.10.2）
---

### 整体结构
``` bash
.
├── .circleci                             # CI配置目录
│   └── config.yml
├── .github                               # Github配置目录
├── benchmarks                            # 性能测试
├── distributions                         # 产出
├── examples                              # 应用示例
├── packages                              # 源码
├── scripts                               # 工程脚本
├── test                                  # 测试用例
├── .all-contributorsrc                   # all-contributors机器人配置文件
├── .editorconfig                         # 通用编辑配置
├── .eslintignore                         # eslint忽略列表
├── .eslintrc.js                          # eslint配置
├── .gitignore                            # git忽略列表
├── .npmrc                                # npm配置
├── .yarnrc                               # yarn配置
├── azure-pipelines.yml                   # 将冒烟和单测结果发布到azure
├── babel.config.js                       # babel配置
├── CODE_OF_CONDUCT.md                    # 贡献者契约行为准则
├── CONTRIBUTING.md                       # 贡献指南
├── jest.config.js                        # jest配置
├── lerna.json                            # lerna配置
├── LICENSE                               # 许可文件
├── package.json                          # 
├── README.md                             # 
├── RELEASE_PLAN.md                       # 发布计划
├── renovate.json                         # renovate（更新依赖）配置
└── package.json
```

### packages源码目录
``` bash
.
├── packages
│   ├── babel-preset-app                  # nuxt默认的babel preset
│   │   ├── src
│   │   │   ├── index.js
│   │   │   └── polyfills-plugin.js
│   │   └── package.json
│   │ 
│   ├── builder                           # nuxt默认的babel preset
│   │   ├── src
│   │   │   ├── context
│   │   │   │   └── context
│   │   │   ├── index.js
│   │   │   ├── ignore.js
│   │   │   └── builder.js
│   │   └── package.json
│   │ 
│   ├── babel-preset-app                  # nuxt默认的babel preset
│   │   ├── src
│   │   │   ├── index.js
│   │   │   └── polyfills-plugin.js
│   └───└── package.json
└────────────────────────────
```

## 参考链接

[https://allcontributors.org/docs/zh-cn/bot/configuration](https://allcontributors.org/docs/zh-cn/bot/configuration)

[https://www.npmjs.com/package/renovate](https://www.npmjs.com/package/renovate)