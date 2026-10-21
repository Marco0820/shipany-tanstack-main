import { useLayoutEffect } from 'react';

import { getLocale } from '@/paraglide/runtime.js';

const zh: Record<string, string> = {
  'Switch language': '切换语言',
  Features: '功能',
  Benefits: '优势',
  Pricing: '价格',
  Blog: '博客',
  'Contact Us': '联系我们',
  'Try Dreelio free': '免费试用 Dreelio',
  'See features': '查看功能',
  'Trusted by 7,000+ top startups, freelancers and studios':
    '已获得 7,000+ 家初创公司、自由职业者和工作室的信赖',
  'Seamless across devices': '多设备无缝同步',
  'Work from anywhere,': '随时随地办公，',
  'stay in sync': '始终保持同步',
  'Mobile App': '移动应用',
  'Web App': '网页应用',
  'project management': '项目管理',
  'Keep every project moving forward': '让每个项目持续向前',
  'Plan, assign, and deliver your work - all in one place. With smart task tracking, deadlines, and real-time progress, you stay organized and clients stay confident.':
    '在一个地方完成计划、分工和交付。智能任务跟踪、截止日期和实时进度，让你保持有序，也让客户更放心。',
  Tasks: '任务',
  'Time tracking': '时间追踪',
  Timesheets: '工时表',
  Reports: '报表',
  'financial management': '财务管理',
  'Track income, get paid, stress less': '记录收入，及时收款，少些压力',
  'Create branded invoices, log expenses, and keep tabs on your earnings. Whether you bill hourly or per project, everything’s automated and tax-friendly.':
    '创建品牌发票、记录支出、掌握收入。无论按小时还是按项目计费，流程都自动完成，也方便报税。',
  Invoicing: '发票',
  Budgets: '预算',
  Forecasting: '预测',
  Integrations: '集成',
  features: '功能',
  'Built for freelancers,': '为自由职业者打造，',
  'powered by simplicity': '简单才是核心',
  'Smart, flexible, and built around your business workflow':
    '智能、灵活，围绕你的业务流而设计',
  'Personalize every detail, From branding and interface layout to colors and menus, so Dreelio feels like an extension of your brand.':
    '从品牌、界面布局到颜色和菜单，每个细节都能自定义，让 Dreelio 像你品牌的延伸。',
  'Integrates seamlessly with the tools you already use':
    '与你正在使用的工具无缝集成',
  'Seamless integrations. Plug Dreelio into the tools you love. Set up automations, sync your data, and make your systems work smarter together.':
    '无缝集成。把 Dreelio 接进你喜欢的工具，设置自动化、同步数据，让各个系统配合得更聪明。',
  'Collaborate in realtime': '实时协作',
  'Keep every conversation in sync use comments, messages, and project chats to stay on the same page.':
    '用评论、消息和项目聊天让每次沟通都同步，大家始终在同一页上。',
  'Speaks your language': '说你的语言',
  'Set your language, currency, time, and date preferences for a seamless experience that feels truly local.':
    '设置语言、货币、时间和日期偏好，获得真正本地化的体验。',
  'View things your way': '用你习惯的方式查看',
  'Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar.':
    '在看板、卡片、列表、表格、时间线和日历等视图之间轻松切换。',
  '"Dreelio is by far the best agency tool I have ever used"':
    '“Dreelio 是我用过的最好的代理机构工具”',
  'VP Marketing, Meta': 'Meta 市场副总裁',
  '"As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built."':
    '“我们是一支节奏很快的设计团队，需要同样快的工具。从客户接入到收款，它都干净、迅速、做得漂亮。”',
  'Design Ops Lead, teamwork.': 'teamwork. 设计运营负责人',
  'Agency Owner': '机构主理人',
  '"We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It\'s everything a small team needs to stay pro."':
    '“我们以前把各种工具拼凑在一起。现在合同、时间追踪和收款都在一个干净的系统里。这正是小团队保持专业所需的一切。”',
  'Project Manager, Google': 'Google 项目经理',
  '"Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed."':
    '“管项目曾经意味着表格、私信和漏掉的发票。这个平台让流程紧凑，也让客户印象深刻。”',
  'Art Director, Pentagram': 'Pentagram 艺术总监',
  pricing: '价格',
  'Simple plans': '简单方案',
  'for serious work': '认真做事',
  'Dreelio Basic': 'Dreelio 基础版',
  Free: '免费',
  'For solo use with light needs.': '适合需求较轻的个人使用。',
  'Unlimited projects': '无限项目',
  'Unlimited clients': '无限客户',
  'iOS & Andriod app': 'iOS 与 Android 应用',
  'Try Freelio free': '免费试用 Dreelio',
  Annually: '按年',
  Monthly: '按月',
  'Dreelio Premium': 'Dreelio 高级版',
  'Save 20%': '省 20%',
  '$189/mo': '$189/月',
  '$87/mo': '$87/月',
  'For pro use with light needs.': '适合需求较轻的专业使用。',
  'Everything in Basic': '包含基础版全部功能',
  'Invoices & payments': '发票与收款',
  'Expense tracking': '支出追踪',
  'Income tracking': '收入追踪',
  Scheduling: '排期',
  'Get started': '开始使用',
  'Dreelio Enterprise': 'Dreelio 企业版',
  Flexible: '灵活定价',
  'For team use with light needs.': '适合需求较轻的团队使用。',
  'Everything in Premium': '包含高级版全部功能',
  'Custom data import': '自定义数据导入',
  'Advanced onboarding': '高级上手引导',
  'Hubspot integration': 'HubSpot 集成',
  'Contact sales': '联系销售',
  'Connect to Content': '关联内容',
  'Add layers or components to infinitely loop on your page.':
    '添加图层或组件，让它们在页面上无限循环。',
  blog: '博客',
  'Ideas to level-up your freelance game': '提升自由职业能力的想法',
  'How to start a 100k creative agency in 2025':
    '如何在 2025 年创办一家年入 10 万美元的创意机构',
  'Learn how to kickstart your journey into agency ownership with our comprehensive guide.':
    '通过这份完整指南，开启你成为机构主理人的第一步。',
  'Must Read': '必读',
  'Head of Marketing': '市场负责人',
  Featured: '精选',
  'Top 10 digital agency software': '十大数字机构软件',
  Tools: '工具',
  'A complete guide to project success in 2026': '2026 年项目成功完全指南',
  Insight: '洞察',
  'What Are Billable Hours': '什么是可计费工时',
  Management: '管理',
  Community: '社区',
  'Stay in the loop': '保持关注',
  '15.2K followers': '1.52 万关注者',
  'Stay updated on new features and discover how others are using Dreelio.':
    '了解新功能，看看别人如何使用 Dreelio。',
  'Follow us': '关注我们',
  '32k subscribers': '3.2 万订阅者',
  'Tips, tutorials, and in-depth feature guides to inspire and enhance your Dreelio workflow.':
    '技巧、教程和深入功能指南，启发并提升你的 Dreelio 工作流。',
  Subscribe: '订阅',
  'Ready to get started': '准备好开始了吗',
  'Download Dreelio for free. No credit card required.':
    '免费下载 Dreelio，无需信用卡。',
  'Your favourite business management software. Built for early startup founders.':
    '你喜欢的业务管理软件。为早期创业者打造。',
  Pages: '页面',
  Home: '首页',
  information: '信息',
  Contact: '联系',
  Privacy: '隐私',
  'Terms of use': '使用条款',
  '© 2025 Dreelio. Created by': '© 2025 Dreelio. 创作者',
  'Built with': '构建于',
  'Built in Framer': '使用 Framer 构建',
  'Get Template': '获取模板',
  'Open menu': '打开菜单',
  'Close menu': '关闭菜单',
};

const heroTitle = '像专业人士一样经营你的自由职业';
const heroBody =
  '管理客户、项目和收款的一体化平台，告别混乱。从第一份合同到最后一张发票，我们始终帮你兜底。';

function translateTree(root: HTMLElement) {
  const hero = root.querySelector('#hero');
  const title = hero?.querySelector('h1');
  const subtitle = hero?.querySelector('p');
  if (title) title.textContent = heroTitle;
  if (subtitle) subtitle.textContent = heroBody;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }
  for (const node of nodes) {
    if (title?.contains(node) || subtitle?.contains(node)) continue;
    const raw = node.textContent ?? '';
    const key = raw.replace(/\s+/g, ' ').trim();
    const next = zh[key];
    if (!next) continue;
    const leading = raw.match(/^\s*/)?.[0] ?? '';
    const trailing = raw.match(/\s*$/)?.[0] ?? '';
    node.textContent = `${leading}${next}${trailing}`;
  }
}

export function HomeCopy() {
  useLayoutEffect(() => {
    if (getLocale() !== 'zh') return;
    const root = document.querySelector<HTMLElement>('.dreelio-root');
    if (!root) return;
    translateTree(root);
    document.title = 'Dreelio - 面向创始人的网站模板';
    document.documentElement.lang = 'zh';
  }, []);

  return null;
}
