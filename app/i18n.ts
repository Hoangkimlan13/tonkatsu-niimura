export const locales = ["ja", "en", "vi", "zh", "ko"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

export const languageOptions: { code: Locale; label: string; shortLabel: string }[] = [
  { code: "ja", label: "日本語", shortLabel: "JA" },
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "zh", label: "简体中文", shortLabel: "ZH" },
  { code: "ko", label: "한국어", shortLabel: "KO" },
  { code: "vi", label: "Tiếng Việt", shortLabel: "VI" },
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : defaultLocale;
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] && isLocale(segments[0])) {
    return `/${segments.slice(1).join("/")}` || "/";
  }

  return pathname || "/";
}

export function localizePath(href: string, locale: Locale) {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  const [path, hash = ""] = href.split("#");
  const cleanPath = stripLocaleFromPathname(path || "/");
  const localizedPath = cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;

  return hash ? `${localizedPath}#${hash}` : localizedPath;
}

export const dictionary = {
  ja: {
    siteName: "にいむら",
    delivery: "テイクアウト",
    deliveryAlt: "デリバリー",
    reservation: "予約する",
    phoneReservation: "電話予約", // Thêm dòng này
    menu: "メニュー",
    store: "店舗案内",
    about: "こだわり",
    news: "お知らせ",
    contact: "お問い合わせ",
    home: "ホーム",
    viewMenu: "全メニューを見る",
    bookingDelivery: "予約・デリバリー",
    reserveOrOrder: "カウンター席のご予約、またはご自宅で上質な食事をお楽しみください。",
    chooseMenu: "メニューを選ぶ",
    corporateOrder: "法人注文",
    sendMessage: "送信する",
    askConcierge: "相談する",
  },
  en: {
    siteName: "Niimura",
    delivery: "Takeout",
    deliveryAlt: "Delivery",
    reservation: "Reserve",
    phoneReservation: "Call to Book", // Thêm dòng này
    menu: "Menu",
    store: "Stores",
    about: "About",
    news: "News",
    contact: "Contact",
    home: "Home",
    viewMenu: "View full menu",
    bookingDelivery: "Booking & Delivery",
    reserveOrOrder: "Reserve a counter seat or order a polished meal at home.",
    chooseMenu: "Choose menu",
    corporateOrder: "Corporate order",
    sendMessage: "Send message",
    askConcierge: "Ask concierge",
  },
  vi: {
    siteName: "Niimura",
    delivery: "Mang về",
    deliveryAlt: "Giao hàng",
    reservation: "Đặt bàn",
    phoneReservation: "Đặt qua ĐT", // Thêm dòng này
    menu: "Thực đơn",
    store: "Cửa hàng",
    about: "Câu chuyện",
    news: "Tin tức",
    contact: "Liên hệ",
    home: "Trang chủ",
    viewMenu: "Xem toàn bộ thực đơn",
    bookingDelivery: "Đặt bàn & Giao hàng",
    reserveOrOrder: "Đặt chỗ tại quầy hoặc gọi một bữa ăn chỉn chu về nhà.",
    chooseMenu: "Chọn món",
    corporateOrder: "Đơn công ty",
    sendMessage: "Gửi tin nhắn",
    askConcierge: "Hỏi tư vấn",
  },
  zh: {
    siteName: "Niimura",
    delivery: "外带",
    deliveryAlt: "外送",
    reservation: "预约",
    phoneReservation: "电话预约", // Thêm dòng này
    menu: "菜单",
    store: "门店",
    about: "品牌故事",
    news: "新闻",
    contact: "联系",
    home: "首页",
    viewMenu: "查看完整菜单",
    bookingDelivery: "预约与外送",
    reserveOrOrder: "预约吧台座位，或在家享用精致餐点。",
    chooseMenu: "选择菜单",
    corporateOrder: "企业订餐",
    sendMessage: "发送消息",
    askConcierge: "咨询",
  },
  ko: {
    siteName: "Niimura",
    delivery: "포장",
    deliveryAlt: "배달",
    reservation: "예약",
    phoneReservation: "전화 예약", // Thêm dòng này
    menu: "메뉴",
    store: "매장",
    about: "브랜드 스토리",
    news: "소식",
    contact: "문의",
    home: "홈",
    viewMenu: "전체 메뉴 보기",
    bookingDelivery: "예약 및 배달",
    reserveOrOrder: "카운터 좌석을 예약하거나 집에서 정갈한 식사를 즐겨보세요.",
    chooseMenu: "메뉴 선택",
    corporateOrder: "단체 주문",
    sendMessage: "메시지 보내기",
    askConcierge: "문의하기",
  },
} satisfies Record<Locale, Record<string, string>>;