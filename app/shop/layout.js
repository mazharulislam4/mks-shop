import ShopAside from "../components/aside/shopAside";
import FilterDrawer from "../components/drawer/filterDrawer";
import ShopHero from "../components/hero/shopHero";

export const metadata = {
  title: "MKS SHOP > Shop page",
};

export default function ShopLayout({ children }) {
  return (
    <>
      <section className="container">
        <div className="min-h-[var(--shop-hero-width)]">
          <ShopHero />
        </div>
      </section>

      <div className="container py-[60px]  ">
        <div className="flex  gap-[24px]">
          <ShopAside />

          <main className=" w-full h-full relative ">{children}</main>
        </div>
      </div>

      <FilterDrawer />
    </>
  );
}
