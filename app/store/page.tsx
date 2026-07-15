import Link from "next/link";
import PageHero from "@/components/PageHero";
import { stores } from "@/app/data";

export default function StorePage() {
  return (
    <main>
      <PageHero
        eyebrow="STORE"
        title="Store"
        copy="Find にいむら in major Japanese dining districts, each with its own room mood and service rhythm."
      />

      <section className="section card-grid three">
        {stores.map((store) => (
          <article className="store-card large" key={store.city}>
            <span>{store.city}</span>
            <h2>{store.name}</h2>
            <p>{store.address}</p>
            <p>{store.hours}</p>
            <small>{store.feature}</small>
            <div className="card-actions">
              <Link className="button button-primary compact" href="/reservation">
                予約
              </Link>
              <Link className="button button-ghost compact" href="/delivery">
                Pickup
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
