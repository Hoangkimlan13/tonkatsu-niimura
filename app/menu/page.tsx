import PageHero from "@/components/PageHero";
import { menuSections } from "@/app/data";

export default function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="MENU"
        title="Menu"
        copy="Premium tonkatsu, seasonal ramen, refined side dishes, and drinks selected for crisp fried pork."
      />

      <section className="section menu-page-grid">
        {menuSections.map((section) => (
          <article className="menu-section" id={section.id} key={section.title}>
            <div className="menu-section-heading">
              <p className="eyebrow">{section.title}</p>
              <h2>{section.title}</h2>
            </div>
            {section.items.map((item) => (
              <div className="menu-row" key={item.name}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.jp}</p>
                  <small>{item.note}</small>
                </div>
                <strong>{item.price}</strong>
              </div>
            ))}
          </article>
        ))}
      </section>
    </main>
  );
}
