#### 协议
- 一般库选择MIT协议，如果涉及专利技术，则可以选择Apache协议
    - MIT：Jq、React、Vue、Angular、Eslint
    - Apache：Echarts、less、ts
- 如何创建LISENCE文件
    - 通过指令 `npm i touch-cli -g`全局安装，为了能全局使用touch指令
    - 然后通过`touch LISENCE`创建文件
#### 文档
- 合格的库文档应该包含哪些内容呢？
    - README
        - 使用者最先看到的，书写原则`主题清晰`、`内容简洁`。
        - 包含内容：
            - 库的介绍 —— 概括介绍库解决的问题
            - 使用者指南 —— 帮助使用者快速了解如何使用
            - 贡献者指南 —— 方便社区为开源库做贡献
    - 待办清单
    - 变更日志
    - API文档
- 文档应该如何书写呢？`使用Markdown语法，是一种轻量级标记语言`