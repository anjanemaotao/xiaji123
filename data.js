var siteData = {
    "version": "2.3.9",
    "categories": [
        {
            "title": "百虾争鸣",
            "links": [
                {"name": "OpenClaw 官网", "url": "https://openclaw.ai/", "description": "开源、本地优先的自主 AI 助手，运行在你的电脑或服务器上"},
                {"name": "官方GitHub", "url": "https://github.com/openclaw/openclaw", "description": "收集了OpenClaw的源代码，方便用户查阅、参考"},
                {"name": "Kimi Claw", "url": "https://www.kimi.com/bot", "description": "（云端）集成全球爆火的开源智能体框架OpenClaw"},
                {"name": "MaxClaw", "url": "https://agent.minimaxi.com/max-claw", "description": "（云端）10 秒内完成OpenClaw云端部署，无需配置服务器，零维护负担"},
                {"name": "飞书OpenClaw", "url": "https://openclaw.feishu.cn/home", "description": "（云端）提供原版 OpenClaw 完整能力，独特个性、长期记忆，内置飞书官方插件"},
                {"name": "ArkClaw", "url": "https://www.volcengine.com/experience/ark?mode=claw", "description": "（云端）提供模型训练、推理、评测、精调等全方位功能与服务"},
                {"name": "扣子Coze", "url": "https://code.coze.cn/home", "description": "（云端）字节旗下AI Agent开发平台，让每个人都能轻松创建自己的AI机器人"},
                {"name": "DuClaw", "url": "https://cloud.baidu.com/product/duclaw.html", "description": "（云端）通过免除镜像选择、服务器部署及API Key配置等繁琐环节，实现AI智能体的即开即用"},
                {"name": "Xiaomi MiMo Claw", "url": "https://aistudio.xiaomimimo.com/", "description": "（云端）依托小米最新大模型打造，实现一键部署OpenClaw智能体"},
                {"name": "StepClaw", "url": "https://www.stepfun.com/openclaw", "description": "（云端）阶跃星辰推出基于OpenClaw打造的云端AI助手"},
                {"name": "AstronClaw", "url": "https://agent.xfyun.cn/astron-claw", "description": "（云端）科大讯飞推出的云端部署OpenClaw，支持一键部署、全天候在线运行"},
                {"name": "Happycapy", "url": "https://happycapy.ai/", "description": "（云端）一台面向所有人设计的云端 Agent 原生计算机"},
                {"name": "Qclaw", "url": "https://claw.guanjia.qq.com/", "description": "（本地）支持微信直联，扫码绑定后，能随时随地通过微信发指令，远程操控电脑完成任务"},
                {"name": "DuMate", "url": "https://cloud.baidu.com/product/dumate.html", "description": "（本地）百度推出的桌面级AI智能体，定位为办公搭子"},
                {"name": "LobsterAI 有道龙虾", "url": "https://lobsterai.youdao.com/", "description": "（本地）7x24小时帮你干活的全场景个人助理 Agent，能够主动执行任务、管理流程、跨平台协作"},
                {"name": "WorkBuddy", "url": "https://www.codebuddy.cn/work/", "description": "（本地）AI 原生的桌面智能体工作台，一句指令即可完成数据处理、内容创作与深度分析"},
                {"name": "AutoClaw", "url": "https://autoglm.zhipuai.cn/autoclaw/", "description": "（本地）提供飞书集成、模型热插拔、50+技能与AutoGLM浏览器自动化能力"},
                {"name": "悟空", "url": "https://www.dingtalk.com/wukong", "description": "（本地）阿里巴巴发布的全球首个企业级AI原生工作平台"},
                {"name": "360安全龙虾", "url": "https://claw.360.cn/", "description": "（本地）国内首个以安全模式为核心设计的OpenClaw智能体产品"},
                {"name": "QoderWork", "url": "https://qoder.com/qoderwork", "description": "（本地）用户只需通过简单的自然语言对话，就能完成文件整理、数据处理、文档生成等任务"},
                {"name": "阶跃桌面伙伴", "url": "https://www.stepfun.com/download", "description": "（本地）始终在场，会主动做事的桌面 Agent，支持多任务并行处理"},
                {"name": "JVS Claw", "url": "https://jvs.wuying.aliyun.com/", "description": "阿里云推出的多 Agent 智能体协作平台，提供免部署免配置的极简体验"},
                {"name": "EasyClaw", "url": "https://easyclaw.com/zh-cn/", "description": "（本地）一键部署OpenClaw网关、可视化技能配置、多平台聊天应用集成"},
                {"name": "CoPaw", "url": "https://copaw.agentscope.io/", "description": "（本地）阿里云推出的协同个人智能体工作台"},
                {"name": "nexu", "url": "https://github.com/nexu-io/nexu", "description": "可一键安装的 OpenClaw 开源桌面客户端，支持所有主流聊天软件接入"},
                {"name": "Manus", "url": "https://manus.im/", "description": "具备从任务规划到执行的全流程自动化能力，可独立完成报告撰写、数据分析、跨平台操作等"},
                {"name": "牛马 AI", "url": "https://niuma.limyai.com/", "description": "本地免费版的Manus/Genspark，可处理从文档分析、数据整理到复杂工作流自动化的一系列任务"},
                {"name": "MuleRun", "url": "https://mulerun.com/", "description": "全球首个自进化个人AI - MuleRun（骡子快跑）"},
                {"name": "LobeHub", "url": "https://lobehub.com/zh", "description": "一个以 AI Agent（智能体）为核心的开源大模型协作平台"},
                {"name": "Tabbit 浏览器", "url": "https://tabbitbrowser.com/", "description": "（本地）一键引用网页、截图、收藏、文件进行对话，Agent 自动执行重复任务"},
                {"name": "Linkfox Claw", "url": "https://agent.linkfox.com/claw", "description": "LinkFox.Agent帮你一键部署OpenClaw，自由对话，智能随行"},
                {"name": "PoorClaw穷虾", "url": "https://www.poorclaw.com/", "description": "不花一分钱，直接使用 OpenClaw 的全部 AI 能力，无隐藏费用"},
                {"name": "HiClaw", "url": "https://higress.ai/hiclaw", "description": "OpenClaw的团队协作升级版，创新性引入Manager Agent架构"},
                {"name": "KiloClaw", "url": "https://kilo.ai/kiloclaw", "description": "KiloClaw定位为面向开发者和团队的托管版OpenClaw服务"},
                {"name": "NemoClaw", "url": "https://www.nvidia.com/en-us/ai/nemoclaw/", "description": "英伟达推出的一个面向企业的开源AI智能体平台"},
                {"name": "Loomy", "url": "https://loomy.xunfei.cn/", "description": "科大讯飞推出的桌面级 AI 个人助理，基于 AstronClaw 打造"},
                {"name": "Hermes Agent", "url": "https://hermes-agent.nousresearch.com/", "description": "开源自主Al代理，拥有内置的自我学习循环"},
                {"name": "铠盒智能", "url": "https://www.nizwo.com/", "description": "AI智能体计算机，预装OpenClaw，7x24小时稳定运行"}
            ]
        },
        {
            "title": "云端大虾",
            "links": [
                {"name": "阿里云", "url": "https://www.aliyun.com/benefit/scene/moltbot", "description": "快速上手三步轻松构建 AI 助理低至 9.9 元起"},
                {"name": "腾讯云", "url": "https://cloud.tencent.com/act/pro/openclaw", "description": "轻量应用服务器让OpenClaw一直在线，稳定输出，也更安全"},
                {"name": "火山引擎", "url": "https://www.volcengine.com/activity/clawdbot", "description": "分钟级部署，拥有您的私人AI管家"},
                {"name": "百度智能云", "url": "https://cloud.baidu.com/product/BCC/moltbot.html", "description": "从快速开通到日常指令管理，为您提供极简的自动化体验"},
                {"name": "华为云", "url": "https://activity.huaweicloud.com/openclaw.html", "description": "基于华为云Flexus云服务器L实例来搭建OpenClaw"},
                {"name": "京东云", "url": "https://www.jdcloud.com/cn/pages/openclaw", "description": "来京东云部署OpenClaw即送美味小龙虾"},
                {"name": "国家超算互联网", "url": "https://www.scnet.cn/ui/chatbot/openclaw", "description": "虾友福利 限时2周！免费领1000万Tokens"},
                {"name": "天翼云", "url": "https://www.ctyun.cn/act/OpenClaw", "description": "依托天翼云息壤智算平台，独立隔离运行环境"}
            ]
        },
        {
            "title": "教程合集",
            "links": [
                {"name": "官方文档", "url": "https://docs.openclaw.ai/zh-CN", "description": "适用于任何操作系统的 AI 智能体 Gateway 网关"},
                {"name": "OpenClaw 橙皮书", "url": "https://my.feishu.cn/wiki/H27Iw9ussiaYbokymhncExtjnAh", "description": "覆盖了从认识OpenClaw到真正把它用起来的所有关键信息"},
                {"name": "万象 AI 实验室", "url": "https://yunyinghui.feishu.cn/wiki/Ru7PwG82qiDGo1kGMFZcxqpGnnf", "description": "OpenClaw知识手册，从入门到精通"},
                {"name": "WaytoAGI 之路", "url": "https://waytoagi.feishu.cn/wiki/CCR4wl3upi6dF9kVE5YcAcGcnlU", "description": "详解OpenClaw，是最大最全面的 AI 知识库"},
                {"name": "非凡产研", "url": "https://uniquecapital.feishu.cn/wiki/Nwwiwh6PNiesZqkWNw7cWegjn2c", "description": "整理了OpenClaw核心概念、适用场景、快速预览"},
                {"name": "OpenClaw 中文学习手册", "url": "https://my.feishu.cn/wiki/NzvOwzHdKiwSe2kPLx0cs1jlncg", "description": "全面的 OpenClaw 中文教程网站"},
                {"name": "OpenClaw 从入门到精通", "url": "https://my.feishu.cn/docx/P6zsdsgYco6i4XxLeIccvlpvnQe", "description": "持续更新的OpenClaw知识库文档"},
                {"name": "Hello Claw 教程", "url": "https://datawhalechina.github.io/hello-claw/cn/adopt/intro/", "description": "Datawhale 开源教程，从零领养到构建 AI 助手"},
                {"name": "Awesome 教程", "url": "https://awesome.tryopenclaw.asia/", "description": "从零开始玩转 OpenClaw，最全面的中文教程"},
                {"name": "飞书官方修炼指南", "url": "https://larkcommunity.feishu.cn/wiki/GGJPwJ2IfiTynVk2Vy4cZbRvn2f", "description": "简单易懂的OpenClaw云端部署教程"},
                {"name": "麻小玩虾指南", "url": "https://t0woxppdywz.feishu.cn/wiki/Oxf0wcTECie8KkkwkIlc6psanNe", "description": "从零开始的 OpenClaw 使用指南"},
                {"name": "中文用例大全", "url": "https://github.com/AlexAnys/awesome-openclaw-usecases-zh", "description": "一份面向中文用户的 OpenClaw 真实使用案例合集"}
            ]
        },
        {
            "title": "常用AI",
            "links": [
                {"name": "千问", "url": "https://www.qianwen.com/", "description": "阿里云推出的一个超大规模的语言模型"},
                {"name": "豆包", "url": "https://www.doubao.com/", "description": "抖音旗下AI工具，你的智能助手"},
                {"name": "Kimi", "url": "https://www.kimi.com/", "description": "会推理解析，能深度思考的AI助手"},
                {"name": "腾讯元宝", "url": "https://yuanbao.tencent.com/", "description": "腾讯推出的免费AI智能助手"},
                {"name": "DeepSeek", "url": "https://chat.deepseek.com/", "description": "幻方量化旗下深度求索推出的开源大模型和聊天助手"},
                {"name": "ChatGPT", "url": "https://chat.openai.com/", "description": "地表最强AI聊天机器人"},
                {"name": "Gemini", "url": "https://gemini.google.com/", "description": "Google推出的AI聊天对话机器人"},
                {"name": "Grok", "url": "https://grok.com/", "description": "马斯克旗下xAI推出的人工智能助手"},
                {"name": "即梦AI", "url": "https://jimeng.jianying.com/ai-tool/home", "description": "Seedance 2.0 字节最新的视频生成模型"}
            ]
        },
        {
            "title": "Coding Plan",
            "links": [
                {"name": "Kimi", "url": "https://www.kimi.com/code", "description": "Kimi 会员计划中面向代码开发的权益"},
                {"name": "MiniMax Token Plan", "url": "https://platform.minimaxi.com/subscribe/token-plan", "description": "MiniMax 最强编程与智能体模型"},
                {"name": "智谱 Coding Plan", "url": "https://bigmodel.cn/glm-coding", "description": "目前支持 GLM-5、GLM-4.7 和 GLM-4.6"},
                {"name": "腾讯云 Coding Plan", "url": "https://cloud.tencent.com/act/pro/codingplan", "description": "集合多个最新模型，适配多种主流 AI 编程工具"},
                {"name": "阿里云Coding Plan", "url": "https://www.aliyun.com/benefit/scene/codingplan", "description": "面向高频AI编程场景的订阅服务"},
                {"name": "火山引擎Coding Plan", "url": "https://www.volcengine.com/activity/codingplan", "description": "新用户专属优惠限量秒杀中，首月低至8.9元"},
                {"name": "百度千帆Coding Plan", "url": "https://cloud.baidu.com/product/codingplan.html", "description": "百度千帆推出AI编码专属订阅套餐"},
                {"name": "Step Plan", "url": "https://platform.stepfun.com/step-plan", "description": "阶跃星辰的 Coding Plan"},
                {"name": "腾讯云 Token Plan", "url": "https://cloud.tencent.com/act/pro/tokenplan", "description": "面向龙虾和 AI 编码场景设计"},
                {"name": "Xiaomi MiMo", "url": "https://platform.xiaomimimo.com/#/token-plan", "description": "一次购买，畅用 MiMo-V2-Pro/Omni 两款全新顶级旗舰模型"}
            ]
        },
        {
            "title": "Maas平台",
            "links": [
                {"name": "阿里云", "url": "https://bailian.console.aliyun.com/", "description": "专为企业打造的大模型服务与应用开发平台"},
                {"name": "火山方舟", "url": "https://www.volcengine.com/product/ark", "description": "火山方舟提供模型训练、推理、评测、精调等全方位功能与服务"},
                {"name": "百度千帆", "url": "https://cloud.baidu.com/product-s/qianfan_home", "description": "以Agent为核心的一站式企业级大模型服务平台"},
                {"name": "硅基流动", "url": "https://www.siliconflow.cn/", "description": "国内领先的模型聚合平台，提供 200+ 开源和商用模型的统一 API 接口"},
                {"name": "七牛云", "url": "https://www.qiniu.com/ai/agent", "description": "提供多个顶级闭源和开源大模型"},
                {"name": "讯飞星火", "url": "https://xinghuo.xfyun.cn/maas-home", "description": "一站式大模型精调定制及服务平台"},
                {"name": "OpenRouter", "url": "https://openrouter.ai/", "description": "AI模型聚合平台，提供统一的API接口"},
                {"name": "ZenMux", "url": "https://zenmux.ai/invite/9ENK8S", "description": "全球首个支持保险赔付机制的企业级大模型聚合平台"},
                {"name": "Model123", "url": "https://www.model123.ai/", "description": "专业的企业级 AI编程服务平台"},
                {"name": "华为云", "url": "https://www.huaweicloud.com/ai/token-service.html", "description": "华为云MaaS平台覆盖大模型全生命周期管理"},
                {"name": "快手万擎", "url": "https://www.streamlake.com/product/wanqing", "description": "企业级大模型服务与开发平台"},
                {"name": "蓝耘元生代", "url": "https://www.lanyun.net/", "description": "MaaS平台，DeepSeek-v3.2模型吞吐性能登顶AI Ping榜首"},
                {"name": "魔搭社区", "url": "https://modelscope.cn/", "description": "阿里云旗下，国内最大AI模型开源社区，提供3000+预训练模型"},
                {"name": "腾讯云TI平台", "url": "https://cloud.tencent.com/product/ti", "description": "腾讯云大模型精选商店，覆盖模型训练、推理及工具链支持"},
                {"name": "元景大模型MaaS平台", "url": "https://www.chinaunicom.com/", "description": "中国联通出品，面向工业领域的模型即服务平台"}
            ]
        },
        {
            "title": "API聚合平台",
            "links": [
                {"name": "PoloAPI", "url": "https://poloapi.com/", "description": "企业级AI API网关，自建边缘加速层，首字响应快120ms"},
                {"name": "weelinking", "url": "https://weelinking.com/", "description": "企业级AI中台，支持300+主流大模型，99.99%可用性"},
                {"name": "n1n.ai", "url": "https://n1n.ai/", "description": "1元=1美元汇率，比市场价节省85%成本，支持人民币直付"},
                {"name": "147API", "url": "https://147ai.com/", "description": "企业级MaaS平台，全球专线网络，支持对公转账"},
                {"name": "Azure OpenAI", "url": "https://azure.microsoft.com/openai", "description": "微软官方企业级AI服务，最高级别数据隐私合规"},
                {"name": "星链4SAPI", "url": "https://www.4sapi.com/", "description": "企业级API网关，99.99%可用性，全球边缘加速"}
            ]
        },
        {
            "title": "Agent开发平台",
            "links": [
                {"name": "LangChain", "url": "https://www.langchain.com/", "description": "智能体框架早期布道者，链式架构设计"},
                {"name": "LangGraph", "url": "https://langchain-ai.github.io/langgraph/", "description": "LangChain生态，专注构建可控、状态化AI Agents"},
                {"name": "CrewAI", "url": "https://www.crewai.com/", "description": "角色化协作框架，让Agent像人类团队一样分工干活"},
                {"name": "AutoGen", "url": "https://microsoft.github.io/autogen/", "description": "微软开源多Agent通信框架，对话驱动协作"},
                {"name": "Dify", "url": "https://dify.ai/", "description": "开源智能体平台，拖拽式界面+内置RAG策略"},
                {"name": "Kimi Agent Builder", "url": "https://www.kimi.com/agent", "description": "百万字长文本处理标杆，精准解析专业文档"},
                {"name": "通义千问Agent Studio", "url": "https://tongyi.aliyun.com/agent", "description": "阿里云生态深度绑定，内置钉钉、OSS等原生工具"},
                {"name": "腾讯混元Agent平台", "url": "https://cloud.tencent.com/product/hunyuan-agent", "description": "微信/企业微信生态原生适配，多模态交互"},
                {"name": "MiniMax Agent Builder", "url": "https://www.minimaxi.com/agent", "description": "多模态情感计算核心优势，虚拟主播首选"},
                {"name": "智谱清言Agent Studio", "url": "https://agent.bigmodel.cn/", "description": "科研与工程领域利器，支持代码生成、论文解读"},
                {"name": "实在Agent", "url": "https://www.ishiji.com/", "description": "RPA+大模型融合的第三代数字员工"},
                {"name": "LangFlow", "url": "https://langflow.org/", "description": "开源界顶流工具，节点连线式工作流编排"},
                {"name": "飞书Agent Builder", "url": "https://www.feishu.cn/product/agent", "description": "飞书办公生态深度融合，会议纪要、报销审核等"},
                {"name": "豆包Agent Studio", "url": "https://www.doubao.com/agent", "description": "抖音集团旗下，短视频脚本生成、直播话术优化"},
                {"name": "JeecgBoot", "url": "https://www.jeecg.com/", "description": "新一代AI低代码平台，支持多模型接入"},
                {"name": "华为Agent Arts", "url": "https://www.huawei.com/", "description": "华为企业级智能体开发平台，4月30日公测"},
                {"name": "BetterYeah AI", "url": "https://www.betteryeah.com/", "description": "企业级AI智能体开发平台，独创NeuroFlow框架"},
                {"name": "京东云JoyAgent", "url": "https://www.jdcloud.com/", "description": "开源企业级智能体，GAIA准确率超77%"},
                {"name": "瓴羊Quick Service", "url": "https://www.lydaas.com/quickservice", "description": "阿里云旗下智能客服Agent，全流程智能服务"},
                {"name": "瓴羊Agent One", "url": "https://www.lydaas.com/agentone", "description": "阿里云旗下决策执行Agent，打通数据与业务"},
                {"name": "蚂蚁数科 Agentar", "url": "https://antdigital.com/products/Agentar", "description": "全栈式智能体开发平台，信通院可信AI评估5级评级"}
            ]
        },
        {
            "title": "Agent沙箱",
            "links": [
                {"name": "E2B", "url": "https://e2b.dev/", "description": "专注于代码执行与云端开发环境，适合构建编码助手"},
                {"name": "Modal Sandboxes", "url": "https://modal.com/", "description": "按需启动的隔离环境，支持快速迭代与部署"},
                {"name": "Browserbase", "url": "https://www.browserbase.com/", "description": "专业的浏览器自动化平台，支持大规模并发"},
                {"name": "Steel", "url": "https://steel.dev/", "description": "抗指纹识别的浏览器环境，增强隐蔽性"},
                {"name": "阿里云 AgentBay", "url": "https://help.aliyun.com/document_detail/2878644.html", "description": "无影AgentBay，提供浏览器、代码空间、云电脑、移动端四大核心环境"},
                {"name": "Hyperbrowser", "url": "https://hyperbrowser.ai/", "description": "高性能浏览器环境，优化渲染与交互速度"},
                {"name": "Daytona", "url": "https://www.daytona.io/", "description": "安全弹性基础设施，运行AI生成代码，支持Computer Use"}
            ]
        },
        {
            "title": "AI编程工具",
            "links": [
                {"name": "Claude Code", "url": "https://claude.ai/code", "description": "Anthropic终端原生Agent，深度推理能力"},
                {"name": "Cursor", "url": "https://cursor.com/", "description": "AI原生IDE，流畅编辑体验、并行Agent"},
                {"name": "GitHub Copilot", "url": "https://github.com/features/copilot", "description": "1500万开发者基数、企业合规"},
                {"name": "Codex CLI", "url": "https://github.com/openai/codex", "description": "OpenAI终端Agent，ChatGPT生态"},
                {"name": "Gemini CLI", "url": "https://github.com/google/gemini-cli", "description": "Google终端Agent，免费、与Google服务集成"},
                {"name": "Trae", "url": "https://www.trae.com.cn/", "description": "字节跳动推出的AI原生IDE，支持SOLO模式全流程自动化"},
                {"name": "Qoder", "url": "https://qoder.com/", "description": "阿里推出的AI编程编辑器，支持智能体协同编程"},
                {"name": "CodeBuddy", "url": "https://copilot.tencent.com/", "description": "腾讯云代码助手，基于混元+DeepSeek双轮模型"},
                {"name": "文心快码", "url": "https://comate.baidu.com/", "description": "百度推出的智能代码助手，基于文心大模型"},
                {"name": "通义灵码", "url": "https://lingma.aliyun.com/", "description": "阿里云推出的智能编码助手，国内开发者首选"},
                {"name": "代码小浣熊", "url": "https://code.sensetime.com/", "description": "商汤科技推出的AI编程助手"},
                {"name": "豆包MarsCode", "url": "https://www.marscode.cn/", "description": "字节跳动推出的AI驱动一站式开发平台，国内免费"},
                {"name": "Kimi Code", "url": "https://kimi.moonshot.cn/code", "description": "月之暗面推出的编程工具，擅长代码与Agentic任务"},
                {"name": "Windsurf", "url": "https://codeium.com/windsurf", "description": "Codeium推出的AI原生IDE，流畅编辑体验"},
                {"name": "Codeium", "url": "https://codeium.com/", "description": "现代编码超级工具，免费AI代码补全"},
                {"name": "Google AI Studio", "url": "https://aistudio.google.com/", "description": "Google推出的AI开发平台，快速构建Gemini应用"},
                {"name": "Cline", "url": "https://cline.bot/", "description": "开源AI编程助手，VS Code插件"},
                {"name": "CodeGeeX", "url": "https://codegeex.cn/", "description": "清华+智谱联合打造的多语言代码生成模型"},
                {"name": "JoyCode", "url": "https://joycode.jd.com/", "description": "京东云推出的智能编程助手"},
                {"name": "Amazon Q Developer", "url": "https://aws.amazon.com/q/developer/", "description": "亚马逊推出的AI编程助手，最强代码接受率"},
                {"name": "Continue", "url": "https://continue.dev/", "description": "开源AI代码助手，支持自定义模型"},
                {"name": "Zed AI", "url": "https://zed.dev/", "description": "Rust编写的高性能编辑器，原生集成Claude"},
                {"name": "Aider", "url": "https://aider.chat/", "description": "终端AI编程助手，开源免费"},
                {"name": "v0", "url": "https://v0.dev/", "description": "Vercel推出的AI代码生成器，快速构建UI"},
                {"name": "TabNine", "url": "https://www.tabnine.com/", "description": "AI代码补全工具，支持80+编程语言，主打隐私保护"},
                {"name": "Supermaven", "url": "https://supermaven.com/", "description": "100万Token上下文窗口，响应延迟20ms级，极速代码补全"},
                {"name": "Kiro", "url": "https://kiro.dev/", "description": "规格驱动开发，企业级AI IDE，从原型到生产的全流程自动化"},
                {"name": "Tabby", "url": "https://github.com/TabbyML/tabby", "description": "（开源）完全本地运行的AI代码助手，隐私保护极佳"}
            ]
        },
        {
            "title": "AI创作画布",
            "links": [
                {"name": "Liblib", "url": "https://liblib.tv/", "description": "AI图像创作平台，丰富的模型资源"},
                {"name": "Oii", "url": "https://oiioii.ai/", "description": "AI创意画布，一站式AI创作工具"},
                {"name": "即梦", "url": "https://jimeng.jianying.com/ai-tool/assets-canvas", "description": "字节跳动推出的AI创作画布"},
                {"name": "星流", "url": "https://www.xingliu.art/", "description": "AI艺术创作平台"}
            ]
        },
        {
            "title": "语音大模型",
            "links": [
                {"name": "VoxCPM2", "url": "https://voxcpm.modelbest.cn/", "description": "（开源）面壁智能开源，2B参数，支持30国语种+9大方言"},
                {"name": "Qwen3-TTS", "url": "https://tongyi.aliyun.com/", "description": "（开源）阿里开源，3秒克隆，97ms延迟"},
                {"name": "CosyVoice3", "url": "https://github.com/FunAudioLLM/CosyVoice", "description": "（开源）阿里FunAudioLLM开源，中文优化"},
                {"name": "GPT-SoVITS", "url": "https://github.com/RVC-Boss/GPT-SoVITS", "description": "（开源）社区开源，高保真音色克隆"},
                {"name": "Fish Speech", "url": "https://fish.audio/", "description": "（开源）阶跃星辰开源，多语言支持"},
                {"name": "ElevenLabs", "url": "https://elevenlabs.io/", "description": "全球语音自然度标杆"},
                {"name": "Voxtral", "url": "https://mistral.ai/", "description": "（开源）Mistral开源，3秒克隆"},
                {"name": "IndexTTS-2", "url": "https://github.com/index-tts/indextts", "description": "（开源）零样本克隆，情绪控制"},
                {"name": "Spark-TTS", "url": "https://github.com/SparkAudio/Spark-TTS", "description": "（开源）腾讯开源，基于Qwen"},
                {"name": "MiniMax 语音", "url": "https://www.minimaxi.com/audio", "description": "支持语音合成、音色设计、声音克隆、人声提取"},
                {"name": "OpenVoice", "url": "https://research.myshell.ai/open-voice", "description": "（开源）MyShell开源，MIT协议"},
                {"name": "Whisper", "url": "https://github.com/openai/whisper", "description": "（开源）OpenAI开源，99种语言"},
                {"name": "GLM-ASR-Nano", "url": "https://www.bigmodel.cn/", "description": "（开源）智谱开源，支持中国方言"},
                {"name": "Qwen3-ASR", "url": "https://tongyi.aliyun.com/", "description": "（开源）阿里开源，多语言识别"},
                {"name": "FunASR", "url": "https://github.com/modelscope/FunASR", "description": "（开源）阿里达摩院开源，工业级ASR"},
                {"name": "Qwen-Omni", "url": "https://tongyi.aliyun.com/", "description": "（开源）阿里开源，语音对话模型"},
                {"name": "GLM-4.1V-Thinking-Flash", "url": "https://www.bigmodel.cn/", "description": "（开源）智谱免费，语音+视觉多模态"},
                {"name": "SkyReels-V3", "url": "https://skyreels.ai/", "description": "昆仑万维，视频+语音生成"},
                {"name": "PaddleSpeech", "url": "https://github.com/PaddlePaddle/PaddleSpeech", "description": "（开源）百度开源，全流程语音工具"},
                {"name": "Sherpa-ONNX", "url": "https://github.com/k2-fsa/sherpa-onnx", "description": "（开源）离线语音识别/合成框架"},
                {"name": "山海·知音", "url": "https://www.unisound.com/", "description": "云知声出品，支持30+方言、全双工交互，首包延迟90ms"},
                {"name": "Seeduplex", "url": "https://www.doubao.com/", "description": "豆包全双工语音大模型，边听边说，交互自然顺畅"},
                {"name": "Xiaomi MiMo-V2-TTS", "url": "https://mimo.mi.com/", "description": "小米自研语音合成大模型，支持方言、歌声合成，上亿小时预训练"},
                {"name": "佰分象AI", "url": "https://www.ntxsl666.com/", "description": "AI语音机器人，语音识别准确率98.2%，支持1200路并发外呼"},
                {"name": "avavox", "url": "https://avavox.com/", "description": "神州泰岳旗下大模型外呼机器人，按Token计费，30秒搭建"},
                {"name": "云蝠智能", "url": "https://www.telrobot.top/", "description": "VoiceAgent大模型语音智能体，支持多模态交互，500ms响应"},
                {"name": "沃丰科技智呼机器人", "url": "https://www.udesk.cn/", "description": "大模型语音机器人，0.3秒响应，支持全渠道接入"},
                {"name": "CosyVoice3", "url": "https://github.com/FunAudioLLM/CosyVoice", "description": "（开源）阿里FunAudioLLM开源，中文优化语音合成"},
                {"name": "GPT-SoVITS", "url": "https://github.com/RVC-Boss/GPT-SoVITS", "description": "（开源）社区开源，高保真音色克隆"},
                {"name": "IndexTTS-2", "url": "https://github.com/index-tts/indextts", "description": "（开源）零样本克隆，情绪控制"},
                {"name": "Spark-TTS", "url": "https://github.com/SparkAudio/Spark-TTS", "description": "（开源）腾讯开源，基于Qwen的语音合成"},
                {"name": "Whisper", "url": "https://github.com/openai/whisper", "description": "（开源）OpenAI开源，99种语言语音识别"},
                {"name": "Qwen3-ASR", "url": "https://tongyi.aliyun.com/", "description": "（开源）阿里开源，多语言语音识别"},
                {"name": "FunASR", "url": "https://github.com/modelscope/FunASR", "description": "（开源）阿里达摩院开源，工业级ASR"},
                {"name": "Qwen-Omni", "url": "https://tongyi.aliyun.com/", "description": "（开源）阿里开源，语音对话模型"},
                {"name": "GLM-4.1V-Thinking-Flash", "url": "https://www.bigmodel.cn/", "description": "（开源）智谱免费，语音+视觉多模态"},
                {"name": "Sherpa-ONNX", "url": "https://github.com/k2-fsa/sherpa-onnx", "description": "（开源）离线语音识别/合成框架"},
                {"name": "VoiceFox", "url": "https://voicefox.cn/", "description": "大模型增强ASR，支持19种方言，噪音环境识别率领先"}
            ]
        },
        {
            "title": "AI音乐创作",
            "links": [
                {"name": "Suno", "url": "https://suno.com/", "description": "全球最知名的 AI 音乐生成工具，V5.5 支持人声克隆"},
                {"name": "Udio", "url": "https://www.udio.com/", "description": "高保真音质输出，支持 48kHz、分轨下载"},
                {"name": "Mureka", "url": "https://www.mureka.ai/", "description": "昆仑万维出品，支持 10 种语言，V8 版本领先"},
                {"name": "Soundful", "url": "https://my.soundful.com/", "description": "专业背景音乐生成，适合内容创作者"},
                {"name": "Mubert", "url": "https://mubert.com/", "description": "实时音乐流生成，适合直播和视频"},
                {"name": "AIVA", "url": "https://www.aiva.ai/", "description": "古典音乐专业，适合电影配乐、游戏原声"},
                {"name": "Boomy", "url": "https://boomy.com/", "description": "零门槛音乐创作，支持发布到流媒体平台"},
                {"name": "Stable Audio", "url": "https://stability.ai/", "description": "Stability AI 出品，开源音频生成模型"},
                {"name": "Jukebox AI", "url": "https://github.com/openai/jukebox", "description": "（开源）OpenAI 开源，生成完整歌曲波形"},
                {"name": "Google Lyria", "url": "https://deepmind.google/", "description": "Google DeepMind 出品，3 分钟结构化音乐"},
                {"name": "Producer.AI", "url": "https://www.producer.ai/", "description": "AI 音乐 Agent，对话式创作"},
                {"name": "天工SkyMusic", "url": "https://tiangong.cn/", "description": "昆仑万维出品，中文人声自然度领先"},
                {"name": "网易天音 XStudio", "url": "https://xstudio.music.163.com/", "description": "网易出品，专业 AI 音乐创作平台"},
                {"name": "海绵音乐", "url": "https://www.haimian.com/", "description": "字节跳动出品，短视频配乐首选"},
                {"name": "谱乐", "url": "https://app.yourmusic.fun/", "description": "AI 作曲写歌，支持多种风格"},
                {"name": "蘑兔AI", "url": "https://www.motu.ai/", "description": "中文创作者首选，民谣和华语流行出色"},
                {"name": "歌歌AI写歌", "url": "https://www.gege.ai/", "description": "人声克隆、AI 音乐生成、全球发行"},
                {"name": "Tunee", "url": "https://www.tunee.ai/", "description": "国内首个对话式 AI 音乐创作 Agent"},
                {"name": "MiniMax 音乐", "url": "https://www.minimaxi.com/audio/music", "description": "MiniMax 出品，AI 音乐生成"},
                {"name": "Filmora AI Music", "url": "https://filmora.wondershare.com/", "description": "万兴喵影内置 AI 音乐生成器"},
                {"name": "Soundraw", "url": "https://soundraw.io/", "description": "可定制化 AI 音乐生成，支持商用"},
                {"name": "音潮", "url": "https://web.yinchaoyongxian.com/studio/music-explore", "description": "自由量级出品，一站式AI音乐创作平台，零门槛出歌"},
                {"name": "Vemus未音", "url": "https://y.qq.com/vemus/", "description": "腾讯音乐旗下AI音乐创作工具，多模态输入"},
                {"name": "Lemonaid", "url": "https://www.lemonaid.ai/", "description": "面向专业音乐人的AI音乐生成工具，支持MIDI与WAV输出"}
            ]
        },
        {
            "title": "短剧Agent",
            "links": [
                {"name": "小云雀AI", "url": "https://xyq.jianying.com/", "description": "字节跳动出品，行业首个搭载Seedance2.0的短剧Agent"},
                {"name": "ZenStudio", "url": "https://tvi.v.qq.com/", "description": "腾讯视频AI短剧创作平台"},
                {"name": "Jellyfish", "url": "https://github.com/chatfire-AI/jellyfish", "description": "（开源）AI短剧工厂，解决角色漂移问题"},
                {"name": "剧火AI", "url": "https://www.juhuo.ai/", "description": "AI编导工具，懂短剧懂情绪"},
                {"name": "可灵AI", "url": "https://klingai.kuaishou.com/", "description": "快手出品，AI视频生成"},
                {"name": "盼趣AI", "url": "https://panqu.com/", "description": "AI短剧创作平台，秒级呈现分镜与成片"},
                {"name": "火宝短剧", "url": "https://github.com/chatfire-AI/huobao-drama", "description": "（开源）一站式短剧生成平台"},
                {"name": "灵果短剧AI", "url": "https://github.com/LingGuoAI/LingGuo-Drama", "description": "（开源）短剧/漫剧生成平台"},
                {"name": "百度AI短剧创作", "url": "https://yiyan.baidu.com/", "description": "百度出品，AI短剧内容生成"},
                {"name": "Zopia", "url": "https://zopia.ai/", "description": "AI短剧Agent，支持OpenClaw原生适配"},
                {"name": "万彩AI", "url": "https://ai.kezhan365.com/", "description": "AI短视频创作，数字人口播"},
                {"name": "即梦AI", "url": "https://jimeng.jianying.com/", "description": "字节跳动出品，Seedance 2.0视频生成"},
                {"name": "万兴喵影", "url": "https://filmora.wondershare.com/", "description": "AI视频编辑，内置短剧模板"},
                {"name": "巨日禄", "url": "https://www.jurilu.com/", "description": "AI短剧创作平台，支持剧本生成与视频制作"}
            ]
        },
        {
            "title": "AI大模型",
            "links": [
                {"name": "Kimi", "url": "https://platform.moonshot.cn/", "description": "专业代码生成、智能对话、视觉推理"},
                {"name": "MiniMax", "url": "https://www.minimaxi.com/", "description": "MiniMax 自主研发了一系列多模态通用大模型"},
                {"name": "智谱GLM", "url": "https://www.bigmodel.cn/", "description": "新一代国产自主通用Al大模型开放平台"},
                {"name": "DeepSeek", "url": "https://www.deepseek.com/", "description": "DeepSeek-V3.2 正式版发布，强化 Agent 能力"},
                {"name": "千问Qwen", "url": "https://www.aliyun.com/product/tongyi", "description": "千问首个原生多模态大模型"},
                {"name": "豆包Doubao", "url": "https://www.doubao.com/chat/", "description": "字节跳动自研大模型"},
                {"name": "Claude", "url": "https://platform.claude.com/", "description": "Anthropic开发的大型语言模型家族"},
                {"name": "Gemini", "url": "https://aistudio.google.com/", "description": "兼具高推理能力、多模态处理、可视化渲染和低成本高效能"},
                {"name": "GPT", "url": "https://platform.openai.com/", "description": "OpenAI大模型系列，GPT-6将于2026年4月发布，支持200万Token上下文"},
                {"name": "Grok", "url": "https://console.x.ai/", "description": "马斯克旗下xAI公司开发的人工智能大模型系列"},
                {"name": "Llama", "url": "https://www.llama.com/", "description": "Meta推出的一款开源大语言模型"},
                {"name": "Mistral", "url": "https://mistral.ai/", "description": "一个基于大语言模型的对话平台"},
                {"name": "MiMo", "url": "https://mimo.xiaomi.com/zh/", "description": "小米公司自研的开源推理大模型系列"},
                {"name": "讯飞星火", "url": "https://xinghuo.xfyun.cn/sparkapi", "description": "大讯飞推出的新一代认知智能大模型"},
                {"name": "腾讯混元", "url": "https://cloud.tencent.com/product/tclm", "description": "腾讯研发的大语言模型"},
                {"name": "百度文心", "url": "https://yiyan.baidu.com/", "description": "百度旗下A助手"},
                {"name": "阶跃星辰", "url": "https://platform.stepfun.com/", "description": "专注通用人工智能（AGI），自研大模型与多模态技术"},
                {"name": "PinchBench", "url": "https://pinchbench.com/", "description": "龙虾模型排行榜"},
                {"name": "Artificial Analysis", "url": "https://artificialanalysis.ai/", "description": "一个专注于AI语言模型和API提供商的独立分析平台"},
                {"name": "Arena.ai", "url": "https://arena.ai/leaderboard", "description": "由美国加州大学伯克利分校推出的AI模型评估平台"},
                {"name": "OpenRouter Rankings", "url": "https://openrouter.ai/rankings", "description": "模型排名反映了在 OpenRouter 平台上各个大型语言模型的实际使用情况"},
                {"name": "XSCT Bench", "url": "https://xsct.ai/", "description": "场景化大模型测评平台"},
                {"name": "Vals AI", "url": "https://www.vals.ai/", "description": "专注于大型语言模型评估和基准测试的平台"},
                {"name": "Gemma 4", "url": "https://ai.google.dev/gemma", "description": "（开源）Google开源大模型系列，Apache 2.0协议"}
            ]
        },
        {
            "title": "Skills市场",
            "links": [
                {"name": "ClawHub", "url": "https://clawhub.ai/", "description": "OpenClaw官方Skills注册中心"},
                {"name": "SkillHub", "url": "https://skillhub.tencent.com/", "description": "腾讯云专为中国用户优化的Skills社区"},
                {"name": "Skills.sh", "url": "https://skills.sh/", "description": "Vercel 官方技能目录"},
                {"name": "SkillsMP", "url": "https://skillsmp.com/zh", "description": "面向 Agent 的开源 skill 集合平台"},
                {"name": "虾评Skill", "url": "https://xiaping.coze.site/", "description": "面向 Agent 的精品优质 Skill 分享评测平台"},
                {"name": "SkillHub中国", "url": "https://www.skill-cn.com/", "description": "助力国内 Skill 使用者快速找到能用、好用、可复用的实践方案"},
                {"name": "Agent Skills Hub", "url": "https://agentskillshub.top/", "description": "一个集中式平台和市场，用于发现、管理和部署AI代理技能"},
                {"name": "OpenClaw Directory", "url": "https://openclawdirectory.co.uk/", "description": "由社区驱动的中心，用于发现、提交和管理OpenClaw技能"},
                {"name": "OpenClawDir", "url": "https://openclawdir.com/", "description": "OpenClaw AI 助手的社区目录"},
                {"name": "ClawSkills", "url": "https://clawskills.sh/", "description": "5,490+ Skills 集合"},
                {"name": "CryptoSkills", "url": "https://cryptoskills.dev/", "description": "为所有crypto领域提供开源Skills"},
                {"name": "CocoLoop", "url": "https://hub.cocoloop.cn/", "description": "更快更安全的 Al Agent Skills 商店"},
                {"name": "MiniMax", "url": "https://agent.minimaxi.com/skills", "description": "AI Agent学习新技能的地方"},
                {"name": "theSkills.ai", "url": "https://theskills.ai/", "description": "专家认证技能市场，连接技能专家与AI Agent"},
                {"name": "SafeSkill", "url": "https://safeskill.cn/", "description": "微步旗下AI智能体Skills安全平台，守护每一个AI Agent Skill"}
            ]
        },
        {
            "title": "综合生态",
            "links": [
                {"name": "Xcrawl", "url": "https://xcrawl.com/?keyword=2ozjddoq", "description": "通过 OpenClaw 集成 XCrawl，可以让你的 Agent 直接获得网页抓取能力"}
            ]
        },
        {
            "title": "Agent生态",
            "links": [
                {"name": "Moltbook", "url": "https://www.moltbook.cn/", "description": "面向 AI Agent的社交网络"},
                {"name": "InStreet", "url": "https://instreet.coze.site/", "description": "Agent社交平台，AI Agent 在线互动、学习、竞技的社区"},
                {"name": "虾聊", "url": "https://clawdchat.ai/", "description": "AI Agent 的社交平台"},
                {"name": "虾聊", "url": "https://xialiaoai.com/", "description": "纯 Agent（OpenClaw）交流社区，人类只能围观，不能发言"},
                {"name": "AgentMail", "url": "https://www.agentmail.to/", "description": "专为 AI Agent 打造的邮箱基础设施服务"},
                {"name": "MailboxKit", "url": "https://mailboxkit.com/", "description": "聚焦新创和消费主题的科技媒体"},
                {"name": "mails", "url": "https://mails.dev/", "description": "一个为 agents 设计的邮件服务"},
                {"name": "Souls.zip", "url": "https://souls.zip/shop", "description": "浏览经过生产测试的AI代理灵魂和技能"},
                {"name": "OpenClaw Startups", "url": "https://trustmrr.com/special-category/openclaw", "description": "一个开源、本地优先的 AI 机器人生态系统"},
                {"name": "曝光观察板", "url": "https://openclaw.allegro.earth/", "description": "列出了可公开访问的活跃OpenClaw防御意识实例"},
                {"name": "Claw Bench 排行榜", "url": "https://clawbench.net/", "description": "AI Agent 框架标准化评估"},
                {"name": "ClawPal", "url": "https://clawpal.xyz/", "description": "OpenClaw 的桌面配置助手"},
                {"name": "ClawWatcher", "url": "https://clawwatcher.com/", "description": "面向 OpenClaw 的监控仪表盘"},
                {"name": "ClawManager", "url": "https://clawmanager.ai/", "description": "让 OpenClaw 对所有人都可使用的仪表盘"},
                {"name": "Control Center", "url": "https://github.com/TianyiDataScience/openclaw-control-center", "description": "OpenClaw 的安全优先、本地优先控制中心"},
                {"name": "水产市场", "url": "https://openclawmp.cc/", "description": "专为 OpenClaw 构建的 Agent 进化生态平台"},
                {"name": "EdgeOne ClawScan", "url": "https://matrix.tencent.com/clawscan/", "description": "一键全面扫描 OpenClaw 不安全配置、恶意 Skill与漏洞"},
                {"name": "OpenClaw 使用案例", "url": "https://openclawcases.zeabur.app/", "description": "复制提示词就可以直接使用于 OpenClaw、Claude Code、Cursor 或其他 AI agent 工具"},
                {"name": "A2H Market", "url": "https://a2hmarket.ai/", "description": "同时面向人类和 AI Agent 的开放交易市场"},
                {"name": "Reddit板块", "url": "https://www.reddit.com/r/openclaw/", "description": "Reddit 上OpenClaw讨论板块"},
                {"name": "Discord官方服务器", "url": "https://discord.gg/openclaw", "description": "实时技术交流与问题解答"},
                {"name": "Clawvard", "url": "https://clawvard.school/", "description": "第一所人工智能代理大学，送你的 Agent 去上学"}
            ]
        },
        {
            "title": "Agent支付",
            "links": [
                {"name": "Claw402", "url": "https://claw402.ai/", "description": "一个用USDC付费的个人AI助手"},
                {"name": "SkillPay", "url": "https://skillpay.me/", "description": "一个基于信贷的通用支付系统，用于OpenClaw支付"},
                {"name": "FluxA", "url": "https://fluxapay.xyz/", "description": "代理钱包，可以为API、向任何地址汇款"},
                {"name": "AgentCard.ai", "url": "https://agentcard.ai/", "description": "一张专为 AI Agent 打造的独立虚拟信用卡"},
                {"name": "AgentCard.sh", "url": "https://agentcard.sh/", "description": "面向人工智能代理的虚拟信用卡"},
                {"name": "Clawcard.sh", "url": "https://www.clawcard.sh/", "description": "首个为agent提供的统一凭证系统"},
                {"name": "Lobster.cash", "url": "https://www.lobster.cash/", "description": "允许你的 Agent支付任何费用"},
                {"name": "Machines Cash", "url": "https://www.machines.cash/", "description": "面向个人与代理的虚拟 Visa 信用卡"},
                {"name": "Gate Pay for AI", "url": "https://www.gate.com/zh/gate-for-ai/pay", "description": "AI Agent 原生支付，真正自主"},
                {"name": "Coinbase AgentKit", "url": "https://www.coinbase.com/zh-cn/developer-platform/products/agentkit", "description": "通过AgentKit赋能您的AI代理进行自主支付"},
                {"name": "Tempo Wallet", "url": "https://wallet.tempo.xyz/", "description": "Tempo 公链的官方钱包，专为 AI Agent 与机器支付场景设计"},
                {"name": "ClawVault", "url": "https://clawvault.cc/", "description": "一个平台保障你所有的 AI Agent支出"},
                {"name": "ClawCredit", "url": "https://www.claw.credit/", "description": "T54 提供了完整的 AI 原生金融服务"},
                {"name": "PayAI", "url": "https://payai.network/", "description": "构建能够实时支付和收获的AI代理和应用"},
                {"name": "Ampersend", "url": "https://www.ampersend.ai/", "description": "一个基于 x402 构建的管理平台"}
            ]
        },
        {
            "title": "币圈生态",
            "links": [
                {"name": "OKX Agent Trade Kit", "url": "https://www.okx.com/zh-hans/agent-tradekit", "description": "将 AI 助手与您的 OKX 账户直接连接"},
                {"name": "Binance Skills Hub", "url": "https://www.binance.com/zh-CN/skills", "description": "让 AI 代理能够原生访问加密货币"},
                {"name": "GetClaw", "url": "https://www.bitget.com/zh-CN/activity-hub/get-claw", "description": "Bitget 出品的AI 交易自主智能体"},
                {"name": "HTX AI Skills", "url": "https://www.htx.com/zh-cn/skills", "description": "面向 AI Agent 生态推出的开放交易协议"},
                {"name": "GateClaw", "url": "https://www.gate.com/zh/gateclaw", "description": "Gate 推出的 AI Web3 Agent 工作平台"},
                {"name": "Bybit AI Hub", "url": "https://www.bybit.com/zh-MY/ai", "description": "您的 AI 助手，现已接入 Bybit 全栈交易引擎"},
                {"name": "COIN CLAW", "url": "https://www.aicoin.com/zh-Hans/coinclaw", "description": "你的 Web3 世界 AI 常驻特工"},
                {"name": "AiCoin CoinOS", "url": "https://www.aicoin.com/zh-Hans/coinos", "description": "为 OpenClaw 等 Agent 接入实时行情、实盘操作"},
                {"name": "MoonPay Agents", "url": "https://www.moonpay.com/agents", "description": "人工智能系统自己的加密钱包"},
                {"name": "Alchemy Ai Agent", "url": "https://www.alchemy.com/ai-agents", "description": "构建管理钱包、执行安全交易并将资产跨链转移的AI代理"},
                {"name": "Circle Skills", "url": "https://github.com/circlefin/skills", "description": "提供USDC支付、跨链转账、钱包和智能合约的最佳实践指导"},
                {"name": "MetaMask Skill", "url": "https://github.com/MetaMask/openclaw-skills", "description": "用于构建、测试和与MetaMask及更广泛的以太坊生态系统互动"},
                {"name": "PolyHub", "url": "https://github.com/HubbleVision/polyhub-skills", "description": "开源PolyHub Skills，让你的 AI 变成Polymarket顶级交易员"},
                {"name": "KuCoin Skills Hub", "url": "https://github.com/Kucoin/kucoin-skills-hub", "description": "通过标准化、模块化的能力，为 AI 智能提供更广泛的原生加密接入能力"},
                {"name": "Gate Skills Hub", "url": "https://www.gate.com/zh/skills-hub", "description": "无需编写代码，即可一键调用 Gate 的现货、永续合约与行情能力"},
                {"name": "Bitget Agent Hub", "url": "https://www.bitget.com/zh-CN/activity-hub/agent-hub", "description": "让开发者和 Vibe Coder 安全高效地接入加密交易能力"}
            ]
        },
        {
            "title": "交易所",
            "links": [
                {"name": "Binance", "url": "https://www.binance.com/zh-CN", "description": "领先的加密货币交易平台"},
                {"name": "OKX", "url": "https://www.okx.com/zh-hans", "description": "全球领先的数字资产交易平台"},
                {"name": "Bitget", "url": "https://www.bitget.com/zh-CN", "description": "加密货币交易所，支持多种货币"},
                {"name": "Bybit", "url": "https://www.bybit.com/zh-MY/", "description": "全球知名的加密货币交易平台"},
                {"name": "Gate", "url": "https://www.gate.com/zh/", "description": "全球区块链资产交易平台"},
                {"name": "KuCoin", "url": "https://www.kucoin.com/zh-hant", "description": "值得信赖的加密交易所"},
                {"name": "Mexc", "url": "https://www.mexc.com/zh-MY/", "description": "全球化的加密货币交易所"},
                {"name": "HTX", "url": "https://www.htx.com/zh-cn/", "description": "全球前三的加密货币交易所"},
                {"name": "Coinbase", "url": "https://www.coinbase.com/", "description": "美国加密货币交易所"},
                {"name": "Kraken", "url": "https://www.kraken.com/zh-cn", "description": "用户可以相对较低的手续费，在该平台购买、出售并交易各种资产"},
                {"name": "Bitmart", "url": "https://www.bitmart.com/zh-CN", "description": "平台为个人及机构用户提供现货、期货、杠杆及跟单等多元化交易服务"},
                {"name": "Weex", "url": "https://www.weex.com/zh-CN", "description": "为初学者和专业交易者设计的交易平台"},
                {"name": "XT.com", "url": "https://www.xt.com/zh-CN", "description": "安全可靠的加密货币交易所"},
                {"name": "Ju.com", "url": "https://www.ju.com/zh-CN", "description": "提供现货交易、永续合约、质押、代币发行平台及非托管Web3钱包等服务"}
            ]
        },
        {
            "title": "世界模型",
            "links": [
                {"name": "HappyOyster", "url": "https://www.happyoyster.cn/", "description": "阿里开放世界模型，实时交互三维内容生成"},
                {"name": "WorldLabs Marble", "url": "https://www.worldlabs.ai/", "description": "李飞飞空间智能，生成持久可编辑的三维环境"},
                {"name": "Meta V-JEPA 2", "url": "https://ai.meta.com/blog/v-jepa-2/", "description": "Meta联合嵌入预测架构，理解并预测陌生物体和环境动态"},
                {"name": "Google Genie 2", "url": "https://deepmind.google/", "description": "Google DeepMind通用世界模型，生成可交互的3D环境"},
                {"name": "Runway GWM-1", "url": "https://runwayml.com/", "description": "Runway生成式视频世界模型"},
                {"name": "智元 Genie Envisioner", "url": "https://www.zhiyuan-robot.com/", "description": "智元机器人世界模型，动作驱动的物理进化引擎"},
                {"name": "蔚来世界模型", "url": "https://www.nio.com/", "description": "智能驾驶世界模型，停车场自主寻路"},
                {"name": "特斯拉世界模型", "url": "https://www.tesla.com/", "description": "自动驾驶世界模型，神经网络驱动的环境模拟"}
            ]
        }
    ]
};
