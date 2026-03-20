# TechFlow 企业官网

一个简洁科技风格的企业官网，采用深色主题设计，具有现代化视觉效果和流畅的用户体验。

## 在线预览

🌐 [https://deluershu.github.io/deluershu/](https://deluershu.github.io/deluershu/)

## 功能特点

- 🎨 **科技风格设计** - 深色主题 + 青紫渐变 + 发光效果
- 📱 **响应式布局** - 完美适配 PC 端和移动端
- ⚡ **流畅动画** - 网格移动、光晕脉冲、卡片悬停等动效
- 🚀 **快速加载** - Vite 构建，支持热更新

## 页面结构

### 首页 (/)
- **Hero Banner** - 渐变标题 + 动态网格背景 + 光晕效果
- **卖点展示** - 4 个核心优势卡片（高效智能、安全可靠、数据驱动、云端部署）
- **产品入口** - 3 个核心产品预览卡片
- **数据统计** - 企业客户数、服务可用性、技术支持
- **CTA 区域** - 行动号召按钮

### 产品页 (/products)
- 6 个产品卡片列表展示
- 每个产品包含：名称、简介、功能标签、试用按钮
- 产品分类：智能数据平台、企业协作系统、智能客服机器人、云端开发平台、数据分析引擎、安全防护系统

### 联系页 (/contact)
- **留资表单** - 姓名、电话、公司名称、留言内容
- **联系信息** - 公司地址、联系电话、电子邮箱、工作时间
- **快速咨询** - 一键拨打服务热线

## 技术栈

| 技术 | 说明 |
|------|------|
| React 18 | 前端 UI 框架 |
| TypeScript | 类型安全 |
| Vite | 构建工具 |
| React Router | 路由管理 (HashRouter) |
| CSS3 | 样式（变量、动画、渐变） |

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
访问 http://localhost:5173 查看效果

### 构建生产版本
```bash
npm run build
```

## 项目结构

```
src/
├── components/          # 公共组件
│   ├── Navbar.tsx       # 顶部导航栏
│   ├── Footer.tsx       # 页脚
│   └── CTAButton.tsx    # CTA 按钮
├── pages/               # 页面组件
│   ├── Home.tsx         # 首页
│   ├── Products.tsx     # 产品页
│   └── Contact.tsx      # 联系页
├── App.tsx              # 路由配置
└── index.css            # 全局样式
```

## 部署到 GitHub Pages

本项目已配置 GitHub Actions 自动部署：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建并部署
3. 访问 `https://你的用户名.github.io/仓库名/`

## 设计规范

- **主色调**: 青色 (#00d4ff) + 紫色 (#7c3aed)
- **背景色**: 深蓝黑 (#0a0a1a)
- **字体**: Inter, system-ui
- **圆角**: 16px (卡片), 8px (按钮)
- **动效**: cubic-bezier 缓动函数

## License

MIT
