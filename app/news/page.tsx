import PageHero from "@/components/PageHero";
import { news } from "@/app/data";

export default function NewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="NEWS"
        title="News"
        copy="Seasonal dishes, new store information, delivery updates, and hospitality notes from にいむら."
      />

      <section className="section news-list expanded">
        {news.map((item) => (
          <article key={item.title}>
            <span>{item.date}</span>
            <strong>{item.title}</strong>
            <small>{item.category}</small>
          </article>
        ))}
      </section>
    </main>
  );
}
