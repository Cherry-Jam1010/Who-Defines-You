下面这个框架按**“轻量、可部署、可发给别人直接打开链接”**来设计。核心原则是：**纯前端、无后端、无数据库、摄像头只在本地浏览器显示，不上传视频。**

# 网站框架：《你，被谁定义？》

## 1. 技术定位

做成一个 **React + Vite 静态网站**。

原因是：Vite 支持把项目构建成静态文件，适合部署到 GitHub Pages、Netlify、Vercel 这类平台；Vite 官方也提供静态部署说明。([vitejs][1])

推荐技术栈：

| 模块   | 技术                                      |
| ---- | --------------------------------------- |
| 前端框架 | React + Vite                            |
| 样式   | Tailwind CSS                            |
| 动画   | Framer Motion                           |
| 摄像头  | `navigator.mediaDevices.getUserMedia()` |
| 视觉叠加 | CSS + Canvas                            |
| 部署   | Vercel / Netlify / GitHub Pages         |
| 数据存储 | 不需要                                     |
| 后端   | 不需要                                     |

注意：摄像头 API 只能在 **HTTPS 或 localhost 等安全上下文**中使用，所以不要让别人直接双击 `index.html` 打开；最好部署成 HTTPS 链接再发给别人。MDN 明确说明 `getUserMedia()` 只在 secure context 中可用。([MDN网页文档][2])

---

# 2. 网站整体结构

建议做成一个**单页滚动网站**，而不是很多独立页面。这样更轻，部署更简单，也更适合课堂展示。

```txt
首页 Hero
↓
镜像入口 Camera Mirror
↓
时代之镜 Gender Through History
↓
理论之镜 Causes of Gender Identity
↓
标签风暴 Label Storm
↓
案例档案 Case Archive
↓
最后的镜子 Reflection
↓
参考文献 References
```

---

# 3. 页面模块设计

## ① 首页 Hero

功能：建立主题氛围。

内容：

```txt
你，被谁定义？
Who Defines You?

性别不仅是身体，也是角色、语言、认同与社会关系中的自我经验。

[打开镜子]
```

视觉：

* 深蓝黑背景
* 中央发光镜框
* 少量流动粒子
* 按钮点击后滚动到摄像头区域

---

## ② 镜像入口 Camera Mirror

功能：调用摄像头，让用户看到自己。

内容：

```txt
请允许摄像头访问。
视频不会被上传，只会在你的浏览器本地显示。
```

交互：

* 用户允许摄像头后，显示实时视频
* 用户拒绝摄像头后，显示一个抽象人形占位图
* 镜框周围显示轻微扫描线和光晕

组件建议：

```txt
CameraMirror.jsx
```

核心逻辑：

```js
navigator.mediaDevices.getUserMedia({ video: true })
```

这里一定要写隐私提示，因为议题涉及身份，而且摄像头会让用户敏感。

---

## ③ 时代之镜 Gender Through History

功能：满足“从古至今人们对于性别的定义至少3点”。

设计成四个可点击模式：

| 模式   | 标题        | 视频效果                  |
| ---- | --------- | --------------------- |
| 身体定义 | 性别 = 生理结构 | 医学扫描线、DNA、激素词汇        |
| 角色定义 | 性别 = 社会分工 | 家庭、劳动、婚姻、责任标签         |
| 文化定义 | 性别 = 社会建构 | 玩具、服饰、学校、语言、同伴        |
| 主体定义 | 性别 = 内在认同 | 柔和光谱、identity/self 词云 |

页面文案示例：

```txt
在不同历史时期，性别并不总是以同一种方式被理解。
它可以被看作身体分类、社会角色、文化规范，也可以被看作个体对自我的内在体验。
```

组件建议：

```txt
HistoryLens.jsx
LensCard.jsx
KeywordOverlay.jsx
```

---

## ④ 理论之镜 Causes of Gender Identity

功能：满足“对于性别认同原因的解释至少3点”。

三个核心解释：

| 解释    | 内容             | 视觉            |
| ----- | -------------- | ------------- |
| 生物解释  | 基因、产前激素、大脑神经发育 | 神经网络、DNA、蓝色扫描 |
| 社会化解释 | 家庭、学校、同伴、媒体、文化 | 标签、社交节点、对话气泡  |
| 整合解释  | 生物—心理—社会交互     | 多层同心圆、动态结构图   |

主立场建议放在“整合解释”：

```txt
性别认同不是由单一因素决定的。
它更像是在身体基础、心理发展、社会经验和文化语言之间逐渐形成的自我理解。
```

组件建议：

```txt
TheoryLens.jsx
TheorySwitcher.jsx
BioPsychoSocialDiagram.jsx
```

---

## ⑤ 标签风暴 Label Storm

这是网站最有互动感的一页。

功能：让用户体验“被外界定义”。

交互流程：

```txt
用户点击 [开始标签风暴]
↓
标签随机飞入，覆盖摄像头画面
↓
用户点击 [移除外界标签]
↓
标签散开
↓
出现核心句子
```

标签内容：

```txt
男孩子应该勇敢
女孩子应该温柔
你不像男生
你不像女生
正常
异常
只是青春期
只是被影响
这是真正的你吗？
别人怎么看你？
你怎么看自己？
```

标签散开后的文案：

```txt
性别认同不是别人贴上的标签，
而是个体对自身性别的内在经验。
```

组件建议：

```txt
LabelStorm.jsx
FlyingLabel.jsx
```

实现方式：

* 用数组保存标签文本
* 随机生成位置、旋转角度、动画延迟
* Framer Motion 控制飞入和消散

---

## ⑥ 案例档案 Case Archive

功能：把 John/Joan 和 ROGD 放进学术讨论，而不是情绪化讨论。

设计成两个档案卡片。

### 案例一：John/Joan

```txt
被安排的身份：John/Joan 案例

David Reimer 因医疗事故被按照女孩 Brenda 抚养。
这一案例后来被用来反思“性别认同是否可以完全由后天塑造”。

启示：
它反驳了“后天抚养可以任意塑造性别认同”的强版本观点，
也提醒我们重视儿童身体自主权、知情同意和医学伦理。
```

### 案例二：ROGD 争议

```txt
快速发病型性别烦躁：现象还是假设？

Littman 2018 年提出部分青少年在青春期突然出现性别烦躁，
并可能与同伴群体和社交媒体有关。

争议：
该研究主要基于父母报告，
缺少青少年本人和临床医生数据，
因此更适合作为待研究假设，而非确定诊断。
```

组件建议：

```txt
CaseArchive.jsx
CaseCard.jsx
```

---

## ⑦ 最后的镜子 Reflection

功能：放自己的思考。

设计为四个问题卡片：

```txt
我的性别，是身体决定的吗？
我的性别，是社会告诉我的吗？
我的性别，是我自己感受到的吗？
当这些答案不一致时，我该如何理解自己？
```

最后总结：

```txt
性别认同既不是完全脱离身体的自由选择，
也不是可以被社会任意制造的标签。

它更像是身体、心理、社会与文化共同作用下，
一个人对“我是谁”的持续理解。

面对青少年的性别困扰，
我们需要的不是仓促判断，
而是尊重、审慎、证据与支持。
```

---

# 4. 推荐文件结构

```txt
who-defines-you/
├── public/
│   ├── favicon.svg
│   └── poster-preview.png
│
├── src/
│   ├── assets/
│   │   ├── textures/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CameraMirror.jsx
│   │   ├── MirrorFrame.jsx
│   │   ├── LensCard.jsx
│   │   ├── KeywordOverlay.jsx
│   │   ├── FlyingLabel.jsx
│   │   ├── CaseCard.jsx
│   │   └── SectionTitle.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── MirrorIntro.jsx
│   │   ├── HistoryLens.jsx
│   │   ├── TheoryLens.jsx
│   │   ├── LabelStorm.jsx
│   │   ├── CaseArchive.jsx
│   │   ├── Reflection.jsx
│   │   └── References.jsx
│   │
│   ├── data/
│   │   ├── historyLenses.js
│   │   ├── theoryLenses.js
│   │   ├── labels.js
│   │   ├── cases.js
│   │   └── references.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

# 5. 轻量部署方案

## 最推荐：Vercel

适合你这种 React + Vite 项目。Vercel 官方支持 Vite 项目部署，并且可以连接 Git 仓库生成部署链接。([Vercel][3])

优点：

* 操作简单
* 自动 HTTPS
* 适合发链接给别人
* 修改代码后可以自动重新部署

适合最终展示。

---

## 备选：Netlify

Netlify 官方也有 Vite 部署指南，支持连接 Git 仓库后自动部署。([Netlify Docs][4])

优点：

* 拖拽 `dist` 文件夹也能部署
* 适合不想配置太多的人
* 同样有 HTTPS

---

## 备选：GitHub Pages

也可以，但 Vite 项目部署到 GitHub Pages 时通常需要配置 `base` 路径，否则可能出现资源加载错误。Vite 官方静态部署指南包含 GitHub Pages 部署说明。([vitejs][1])

适合：

* 你想把项目和代码一起放到 GitHub
* 展示为课程项目
* 后续写进 GitHub profile

---

# 6. package.json 建议

```json
{
  "name": "who-defines-you",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "latest",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "tailwindcss": "latest",
    "postcss": "latest",
    "autoprefixer": "latest"
  }
}
```

---

# 7. App.jsx 结构

```jsx
import Hero from "./sections/Hero";
import MirrorIntro from "./sections/MirrorIntro";
import HistoryLens from "./sections/HistoryLens";
import TheoryLens from "./sections/TheoryLens";
import LabelStorm from "./sections/LabelStorm";
import CaseArchive from "./sections/CaseArchive";
import Reflection from "./sections/Reflection";
import References from "./sections/References";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <MirrorIntro />
      <HistoryLens />
      <TheoryLens />
      <LabelStorm />
      <CaseArchive />
      <Reflection />
      <References />
    </main>
  );
}
```

---

# 8. 数据层设计

把文字内容单独放进 `data/`，这样后续修改文案不用动组件。

例如 `historyLenses.js`：

```js
export const historyLenses = [
  {
    id: "body",
    title: "身体定义",
    formula: "性别 = 生理结构",
    description:
      "在生物医学视角中，性别常被理解为与染色体、激素、生殖器官和生殖功能相关的身体属性。",
    keywords: ["染色体", "激素", "身体", "生殖", "医学分类"],
    filter: "grayscale"
  },
  {
    id: "role",
    title: "角色定义",
    formula: "性别 = 社会分工",
    description:
      "在许多传统社会中，性别不仅是身体分类，也是一套关于家庭、劳动和社会角色的规范。",
    keywords: ["家庭", "劳动", "婚姻", "责任", "角色期待"],
    filter: "warm"
  },
  {
    id: "culture",
    title: "文化定义",
    formula: "性别 = 社会建构",
    description:
      "社会建构论认为，性别意义并非天然固定，而是在文化、教育、语言和日常互动中被反复塑造。",
    keywords: ["文化", "语言", "学校", "同伴", "媒体"],
    filter: "blue"
  },
  {
    id: "identity",
    title: "主体定义",
    formula: "性别 = 内在认同",
    description:
      "当代心理学更强调性别认同是个体对自身性别的内在感知与主观体验。",
    keywords: ["自我", "认同", "表达", "体验", "被承认"],
    filter: "spectrum"
  }
];
```

---

# 9. README 部署说明建议

你可以在项目里写一个简单 `README.md`：

````md
# 你，被谁定义？ Who Defines You?

这是一个用于心理学课程展示的互动叙事网站，主题为性别定义、性别认同及其成因争议。

## 技术栈

- React
- Vite
- Tailwind CSS
- Framer Motion
- getUserMedia 摄像头 API

## 本地运行

```bash
npm install
npm run dev
````

## 构建

```bash
npm run build
```

构建结果会生成在 `dist/` 文件夹中。

## 部署

推荐部署到：

* Vercel
* Netlify
* GitHub Pages

由于网站使用摄像头 API，请使用 HTTPS 链接访问。

````

---

# 10. 最终轻量分享方式

你最后有三种发给别人的方式：

| 方式 | 推荐程度 | 说明 |
|---|---:|---|
| Vercel 链接 | 最高 | 最省事，发一个网址即可 |
| Netlify 链接 | 高 | 可以拖拽部署，适合快速展示 |
| GitHub Pages | 中高 | 适合课程项目和开源展示 |
| 直接发 zip | 不推荐 | 摄像头可能因为非 HTTPS / 非 localhost 不能用 |

最稳妥的是：

```txt
React + Vite 开发
↓
npm run build
↓
部署到 Vercel / Netlify
↓
生成 HTTPS 链接
↓
发给老师或同学
````

这样别人不需要安装任何东西，直接打开网页即可。

[1]: https://vite.dev/guide/static-deploy?utm_source=chatgpt.com "Deploying a Static Site"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia?utm_source=chatgpt.com "MediaDevices: getUserMedia() method - Web APIs | MDN"
[3]: https://vercel.com/docs/frameworks/frontend/vite?utm_source=chatgpt.com "Vite on Vercel"
[4]: https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/?utm_source=chatgpt.com "Vite on Netlify"
