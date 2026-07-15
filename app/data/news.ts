import type { Locale } from "../i18n";

type LocalizedText = Record<Locale, string>;

export type NewsItem = {
  date: string;
  slug: string; // Thêm slug để điều hướng chi tiết tin tức
  title: LocalizedText;
  category: LocalizedText;
};

export const news: NewsItem[] = [
  {
    date: "2026.07.15",
    slug: "obon-holiday-announcement-2026",
    title: {
      ja: "【重要】お盆期間中の営業スケジュールおよび臨時休業日のお知らせ",
      en: "【Notice】Obon Holiday Operating Hours & Scheduled Closures",
      vi: "【Thông báo】Lịch hoạt động và ngày nghỉ lễ Obon năm 2026",
      zh: "【重要通知】盂兰盆节期间营业时间及临时休业公告",
      ko: "【중요】오본 연휴 기간 영업 일정 및 임시 휴무 안내",
    },
    category: {
      ja: "重要なお知らせ",
      en: "Notice",
      vi: "Thông báo",
      zh: "公告",
      ko: "공지사항",
    },
  },
  {
    date: "2026.07.01",
    slug: "premium-kagoshima-kurobuta-fair",
    title: {
      ja: "極上の味わい：鹿児島県産「黒豚」特別とんかつフェア開催のお知らせ",
      en: "Savor the Finest: Limited-Time Kagoshima Kurobuta Pork Fair",
      vi: "Trải nghiệm vị giác thượng hạng: Lễ hội Tonkatsu heo đen Kagoshima Kurobuta",
      zh: "极致美味：鹿儿岛县产“黑猪”特制炸猪排美食节盛大开幕",
      ko: "최고의 명품 돈카츠: 가고시마현산 '쿠로부타(흑돼지)' 특별 페어 개최",
    },
    category: {
      ja: "キャンペーン",
      en: "Event",
      vi: "Sự kiện",
      zh: "限时活动",
      ko: "이벤트",
    },
  },
  {
    date: "2026.06.25",
    slug: "new-private-rooms-reservation-open",
    title: {
      ja: "新宿本店：ご家族や会食に最適な「贅沢個室」のご予約受付を開始いたしました",
      en: "Shinjuku Main Store: Luxury Private Dining Rooms Now Open for Booking",
      vi: "Trụ sở Shinjuku: Chính thức mở đặt trước hệ thống phòng VIP riêng tư sang trọng",
      zh: "新宿总店：专为阖家欢聚与商务宴请打造的“豪华包厢”现已开放预订",
      ko: "신주쿠 본점: 가족 모임 및 비즈니스에 최적화된 '프라이빗 룸' 예약 오픈",
    },
    category: {
      ja: "店舗情報",
      en: "Store Info",
      vi: "Cửa hàng",
      zh: "门店动态",
      ko: "매장 안내",
    },
  },
];