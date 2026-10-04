# Methods and boundaries / 方法与边界

The four projects provide inspectable infrastructure for legal and AI research. Their current methods are deterministic. No project in this suite calls a language model to infer legal answers, scholarly findings, or missing bibliographic facts. “Law × AI” identifies the research questions and evaluation setting; the implementation remains explicit about what it actually does.

四个项目为法学与 AI 研究提供可以检查的基础工具，当前方法均为确定性方法。它们不调用语言模型推断法律答案、学术发现或缺失书目信息。“法学 × AI”体现研究问题与评价场景，项目说明以实际实现为准。

## Method map / 方法对应

| Project | Implemented method | Output and interpretation |
|---|---|---|
| [01-citation-audit](https://github.com/JosephSun1854/01-citation-audit) | Reference parsing and duplicate rules; optional DOI registration-metadata comparison / 书目解析与重复规则；可选 DOI 登记元数据比较 | Line-specific findings, metadata status, and a separate human review trail / 逐行问题、元数据状态与独立人工复核记录 |
| [02-evidence-atlas](https://github.com/JosephSun1854/02-evidence-atlas) | Paragraph BM25 and token-frequency retrieval using Chinese character/bigram and English word tokens / 中文单字、双字及英文词 token 的段落 BM25 与词频检索 | Ranked original passages, score contributions, and human-annotated claim–evidence snapshots / 排序原段、分数构成及人工标注的论断证据快照 |
| [03-research-roadmap](https://github.com/JosephSun1854/03-research-roadmap) | Dependency-aware allocation of estimated work against working days and daily capacity / 按依赖、研究日与每日容量分配预估工作 | A revisable schedule forecast, task artifacts, experiment records, and reflections / 可调整的进度预测、任务成果、实验记录与回顾 |
| [04-literature-library](https://github.com/JosephSun1854/04-literature-library) | Local original-file storage, PDF text/metadata slicing, bibliographic import, field filters, and structured exports / 本地原件保存、PDF 文本与元数据切分、书目导入、字段筛选及结构化导出 | Original bytes linked to editable records, candidate metadata, classified files, review outlines, and reading lists / 原件与可编辑记录关联、候选元数据、归类文件、综述提纲及阅读清单 |

## 01 · Bibliography and review / 书目与复核

Citation Audit extracts candidate DOI, title, year, author, and source-link fields and marks repeated references. A local parser cannot establish that the referenced work exists. The user may correct candidate fields and separately record an evidence location and source-review judgment.

引注核验提取 DOI、题名、年份、作者与来源链接的候选字段，并检查重复引用。本地解析不能证明来源存在。使用者可以更正候选字段，另行记录证据位置和对原始来源的判断。

Crossref lookup is optional and must be enabled for the session. A request sends a DOI identifier to `api.crossref.org`, not the full reference, paper, or review note; ordinary connection information is still visible to the service. Registered metadata can agree, possibly disagree, remain unknown, or fail to load. Agreement establishes a metadata comparison result; evaluating a cited proposition and legal applicability requires source reading. A missing Crossref record does not establish nonexistence.

Crossref 查询为可选功能，须在本次会话主动启用。请求向 `api.crossref.org` 发送 DOI 标识，不发送完整引文、论文或复核笔记；服务仍可见普通连接信息。登记元数据可能一致、可能不一致、未知或查询失败。一致只表示元数据比较结果；引文论断与法律适用须通过阅读来源评价。Crossref 缺少记录不能证明来源不存在。

[Project method details / 项目方法细节](https://github.com/JosephSun1854/01-citation-audit/blob/main/docs/methods.md)

## 02 · Paragraph retrieval and snapshots / 段落检索与快照

Evidence Atlas splits text on blank lines. Chinese tokens consist of characters and overlapping adjacent pairs; English tokens are normalized words. BM25 uses term frequency, paragraph document frequency, and length normalization with `k₁ = 1.2` and `b = 0.75`. The comparison baseline sums matched token frequencies. Per-term contributions expose why a result scored as it did.

证据图谱按空行分段。中文 token 为单字和相邻双字，英文为规范化的词 token。BM25 使用词频、包含词语的段落数与段长归一化，取 `k₁ = 1.2`、`b = 0.75`；比较基线对命中词频求和。逐词贡献展示分数产生的依据。

Saved evidence retains an exact paragraph, its position, title, URL, origin label, and a source-version fingerprint. Source edits or removals preserve historical quotes and display a changed/removed status. The non-cryptographic fingerprint detects routine changes; it does not authenticate externally imported evidence. A researcher assigns support, opposition, context, or needs-review labels. A retrieval score measures lexical relevance, without establishing that a source proves a claim.

保存证据时保留完整原段、位置、标题、链接、来源类型与版本指纹。来源编辑或移除后，历史摘录继续保留并显示变化或删除状态。非密码学指纹用于提示普通变化，不能认证外部导入证据的真实性。支持、反对、背景或待复核由研究者标注；检索分数只衡量词语相关性，不能证明来源支持论断。

The reproducible benchmark contains 12 bilingual synthetic documents, 36 paragraphs, and 30 fixed queries, including 6 paraphrase challenges. Recall@5 and MRR compare the two ranking methods against manually fixed paragraph labels. These observations concern that fixture; the vocabulary-aligned cases are basic checks, and the challenge cases expose lexical limitations. No claim of real-corpus performance, semantic understanding, or legal reliability follows from the figures.

可复现基准包含 12 份中英合成文档、36 段和 30 个固定查询，其中 6 个为改写挑战。Recall@5 和 MRR 按预先指定的段落标签比较排序方法，结果仅适用于该固定样本。词汇对齐案例用于基本检验，挑战案例用于暴露词语方法的局限；不能据此主张真实语料效果、语义理解或法律可靠性。

[Method / 方法](https://github.com/JosephSun1854/02-evidence-atlas/blob/main/docs/method.md) · [Measured benchmark / 实测基准](https://github.com/JosephSun1854/02-evidence-atlas/blob/main/docs/benchmark.md)

## 03 · Research planning / 研究规划

Research Roadmap connects questions to tasks, dependencies, dates, estimates, actual work, and artifact links. A deterministic scheduling heuristic allocates unfinished work to working days within stated capacity. Its forecast depends on the estimates and settings entered by the user; interruptions, changing scope, and research quality require human review.

研究路线图将问题连接到任务、依赖、日期、预估、实际工作与成果链接。确定性排程规则按指定容量将未完成工作分配到研究日。预测依赖使用者输入的预估和设置；中断、范围变化及研究质量仍由人判断。

Experiment fields record the researcher's method/model, dataset version, baseline, metrics, observations, and artifacts. The tool does not run those experiments. A metadata reading list from the Library creates reading tasks and retains source fields; it does not transfer a paper's original bytes into the planner.

实验字段记录研究者的方法或模型、数据版本、基线、指标、观察与成果，工具本身不运行这些实验。文献库导出的元数据阅读清单可生成阅读任务并保留来源字段，不向规划器传输论文原件。

[Project method details / 项目方法细节](https://github.com/JosephSun1854/03-research-roadmap/blob/main/docs/methods.md)

## 04 · Original files and bibliographic slicing / 原件与书目切分

Literature Library stores original PDF/TXT/Markdown bytes with editable bibliographic records in IndexedDB. Locally bundled PDF.js reads PDF text layers and embedded metadata. Candidate title, abstract, keywords, and DOI remain subject to source verification. BibTeX/RIS imports create metadata records; a record without an attached original stays visibly metadata-only.

文献库在 IndexedDB 中关联保存 PDF/TXT/Markdown 原件字节与可编辑书目。本地 PDF.js 读取 PDF 文本层和嵌入元数据；提取的题名、摘要、关键词与 DOI 均为待核验候选。BibTeX/RIS 导入创建书目记录；未附原件的记录明确显示为仅含元数据。

PDF extraction indexes the first 12 pages for candidate metadata and search, with later unindexed pages disclosed. The complete file is retained, and the reader can display all pages. Scanned PDFs are not OCRed. A user confirmation records that the fields were checked; it does not certify the paper or its arguments. SHA-256 identifies byte-identical files, without detecting equivalent intellectual content or establishing authenticity.

PDF 提取对前 12 页建立候选元数据与检索索引，并提示后续页面未索引；完整文件保留，阅读器可显示所有页面。扫描 PDF 不进行 OCR。使用者确认表示已核对字段，不能认证论文或论证。SHA-256 用于识别字节完全相同的文件，不能发现思想内容相近的作品或证明真实性。

Filters and grouping organize journal, author, year, keyword, and theme fields. The review export produces a working outline with recorded abstracts, notes, and comparison questions. It does not generate research findings or doctrinal conclusions. A complete ZIP backup includes metadata, extracted text, and attached originals; a metadata export contains no original bytes. Full restores validate files and hashes before writing the prepared collection.

筛选和分组组织期刊、作者、年份、关键词与主题字段。综述导出基于已记录的摘要、笔记和比较问题形成工作提纲，不生成研究发现或规范结论。完整 ZIP 备份包含元数据、提取文本和已附原件；单独元数据导出不含原件字节。完整恢复在写入前校验文件与散列。

[Library details and limits / 文献库细节与边界](https://github.com/JosephSun1854/04-literature-library#methods)

## Data and reproducibility / 数据与复现

Research content is processed in the browser. Citation Audit, Evidence Atlas, and Research Roadmap use local browser storage; Literature Library uses IndexedDB for records and original files. Browser storage is not a backup and may be cleared, denied, or evicted. Export the appropriate full backup before changing devices or clearing site data. Opening a source or artifact link visits that external site normally. GitHub Pages receives ordinary requests for the application files.

研究内容在浏览器中处理。引注核验、证据图谱与研究路线图使用本地浏览器存储，文献库使用 IndexedDB 保存记录与原件。浏览器存储可能被清理、拒绝或驱逐，不能替代备份；换设备或清理网站数据前应导出相应完整备份。打开来源或成果链接会正常访问外部网站，GitHub Pages 会收到应用文件的普通请求。

Project repositories include source-level automated checks, documented methods, and labeled sample data. Test results should be read together with their coverage and corpus. The current artifacts establish runnable tools and reproducible demonstrations; a future real-corpus evaluation or LLM study requires its own protocol, provenance, and report.

各仓库提供源码检查、方法说明与标明性质的样本数据。测试结果应结合覆盖范围和语料阅读。当前成果是可运行工具与可复现演示；未来真实语料评价或大模型研究须另行提供方案、来源和报告。

[Research agenda / 研究议程](research-agenda.md) · [Research workspace / 研究工作区](https://josephsun1854.github.io/JosephSun1854/)
