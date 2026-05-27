import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Codex + Claude Code 配置教程',
  description: 'Codex 与 Claude Code 安装、密钥接入和 VS Code 配置教程',
  base: '/codex-claude-docs/',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AI 工具配置教程',
    nav: [
      { text: '基础配置', link: '/#basic-config' },
      { text: '环境准备', link: '/#environment' },
      { text: 'Codex 配置', link: '/#codex' },
      { text: 'Claude Code 配置', link: '/#claude-code' },
      { text: 'VS Code 配置', link: '/#vscode' }
    ],
    sidebar: [
      {
        text: '教程目录',
        items: [
          { text: '配置路线', link: '/#route' },
          { text: '开始之前', link: '/#before-start' },
          { text: '基础配置', link: '/#basic-config' },
          { text: '环境准备', link: '/#environment' },
          { text: 'Codex 配置', link: '/#codex' },
          { text: 'Claude Code 配置', link: '/#claude-code' },
          { text: 'VS Code 配置', link: '/#vscode' },
          { text: '联系方式', link: '/#contact' }
        ]
      }
    ],
    outline: false,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
