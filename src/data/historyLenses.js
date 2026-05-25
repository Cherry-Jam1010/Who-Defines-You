export const historyLenses = [
  {
    id: "body",
    title: "身体定义",
    formula: "性别 = 生理结构",
    summary:
      "在这种视角中，性别常被理解为由染色体、激素水平、生殖结构与医学分类共同决定的身体属性。",
    note:
      "它强调身体事实的重要性，但也可能忽略个体如何理解、感受并表达自己。",
    keywords: ["染色体", "激素", "生殖结构", "医学分类", "DNA"],
    filter: "grayscale(0.16) contrast(1.22) saturate(0.74)",
    accent: "var(--accent-ice)",
    visual: {
      beamColor: "180,214,255",
      glowColor: "124,162,255",
      particleColors: ["#e8f2ff", "#9ccfff", "#7c93ff"],
      echoShift: "10px",
      echoOpacity: 0.14,
      beamOpacity: 0.14,
      gridOpacity: 0.08,
      particleCount: 26
    }
  },
  {
    id: "role",
    title: "角色定义",
    formula: "性别 = 社会分工",
    summary:
      "许多社会会把性别与家庭职责、劳动角色、婚姻规范和社会期待捆绑在一起，形成清晰但强制性的角色模板。",
    note:
      "这个解释提醒我们：性别经常不只是身体分类，也是被分派、被要求去完成的一套社会角色。",
    keywords: ["家庭", "劳动", "婚姻", "责任", "角色期待"],
    filter: "sepia(0.24) contrast(1.08) saturate(0.88)",
    accent: "var(--accent-amber)",
    visual: {
      beamColor: "236,188,126",
      glowColor: "212,145,84",
      particleColors: ["#ffe2bf", "#d9bb91", "#b5865b"],
      echoShift: "14px",
      echoOpacity: 0.2,
      beamOpacity: 0.18,
      gridOpacity: 0.1,
      particleCount: 30
    }
  },
  {
    id: "culture",
    title: "文化定义",
    formula: "性别 = 社会建构",
    summary:
      "社会建构视角认为，性别意义会在语言、教育、媒体、消费文化与日常互动中被持续制造、强化和复制。",
    note:
      "它强调性别规范并不是天然不变的，而是可以被质疑、协商与重写的。",
    keywords: ["语言", "学校", "媒体", "服饰", "同伴文化"],
    filter: "hue-rotate(16deg) contrast(1.08) saturate(1.12)",
    accent: "var(--accent-cyan)",
    visual: {
      beamColor: "125,233,255",
      glowColor: "72,174,235",
      particleColors: ["#cbf7ff", "#82d2ff", "#4ab3ea"],
      echoShift: "18px",
      echoOpacity: 0.24,
      beamOpacity: 0.22,
      gridOpacity: 0.12,
      particleCount: 32
    }
  },
  {
    id: "identity",
    title: "主体定义",
    formula: "性别 = 内在认同",
    summary:
      "当代心理学更强调性别认同是个体对自身性别的主观感受、自我理解与持续经验，而不是外界标签的简单总和。",
    note:
      "它把问题从“别人如何归类我”转向“我如何经验、理解并确认自己”。",
    keywords: ["自我", "认同", "经验", "表达", "被承认"],
    filter: "contrast(1.12) saturate(1.18) brightness(1.03)",
    accent: "var(--accent-violet)",
    visual: {
      beamColor: "173,152,255",
      glowColor: "132,116,255",
      particleColors: ["#efe3ff", "#a9a7ff", "#7a7cff"],
      echoShift: "22px",
      echoOpacity: 0.3,
      beamOpacity: 0.26,
      gridOpacity: 0.14,
      particleCount: 36
    }
  }
];
