(function () {
  "use strict";
  const text = {
    en: {
      skip: "Skip to the workspace",
      navigation: "Main navigation",
      navTools: "Tools",
      navExperiments: "Interactive studio",
      experimentsEyebrow: "02 / INTERACTIVE STUDIO",
      experimentsTitle: "A little curiosity. A clearer next step.",
      experimentsIntro:
        "Four free, local experiences for exploring AI collaboration, career interests, governance choices and working life. Bring a question; leave with a shareable snapshot.",
      workstyleKind: "YOUR AI COLLABORATION STYLE",
      workstyleTitle: "AI Workstyle",
      workstyleDescription:
        "Twenty original situations. Four collaboration axes. Explore how you prompt, check, iterate and set boundaries.",
      careerKind: "INTERESTS TO EXPLORE",
      careerTitle: "Career Compass",
      careerDescription:
        "Map six kinds of interests through original activities. Discover career families to investigate and a small experiment to try.",
      juryKind: "AI DECISIONS, HUMAN CHOICES",
      juryTitle: "Algorithm Jury",
      juryDescription:
        "Step into fictional AI dilemmas. Choose a response, examine the tradeoff, and explore the governance priorities behind your decisions.",
      offerKind: "YOUR NEXT CHAPTER",
      offerTitle: "Offer Lab",
      offerDescription:
        "Compare income, time, growth, autonomy and meaning. Change your priorities and inspect every contribution to the ranking.",
      tryExperience: "Try it ↗",
      experimentsBoundary:
        "Original, transparent explorations—not validated personality diagnoses, hiring predictions, or legal verdicts. No model calls or answer uploads. PNG cards are for voluntary sharing.",
      navInterests: "Research interests",
      navMethod: "Method",
      heroEyebrow: "OPEN RESEARCH WORKSPACE / SOCIAL LAW × AI GOVERNANCE",
      heroLaw: "Law, with evidence.",
      heroAi: "AI, with accountability.",
      heroDescription:
        "Exploring how social law can respond to algorithmic management, and how research on large language models can remain traceable, testable, and open to review.",
      openLibrary: "Open the literature library",
      exploreTools: "Explore the tools",
      workspaceStatus:
        "Open research interests · Working tools · Reproducible methods",
      workflowLabel: "A source-centered research workflow",
      figureHeading: "A SOURCE-CENTERED WORKFLOW",
      figureLibrary: "Keep the original.",
      figureLibraryCaption: "Literature Library",
      figureTrace: "Locate a passage",
      figureReview: "Record a review",
      figurePlan: "Connect the next step",
      figureFootnote: "From reading to an inspectable research record.",
      toolsEyebrow: "01 / BUILDING BLOCKS",
      toolsTitle: "Small tools. A connected workflow.",
      toolsIntro:
        "Four practical workspaces for reading, checking, tracing, and planning legal research.",
      auditKind: "BIBLIOGRAPHY & REVIEW",
      auditTitle: "Citation Audit",
      auditDescription:
        "Inspect reference fields and duplicates, optionally compare DOI metadata with Crossref, and preserve a separate human source review.",
      auditTag1: "Local checks",
      auditTag2: "Opt-in DOI lookup",
      atlasKind: "PASSAGES & EVIDENCE",
      atlasTitle: "Evidence Atlas",
      atlasDescription:
        "Retrieve Chinese and English paragraphs, inspect BM25 scores, and annotate how an exact source passage relates to a claim.",
      atlasTag1: "Source snapshots",
      atlasTag2: "30-query benchmark",
      roadmapKind: "QUESTIONS & DELIVERABLES",
      roadmapTitle: "Research Roadmap",
      roadmapDescription:
        "Link research questions to reading, experiments, deadlines, and artifacts. Review dependencies and forecast work against real capacity.",
      roadmapTag1: "Reading-list import",
      roadmapTag2: "Research reflections",
      libraryKind: "THE READING WORKSPACE",
      libraryFeatured: "Start here",
      libraryTitle: "Literature Library",
      libraryDescription:
        "Keep actual PDF, TXT, and Markdown originals alongside editable records. Browse by journal, author, year, or theme; read papers and export a source-grounded review outline.",
      libraryTag1: "Original files retained",
      libraryTag2: "Complete ZIP backup",
      libraryTag3: "Review outline → reading plan",
      openTool: "Open tool ↗",
      openLibraryShort: "Open library ↗",
      source: "Source ↗",
      suiteBoundary:
        "These tools organize and check research materials. Source authority, legal effect, and the strength of an argument remain matters for reading and human judgment.",
      interestsEyebrow: "03 / QUESTIONS TO PURSUE",
      interestsTitle: "Social law meets AI governance.",
      interestsIntro:
        "Open research interests that guide the tools and a developing research agenda.",
      workersTitle: "Workers & algorithmic management",
      workersDescription:
        "How do automated allocation, monitoring, and evaluation reshape workers’ ability to understand and contest decisions?",
      workersTopics: "Platform labour · Procedural protection · Evidence",
      protectionTitle: "Social protection & access",
      protectionDescription:
        "How should AI-mediated benefit services be assessed for accessibility, unequal burdens, and routes to human assistance?",
      protectionTopics: "Social security · Access · Human review",
      accountabilityTitle: "LLM accountability",
      accountabilityDescription:
        "What evidence is needed to examine citation reliability, retrieval failures, and the limits of model-assisted legal work?",
      accountabilityTopics: "Source tracing · Evaluation · Reproducibility",
      agendaNote:
        "This is a draft agenda: research questions and proposed designs, with findings to be established through future work.",
      agendaLink: "Read the research agenda ↗",
      methodEyebrow: "04 / HOW THE WORK IS BUILT",
      methodTitle: "Make the method inspectable.",
      methodIntro:
        "A useful research tool should expose its sources, its rules, and its failure cases.",
      methodLink: "Read the methods note ↗",
      traceTitle: "Traceable sources",
      traceDescription:
        "Keep originals, paragraph positions, bibliographic candidates, and review notes connected.",
      localTitle: "Local-first work",
      localDescription:
        "Process research files in the browser. Export backups; optional DOI requests require an explicit choice.",
      reproduceTitle: "Reproducible checks",
      reproduceDescription:
        "Publish readable methods, automated checks, and clearly labeled synthetic examples.",
      footerLine: "A workbench for careful legal research.",
      footerStatus: "Open code · Developing research agenda",
    },
    zh: {
      skip: "跳至研究工作区",
      navigation: "主导航",
      navTools: "研究工具",
      navExperiments: "互动实验室",
      experimentsEyebrow: "02 / 互动实验室",
      experimentsTitle: "从一点好奇，走向清楚的下一步。",
      experimentsIntro:
        "四个免费、本地使用的互动体验，探索 AI 协作、职业兴趣、治理取舍与工作选择。带着问题来，带着一张可分享的快照离开。",
      workstyleKind: "你与 AI 的协作方式",
      workstyleTitle: "AI 协作风格测试",
      workstyleDescription:
        "二十个原创情境、四条协作轴，探索你怎样提问、核验、迭代和设置边界。",
      careerKind: "值得进一步探索的兴趣",
      careerTitle: "职业兴趣罗盘",
      careerDescription:
        "通过原创活动描绘六类兴趣，找到值得调查的职业家族与本周可以尝试的小实验。",
      juryKind: "AI 决策，人类的选择",
      juryTitle: "AI 决策陪审团",
      juryDescription:
        "走进虚构的 AI 决策困境，选择应对方式，看看背后的理由、代价与治理优先级。",
      offerKind: "下一段旅程，你来选择",
      offerTitle: "Offer 选择实验室",
      offerDescription:
        "把收入、时间、成长、自主性和意义放在一起比较。亲手改变偏好，看清每项评分的贡献。",
      tryExperience: "开始体验 ↗",
      experimentsBoundary:
        "原创、可解释的探索体验，不作人格诊断、招聘预测或法律裁判；不调用模型，不上传答案。结果卡由使用者自愿分享。",
      navInterests: "研究兴趣",
      navMethod: "方法说明",
      heroEyebrow: "开放研究工作区 / 社会法 × 人工智能治理",
      heroLaw: "让法学论证有据可循。",
      heroAi: "让人工智能有责可问。",
      heroDescription:
        "关注算法管理中的劳动与社会保障问题，也关注大语言模型辅助研究的来源、方法与边界。把阅读、核验和研究记录连接起来，留下可以复核的过程。",
      openLibrary: "打开文献库",
      exploreTools: "浏览研究工具",
      workspaceStatus: "开放研究兴趣 · 实用研究工具 · 可复现的方法",
      workflowLabel: "围绕原始来源的研究工作流",
      figureHeading: "从原始来源开始",
      figureLibrary: "保留原件。",
      figureLibraryCaption: "文献库 / Literature Library",
      figureTrace: "定位原文段落",
      figureReview: "记录人工复核",
      figurePlan: "连接下一步研究",
      figureFootnote: "从阅读出发，形成可检查的研究记录。",
      toolsEyebrow: "01 / 研究的基本环节",
      toolsTitle: "小工具，连成研究工作流。",
      toolsIntro:
        "四个实用工作区，服务于法学研究中的阅读、核验、证据追踪与规划。",
      auditKind: "书目与人工复核",
      auditTitle: "引注核验",
      auditDescription:
        "检查参考文献字段与重复条目，可选择通过 Crossref 比较 DOI 元数据，并独立记录对原始来源的人工判断。",
      auditTag1: "本地检查",
      auditTag2: "自主选择 DOI 查询",
      atlasKind: "原文段落与证据",
      atlasTitle: "证据图谱",
      atlasDescription:
        "检索中文与英文段落，查看 BM25 分数的构成，保存原文快照并人工标注其与论断的关系。",
      atlasTag1: "来源快照",
      atlasTag2: "30 个查询的基准实验",
      roadmapKind: "研究问题与成果",
      roadmapTitle: "研究路线图",
      roadmapDescription:
        "把研究问题连接到阅读、实验、截止日期和具体成果。检查前置依赖，按照实际时间容量安排研究。",
      roadmapTag1: "导入阅读清单",
      roadmapTag2: "研究回顾",
      libraryKind: "阅读工作的起点",
      libraryFeatured: "从这里开始",
      libraryTitle: "文献库",
      libraryDescription:
        "将真实的 PDF、TXT、Markdown 原件与可编辑书目关联保存。按期刊、作者、年份、主题查阅材料，阅读原文并导出有来源定位的综述提纲。",
      libraryTag1: "保留论文原件",
      libraryTag2: "完整 ZIP 备份",
      libraryTag3: "综述提纲 → 阅读计划",
      openTool: "打开工具 ↗",
      openLibraryShort: "打开文献库 ↗",
      source: "源代码 ↗",
      suiteBoundary:
        "工具辅助组织和检查研究材料。来源权威、法律效力与论证支持程度，仍须通过阅读和人工判断确立。",
      interestsEyebrow: "03 / 有待推进的研究问题",
      interestsTitle: "在社会法与 AI 治理之间。",
      interestsIntro: "以开放的研究兴趣指引工具建设，逐步完善研究议程。",
      workersTitle: "劳动者与算法管理",
      workersDescription:
        "自动分配、监控与评价如何影响劳动者理解和质疑决定的能力？",
      workersTopics: "平台劳动 · 程序保障 · 证据",
      protectionTitle: "社会保障与服务可及性",
      protectionDescription:
        "如何评价 AI 参与福利服务时的无障碍程度、不均等负担与人工求助渠道？",
      protectionTopics: "社会保障 · 服务可及性 · 人工复核",
      accountabilityTitle: "大语言模型的可问责性",
      accountabilityDescription:
        "检验引文可靠性、检索失败和模型辅助法学研究的边界，需要哪些可复核证据？",
      accountabilityTopics: "来源追踪 · 评价 · 复现",
      agendaNote:
        "当前议程为草案，列示研究问题与拟议设计；研究结论须在后续工作中建立。",
      agendaLink: "阅读研究议程 ↗",
      methodEyebrow: "04 / 怎样开展工作",
      methodTitle: "让研究方法可以检查。",
      methodIntro: "实用的研究工具应当展示来源、规则与失败情形。",
      methodLink: "阅读方法说明 ↗",
      traceTitle: "来源可追踪",
      traceDescription:
        "保留原件、段落位置、书目候选字段与人工复核记录之间的联系。",
      localTitle: "本地优先",
      localDescription:
        "在浏览器中处理研究文件，定期导出备份；可选 DOI 查询须由使用者主动选择。",
      reproduceTitle: "检查可复现",
      reproduceDescription:
        "公开易于阅读的方法、自动化检查与明确标注性质的合成示例。",
      footerLine: "为审慎的法学研究搭建工作台。",
      footerStatus: "开放代码 · 持续完善研究议程",
    },
  };
  const toggle = document.getElementById("languageToggle");
  let language = "en";
  try {
    if (localStorage.getItem("law-ai-portfolio-language") === "zh")
      language = "zh";
  } catch (_) {
    /* Language switching works without storage. */
  }
  function render() {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = text[language][element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = text[language][element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute("aria-label", value);
    });
    toggle.textContent = language === "en" ? "中文" : "EN";
    toggle.setAttribute("aria-pressed", language === "zh" ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch to Chinese" : "切换至英文",
    );
    document.title =
      language === "en"
        ? "Law × AI · Open research workspace"
        : "Law × AI · 开放研究工作区";
  }
  toggle.addEventListener("click", () => {
    language = language === "en" ? "zh" : "en";
    try {
      localStorage.setItem("law-ai-portfolio-language", language);
    } catch (_) {
      /* Optional preference storage. */
    }
    render();
  });
  render();
})();
