import type { Locale } from "../i18n";

type LocalizedText = Record<Locale, string>;

export type SitemapItem = {
  label: LocalizedText;
  href: string;
  note: LocalizedText;
};

export const extendedSitemap: SitemapItem[] = [
  {
    label: { ja: "ホーム", en: "Home", vi: "Trang chủ", zh: "首页", ko: "홈" },
    href: "/",
    note: {
      ja: "ブランドストーリー、メインビジュアル、特集",
      en: "Brand story, hero, highlights",
      vi: "Câu chuyện thương hiệu, hero, điểm nổi bật",
      zh: "品牌故事、主视觉、亮点",
      ko: "브랜드 스토리, 히어로, 하이라이트",
    },
  },
  {
    label: { ja: "メニュー", en: "Menu", vi: "Thực đơn", zh: "菜单", ko: "메뉴" },
    href: "/menu",
    note: {
      ja: "とんかつ、カレー、サイド、ドリンク",
      en: "Tonkatsu, curry, sides, drinks",
      vi: "Tonkatsu, cà ri, món phụ, đồ uống",
      zh: "炸猪排、咖喱、小菜、饮品",
      ko: "돈카츠, 카레, 사이드, 음료",
    },
  },
  {
    label: { ja: "店舗", en: "Stores", vi: "Cửa hàng", zh: "门店", ko: "매장" },
    href: "/store",
    note: {
      ja: "東京、大阪、京都の店舗",
      en: "Tokyo, Osaka, Kyoto and new openings",
      vi: "Tokyo, Osaka, Kyoto và điểm mới",
      zh: "东京、大阪、京都与新店",
      ko: "도쿄, 오사카, 교토와 신규 매장",
    },
  },
  {
    label: { ja: "予約", en: "Reservation", vi: "Đặt bàn", zh: "预约", ko: "예약" },
    href: "/reservation",
    note: {
      ja: "テーブル、カウンター、個室",
      en: "Table, counter, private dining",
      vi: "Bàn, quầy, phòng riêng",
      zh: "餐桌、吧台、包间",
      ko: "테이블, 카운터, 프라이빗 다이닝",
    },
  },
  {
    label: { ja: "デリバリー", en: "Delivery", vi: "Giao hàng", zh: "外送", ko: "배달" },
    href: "/delivery",
    note: {
      ja: "テイクアウトとデリバリー注文",
      en: "Delivery and takeaway ordering",
      vi: "Đặt giao hàng và mang về",
      zh: "外送与外带订购",
      ko: "배달 및 포장 주문",
    },
  },
  {
    label: { ja: "こだわり", en: "About", vi: "Câu chuyện", zh: "品牌故事", ko: "브랜드 스토리" },
    href: "/about",
    note: {
      ja: "素材、技、もてなし",
      en: "Craft, ingredients, hospitality",
      vi: "Kỹ thuật, nguyên liệu, hiếu khách",
      zh: "工艺、食材、待客之道",
      ko: "기술, 재료, 환대",
    },
  },
  {
    label: { ja: "お知らせ", en: "News", vi: "Tin tức", zh: "新闻", ko: "소식" },
    href: "/news",
    note: {
      ja: "季節メニューと店舗情報",
      en: "Seasonal menu and store updates",
      vi: "Món theo mùa và cập nhật cửa hàng",
      zh: "季节菜单与门店更新",
      ko: "시즌 메뉴와 매장 소식",
    },
  },
  {
    label: { ja: "お問い合わせ", en: "Contact", vi: "Liên hệ", zh: "联系", ko: "문의" },
    href: "/contact",
    note: {
      ja: "ゲストサポート、法人、採用",
      en: "Guest support and business inquiries",
      vi: "Hỗ trợ khách và liên hệ kinh doanh",
      zh: "宾客支持与商务咨询",
      ko: "고객 지원 및 비즈니스 문의",
    },
  },
  {
    label: { ja: "ギフトカード", en: "Gift Cards", vi: "Thẻ quà tặng", zh: "礼品卡", ko: "기프트 카드" },
    href: "/gift-cards",
    note: {
      ja: "デジタルレストランギフト",
      en: "Digital restaurant gifts",
      vi: "Quà tặng nhà hàng dạng số",
      zh: "数字餐厅礼品",
      ko: "디지털 레스토랑 선물",
    },
  },
  {
    label: { ja: "採用", en: "Careers", vi: "Tuyển dụng", zh: "招聘", ko: "채용" },
    href: "/careers",
    note: {
      ja: "調理・サービススタッフ募集",
      en: "Chef and service recruitment",
      vi: "Tuyển bếp và phục vụ",
      zh: "厨师与服务岗位招聘",
      ko: "셰프 및 서비스 채용",
    },
  },
];
