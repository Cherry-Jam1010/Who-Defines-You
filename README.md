# 你，被谁定义？ Who Defines You?

一个用于心理学课程作业展示的 `React + Vite` 单页互动网站，主题聚焦于性别定义、性别认同及其成因。

## 内容结构

- 首页 Hero
- 摄像头镜子 Camera Mirror
- 时代之镜 History Lens
- 理论之镜 Theory Lens
- 标签风暴 Label Storm
- 案例档案 Case Archive
- 最后的镜子 Reflection
- 参考文献 References

## 技术说明

- `React + Vite`
- 纯前端静态站点，无后端
- 使用 `navigator.mediaDevices.getUserMedia()` 调用本地摄像头
- 单页滚动结构，适合部署到 `Vercel` 或 `Netlify`

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 部署说明

推荐直接部署到：

- `Vercel`
- `Netlify`

由于页面使用摄像头 API，请通过 `HTTPS` 或 `localhost` 访问，避免直接双击 `index.html` 打开。
