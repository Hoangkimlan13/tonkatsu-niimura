import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import MenuPreview from "@/components/home/MenuPreview";
import StoreStrip from "@/components/home/StoreStrip";
import NewsList from "@/components/home/NewsList";
import ReservationPanel from "@/components/home/ReservationPanel";
import SitemapSection from "@/components/home/SitemapSection";
import { extendedSitemap, menuPreviewItems, news, stores } from "./data";

export default function Home() {
  const currentLocale = "ja"; // Ngôn ngữ mặc định cho trang chủ root

  return (
    <main>
      {/* 1. Slider cinematic */}
      <Hero />

      {/* 2. Giới thiệu triết lý nhà hàng */}
      <BrandStory />

      {/* 3. Thực đơn tinh hoa */}
      <MenuPreview data={menuPreviewItems} locale={currentLocale} />

      {/* 4. Hệ thống cửa hàng - THÊM locale 
      <StoreStrip data={stores} locale={currentLocale} />

       5. Tin tức cập nhật - THÊM locale 
      <NewsList data={news} locale={currentLocale} />

       6. Nút Đặt bàn & Gọi món 
      <ReservationPanel />

       7. Bản đồ cấu trúc website - THÊM locale 
      <SitemapSection data={extendedSitemap} locale={currentLocale} /> */}
    </main>
  );
}