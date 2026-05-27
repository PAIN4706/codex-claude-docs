---
aside: false
prev: false
next: false
---

<span id="top"></span>

# <span class="gradient-title">Codex + Claude Code 配置教程</span>

这是一份按实际配置顺序整理的长页教程。照着从上往下完成 CC Switch、CodeMax 密钥、Node.js 环境、Codex、Claude Code 和 VS Code 插件配置后，就可以在本机使用这两个 AI 编程工具。

## 配置路线 {#route}

| 顺序 | 章节 | 你会完成什么 |
| --- | --- | --- |
| 1 | [基础配置](#basic-config) | 安装 CC Switch，并在 CodeMax 平台准备密钥 |
| 2 | [环境准备](#environment) | 检查 Node.js、npm，Windows 用户安装 Git |
| 3 | [Codex 配置](#codex) | 安装 Codex CLI，导入密钥并测试运行 |
| 4 | [Claude Code 配置](#claude-code) | 安装 Claude Code，导入 Claude 密钥并测试运行 |
| 5 | [VS Code 配置](#vscode) | 安装 Codex 与 Claude Code 插件 |

## 开始之前 {#before-start}

你需要准备：

- 一台可以正常联网的电脑。
- Node.js、npm 和终端环境。
- CC Switch，用来切换和管理大模型 API。
- CodeMax 平台账号，用来创建 API 密钥。

## 基础配置 {#basic-config}

先完成两个关键准备：安装 CC Switch，并在 CodeMax 平台创建自己的 API 密钥。

### 1. 安装 CC Switch

CC Switch 能一键帮助你轻松切换大模型 API。先下载并安装 CC Switch。

<div class="action-row">
  <a class="doc-button" href="https://github.com/farion1231/cc-switch/releases/tag/v3.15.0" target="_blank" rel="noreferrer">下载 CC Switch</a>
</div>

点击下载按钮后，选择适合自己系统的文件下载。这个页面可能需要稳定的网络环境才能正常打开（魔法）。

<img class="doc-screenshot doc-screenshot--wide" src="/images/ccswitch.png" alt="CC Switch 下载页面">

### 2. 准备密钥

下面提供两个 CodeMax 入口，普通入口和邀请入口都可以使用。邀请入口会自动带上邀请码；如果页面要求手动填写，邀请码是 `XN3L6CPX485J`。不需要邀请码时，直接用普通入口即可。

<div class="action-row">
  <a class="doc-button" href="https://api.codemax.store/" target="_blank" rel="noreferrer">进入 CodeMax 平台</a>
  <a class="doc-button doc-button-secondary" href="https://api.codemax.store/register?aff=XN3L6CPX485J" target="_blank" rel="noreferrer">使用邀请链接注册</a>
</div>

注册后登录平台，创建自己的 API 密钥。密钥只在你自己本机配置时使用，不要发给别人，也不要放进公开截图或公开仓库。

<img class="doc-screenshot doc-screenshot--wide" src="/images/APIkey1.png" alt="CodeMax API Key 创建页面">

<img class="doc-screenshot doc-screenshot--wide" src="/images/APIkey2.png" alt="CodeMax API Key 详情页面">

## 环境准备 {#environment}

Codex 和 Claude Code 都需要先准备好基础运行环境。本节主要检查 Node.js，并给 Windows 用户补充 Git 安装建议。

### 1. Node.js

Node.js 是一个运行环境，Codex 和 Claude Code 要靠它才能跑起来。

先运行下面命令，确认本机已经安装 Node.js。只要能输出版本号，就说明环境正常。

```powershell
node -v
```

### 如果没有 Node.js

在管理员终端里运行对应系统的安装命令。

::: code-group

```powershell [Windows]
winget install OpenJS.NodeJS.LTS
```

````md [Linux]
先安装 Homebrew：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

再安装 Node.js：

```bash
brew install node
```
````

:::

安装成功后重新打开终端，检查 Node.js 和 npm 是否安装成功：

```powershell
node -v
npm -v
```

<img class="doc-screenshot doc-screenshot--small" src="/images/nodetest.png" alt="Node.js 安装测试">

### 2. Windows 用户建议安装 Git

如果你在 Windows 上使用 Claude Code，建议把 Git for Windows 一起装上。原因不是为了 Git 本身，而是它会带来 Git Bash 这套更顺手的命令行环境。

<div class="action-row">
  <a class="doc-button" href="https://git-scm.com/download/win" target="_blank" rel="noreferrer">下载 Git for Windows</a>
</div>

进入安装页面后下载 Git，运行安装包，一直点击下一步即可。

<img class="doc-screenshot doc-screenshot--wide" src="/images/gitdownload.png" alt="Git 下载页面">

安装成功后重新打开终端，检查是否安装成功：

```powershell
git --version
```

能输出版本号就说明运行成功。

<img class="doc-screenshot doc-screenshot--small" src="/images/gittest.png" alt="Git 安装测试">

## Codex 配置 {#codex}

本节完成 Codex CLI 安装、密钥接入、测试运行，以及 Codex 桌面端安装。

### 1. 安装 Codex CLI

确保已经安装 Node.js，然后运行下面命令下载 Codex CLI：

```bash
npm i -g @openai/codex@latest
```

### 2. 接入密钥

这里先不着急运行 `codex`，先回到 CodeMax 网页，将配置好的密钥导入到 CC Switch。

<div class="action-row">
  <a class="doc-button" href="https://api.codemax.store/" target="_blank" rel="noreferrer">进入 CodeMax 平台</a>
</div>

<img class="doc-screenshot doc-screenshot--wide" src="/images/setupkey1.png" alt="CodeMax 导入密钥入口">

打开 CC Switch，进入编辑界面。

<img class="doc-screenshot doc-screenshot--medium" src="/images/setupkey2.png" alt="CC Switch 编辑界面">

确保 API Key 和请求地址无误。

<img class="doc-screenshot doc-screenshot--medium" src="/images/setupkey3.png" alt="CC Switch API Key 与请求地址">

退出来点击测试，显示运行正常就说明 API Key 已经接好。

<img class="doc-screenshot doc-screenshot--medium" src="/images/setupkey4.png" alt="CC Switch 测试通过">

### 3. 测试运行

打开终端输入下面命令，能拉起对话就成功了。

```powershell
codex
```

<img class="doc-screenshot doc-screenshot--wide" src="/images/codextest.png" alt="Codex CLI 测试运行">

### 4. 安装 Codex 桌面端

打开微软商店，搜索 Codex 并安装即可。

<img class="doc-screenshot doc-screenshot--medium" src="/images/codexapp.png" alt="微软商店安装 Codex">

## Claude Code 配置 {#claude-code}

本节完成 Claude Code 安装、密钥接入和测试运行。

### 1. 安装 Claude Code

确保前面的环境都已经配置好，然后在终端运行下面命令安装 Claude Code：

```bash
npm install -g @anthropic-ai/claude-code
```

### 2. 接入密钥

这里可以再建一个适配 Claude 的新密钥，选择 Claude 模型，接着点击导入到 CCS。

<img class="doc-screenshot doc-screenshot--wide" src="/images/claudekey1.png" alt="CodeMax 创建 Claude 密钥">

可以到 CC Switch 中检查一遍，确认导入到 Claude，而不是导入到 Codex。

<img class="doc-screenshot doc-screenshot--medium" src="/images/claudekey2.png" alt="CC Switch 检查 Claude 密钥">

### 3. 测试运行

打开终端输入 `claude`。进入时会发起工作目录请求，默认在 C 盘，直接回车确认即可。之后就可以与 Claude Code 对话。

```powershell
claude
```

<img class="doc-screenshot doc-screenshot--wide" src="/images/claudetest.png" alt="Claude Code 测试运行">

::: tip
如果提示命令不存在，先关闭终端重新打开，再运行 `claude`。仍然失败时，重新执行安装命令。
:::

## VS Code 配置 {#vscode}

本节完成 VS Code 中 Codex 插件和 Claude Code 插件的安装。

### 1. 安装 Codex 插件

在 VS Code 扩展商店中搜索 `codex`，选择第一个结果下载。

<img class="doc-screenshot doc-screenshot--wide" src="/images/VScodex.png" alt="VS Code 安装 Codex 插件">

### 2. 安装 Claude Code 插件

在 VS Code 扩展商店中搜索 `claude code`，选择第一个结果下载。

<img class="doc-screenshot doc-screenshot--wide" src="/images/VSclaude.png" alt="VS Code 安装 Claude Code 插件">

### 使用建议

插件安装完成后，仍然建议保留命令行工具。Codex CLI 和 Claude Code CLI 更适合项目级操作，VS Code 插件更适合在编辑器里快速发起辅助请求。

## 联系方式 {#contact}

<div class="contact-card">
  <div class="contact-info">
    <span>配置过程中遇到问题，可以联系</span>
    <strong>QQ：3243443733</strong>
    <a class="contact-link" href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=1105276283&card_type=group&source=qrcode">AI 交流群：1105276283</a>
  </div>
  <a class="contact-qr-link" href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=1105276283&card_type=group&source=qrcode" aria-label="加入 AI 交流群">
    <img class="contact-qr" src="/images/QQ-group.png" alt="AI 交流群二维码">
  </a>
</div>

