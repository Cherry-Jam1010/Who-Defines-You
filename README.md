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
- 参考文献 References（23 篇，含 7 篇可直接下载 PDF）

## 参考文献

所有文献均可直接核对，共分为八大类：

**官方指南与立场文件**
- APA 2015 跨性别心理实践指南
- WPATH SOC-8 (2022)
- AAP 立场文件 (2018)

**支持性环境与心理健康实证**
- Olson et al. (2016) — 支持性环境与儿童心理健康
- Reisner et al. (2015) — 跨性别青少年心理健康风险
- Gower et al. (2018) — 社会支持的保护作用
- Pollitt et al. (2021) — 自选名字与心理健康
- The Trevor Project (2022) — 全国 LGBTQ 青年调查

**肯定性医疗干预**
- Almeida et al. (2023) — JAMA Network Open 肯定性医疗研究
- Russo et al. (2023) — NEJM 2年追踪激素干预研究
- Kaltiala & Wierenga (2023) — Annual Review 综述

**家庭与社会支持**
- Ryan et al. (2010) — 家庭接纳与 LGBT 青年健康
- Russell & Fish (2016) — 性少数青年健康综述

**神经生物学与基因基础**
- Swaab & Garcia-Falgueras (2018) — 性别认同神经生物学综述（PMC 免费全文）

**整合理论与综述**
- Cecilia et al. (2024) — 性别认同发展综述（Anales de Pediatría）
- Olson & Enright (2022) — 性别多样儿童发展综述（PMC 免费全文）
- VanderLaan & Wong (2022) — Springer 专著《性别与性取向发展》

**社会角色与社会化理论**
- Bussey & Bandura (1999) — 社会认知理论（Psychological Review）
- Eagly, Wood & Diekman (2000) — 社会角色理论
- Wood & Eagly (2012) — 生物社会建构模型（Advances in Experimental Social Psychology）
- Eagly & Wood (2009) — 25年性别心理学综述

**案例研究与争议讨论**
- Diamond & Sigmundson (1997) — John/Joan (David Reimer) 案例
- Littman (2018) — ROGD 假设（含 2019 更正）

PDF 原文位于 `references_downloads/` 目录，可在网页参考文献页面直接下载。

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
