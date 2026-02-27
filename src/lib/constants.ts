import type {
  NavItem,
  PainPoint,
  Reason,
  AIFeature,
  Step,
  CaseStudy,
  PricingPlan,
  FAQItem,
  FooterColumn,
} from "@/types";

export const SITE_NAME = "ウケトリ";
export const SITE_DESCRIPTION =
  "見積・請求・入金管理をこれひとつで。AIが消込・督促・書類作成をサポートし、バックオフィス業務を圧倒的に効率化するクラウドサービスです。";

export const NAV_ITEMS: NavItem[] = [
  { label: "特長", href: "#reasons" },
  { label: "機能", href: "#ai-features" },
  { label: "導入事例", href: "#case-studies" },
  { label: "料金", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  badge: "入金管理クラウド",
  title: "見積から入金まで、\nすべてを一気通貫で。",
  subtitle:
    "見積作成・請求書発行・入金消込・督促まで。煩雑なバックオフィス業務をAIでまるごと効率化するクラウドサービスです。",
  ctaPrimary: "無料で試してみる",
  ctaSecondary: "資料請求",
  badges: [
    "初期費用0円",
    "最短1分で登録",
    "クレカ不要",
    "インボイス制度対応",
    "電帳法対応",
  ],
};

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: "AlertTriangle",
    title: "入金遅延に気づけない",
    description:
      "請求書を発行したまま放置し、未入金に気づくのが月末。催促のタイミングを逃して資金繰りが悪化していませんか？",
  },
  {
    icon: "Clock",
    title: "消込作業に毎月何時間も",
    description:
      "銀行明細と請求書を目視で照合し、手作業で消込。件数が増えるほどミスも時間も増える悪循環に陥っていませんか？",
  },
  {
    icon: "FileSpreadsheet",
    title: "Excelからの移行が大変",
    description:
      "長年のExcel管理から脱却したいけど、データ移行や操作習得のハードルが高くて踏み出せない……そんなお悩みはありませんか？",
  },
];

export const REASONS: Reason[] = [
  {
    tag: "Reason 01",
    title: "入金ステータスを一目で可視化\n遅延は自動で督促",
    description:
      "請求書ごとの入金状況をダッシュボードでリアルタイムに確認。期日を過ぎた未入金には自動で督促メールを送信するため、もう入金漏れに悩みません。",
    icon: "BarChart3",
    bullets: [
      "ステータス別の請求一覧で未入金を即把握",
      "督促メールのテンプレートをカスタマイズ可能",
      "督促履歴を時系列で記録し対応漏れゼロへ",
    ],
  },
  {
    tag: "Reason 02",
    title: "AIが銀行明細と請求を照合\n消込を90%自動化",
    description:
      "銀行口座のAPI連携で入金データを自動取得。AIが請求書と照合し、消込候補を提示します。ワンクリックで確定するだけで消込完了です。",
    icon: "Zap",
    bullets: [
      "主要銀行のAPI連携で入金を自動取得",
      "AIが金額・振込名義・日付で最適マッチング",
      "手動消込と比べ作業時間を最大90%削減",
    ],
  },
  {
    tag: "Reason 03",
    title: "Excel取込＋直感操作で\n最短即日スタート",
    description:
      "既存のExcelデータをそのままインポート可能。使い慣れたスプレッドシート風UIで、特別なトレーニング不要で誰でもすぐに使いこなせます。",
    icon: "Upload",
    bullets: [
      "CSV/Excelファイルをドラッグ＆ドロップで取込",
      "スプレッドシート風UIで学習コストほぼゼロ",
      "導入サポートチームが初期設定をお手伝い",
    ],
  },
];

export const AI_FEATURES: AIFeature[] = [
  {
    icon: "Brain",
    title: "AI消込アシスト",
    description:
      "入金データと請求書をAIが自動照合。金額・名義・日付の組み合わせから最適な消込候補を提示し、ワンクリックで確定できます。",
  },
  {
    icon: "ScanLine",
    title: "書類OCR読取",
    description:
      "請求書や領収書の画像・PDFをAI-OCRで読み取り、金額・日付・取引先名を自動でデータ化。手入力の手間を大幅に削減します。",
  },
  {
    icon: "Lightbulb",
    title: "見積もり提案AI",
    description:
      "過去の取引データを学習し、取引先や商品に応じた最適な見積金額・条件を提案。見積作成のスピードと精度を飛躍的に高めます。",
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "無料アカウント作成",
    description: "メールアドレスだけで最短1分。クレジットカードの登録は不要です。",
    icon: "UserPlus",
  },
  {
    number: 2,
    title: "データ取込・初期設定",
    description:
      "既存のExcelデータをアップロード。銀行口座のAPI連携もガイドに沿って簡単に完了します。",
    icon: "Settings",
  },
  {
    number: 3,
    title: "運用スタート",
    description:
      "見積作成から入金管理まで、すべての機能をフル活用。困ったときはチャットサポートがすぐに対応します。",
    icon: "Rocket",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    company: "株式会社テクノブリッジ",
    industry: "ITコンサルティング",
    size: "従業員25名",
    quote:
      "毎月2日かかっていた消込作業が、ウケトリ導入後は30分で完了するようになりました。AIの照合精度が高く、ほぼ修正なしで確定できるのが素晴らしいです。",
    result: "消込作業時間 90%削減",
    person: "経理部 山田様",
  },
  {
    company: "合同会社グリーンフィールド",
    industry: "農業資材販売",
    size: "従業員8名",
    quote:
      "Excelで限界を感じていましたが、データ移行がとても簡単で驚きました。督促の自動化で入金サイクルが2週間早くなり、資金繰りが改善しています。",
    result: "入金サイクル 2週間短縮",
    person: "代表 佐藤様",
  },
  {
    company: "株式会社クリエイトデザイン",
    industry: "デザイン制作",
    size: "従業員15名",
    quote:
      "見積から請求、入金確認までバラバラのツールを使っていましたが、ウケトリで一元管理できるようになって業務効率が格段に上がりました。",
    result: "バックオフィス工数 60%削減",
    person: "取締役 田中様",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "スターター",
    price: "1,980",
    priceNote: "月額・税抜",
    description: "小規模事業者・フリーランス向け",
    features: [
      "月間請求書 50件",
      "ユーザー 1名",
      "AI消込アシスト",
      "メールサポート",
      "基本レポート",
    ],
    cta: "無料で試してみる",
  },
  {
    name: "スタンダード",
    price: "4,980",
    priceNote: "月額・税抜",
    description: "成長中の中小企業に最適",
    features: [
      "月間請求書 300件",
      "ユーザー 5名",
      "AI消込アシスト",
      "書類OCR読取",
      "自動督促メール",
      "チャットサポート",
      "詳細レポート",
    ],
    cta: "無料で試してみる",
    popular: true,
  },
  {
    name: "プロ",
    price: "9,800",
    priceNote: "月額・税抜",
    description: "本格運用・複数部門向け",
    features: [
      "月間請求書 無制限",
      "ユーザー 無制限",
      "AI消込アシスト",
      "書類OCR読取",
      "見積提案AI",
      "自動督促メール",
      "API連携",
      "専任サポート",
      "カスタムレポート",
    ],
    cta: "無料で試してみる",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "無料トライアルの期間はどのくらいですか？",
    answer:
      "すべてのプランで30日間の無料トライアルをご利用いただけます。トライアル期間中はすべての機能をお試しいただけ、期間終了後に自動課金されることはありません。",
  },
  {
    question: "既存のExcelデータを移行できますか？",
    answer:
      "はい、CSV・Excel形式のファイルをドラッグ＆ドロップで簡単にインポートできます。取引先マスタ、請求データなど幅広いデータの移行に対応しています。導入サポートチームが移行をお手伝いすることも可能です。",
  },
  {
    question: "インボイス制度（適格請求書）に対応していますか？",
    answer:
      "はい、対応しています。登録番号の管理、適格請求書のフォーマット出力、税率ごとの消費税計算など、インボイス制度に必要な機能をすべて備えています。",
  },
  {
    question: "電子帳簿保存法に対応していますか？",
    answer:
      "はい、電子帳簿保存法の電子取引要件に対応しています。タイムスタンプ付与、検索機能、訂正削除の履歴管理など、法令に準拠した形で書類を保存できます。",
  },
  {
    question: "銀行口座との連携はどの銀行に対応していますか？",
    answer:
      "主要メガバンク（三菱UFJ、三井住友、みずほ）をはじめ、地方銀行・ネット銀行など1,500以上の金融機関に対応しています。API連携で入金データを自動取得します。",
  },
  {
    question: "セキュリティ対策はどうなっていますか？",
    answer:
      "SSL/TLS暗号化通信、データの暗号化保存、二要素認証、IP制限など、金融機関レベルのセキュリティ対策を実施しています。SOC2 Type II認証も取得済みです。",
  },
  {
    question: "他の会計ソフトとの連携はできますか？",
    answer:
      "freee会計、マネーフォワードクラウド、弥生会計など主要な会計ソフトとのAPI連携に対応しています。仕訳データの自動連携により、二重入力の手間を省けます。",
  },
  {
    question: "途中でプランを変更できますか？",
    answer:
      "はい、いつでもプランの変更が可能です。アップグレードは即座に反映され、ダウングレードは次回請求日から適用されます。日割り計算にも対応しています。",
  },
  {
    question: "解約の手続きはどうすればよいですか？",
    answer:
      "管理画面から数クリックで解約手続きが可能です。解約手数料は一切かかりません。解約後もデータは90日間保持されるため、再開時にもスムーズに復帰できます。",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "プロダクト",
    links: [
      { label: "機能一覧", href: "#ai-features" },
      { label: "料金プラン", href: "#pricing" },
      { label: "導入事例", href: "#case-studies" },
      { label: "アップデート", href: "#" },
    ],
  },
  {
    title: "サポート",
    links: [
      { label: "ヘルプセンター", href: "#" },
      { label: "導入ガイド", href: "#" },
      { label: "API ドキュメント", href: "#" },
      { label: "お問い合わせ", href: "#" },
    ],
  },
  {
    title: "会社情報",
    links: [
      { label: "運営会社", href: "#" },
      { label: "採用情報", href: "#" },
      { label: "プレスリリース", href: "#" },
      { label: "パートナー", href: "#" },
    ],
  },
  {
    title: "法務",
    links: [
      { label: "利用規約", href: "#" },
      { label: "プライバシーポリシー", href: "#" },
      { label: "特定商取引法", href: "#" },
      { label: "セキュリティ", href: "#" },
    ],
  },
];
