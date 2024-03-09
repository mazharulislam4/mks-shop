import juniorSet from "@/assets/collection/junior set.png";
import mensSet from "@/assets/collection/mens set.png";
import FeatureProduct from "@/components/banner/featureProduct";
import BlogCard from "@/components/card/blogCard";
import CollectionCard from "@/components/card/collectionCard";
import Category from "@/components/category/category";
import Hero from "@/components/hero/hero";
import Offer from "@/components/offer/offer";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <main className="py-4">
        {/* feature products  */}

        <section className="pt-6">
          <div className="container">
            <h2 className="my-8 font-bold ">Featured</h2>
            <FeatureProduct />
          </div>
        </section>

        {/* category  */}

        <section className="pt-6">
          <div className="container">
            <h2 className="my-8 text-center font-bold ">Shop by Categories</h2>
            <Category />
          </div>
        </section>

        {/* offer  */}

        <section className="my-16">
          <Offer />
        </section>
        {/* collection  */}
        <section className="mb-16">
          <div className="container">
            <h2 className="my-8  font-bold ">Shop Collection</h2>
            <div className="grid md:grid-cols-[60%_40%] gap-5 h-fit">
              <div className="h-full w-full">
                <CollectionCard.VerticalCard
                  data={{ title: "Junior's Set", image: juniorSet }}
                />
              </div>
              <div className="grid gap-5">
                <CollectionCard.HorizontalCard
                  data={{ title: "Mens's Set", image: mensSet }}
                />
                <CollectionCard.HorizontalCard
                  data={{ title: "Women's Set", image: mensSet }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* blog section  */}

        <section className="mb-16">
          <div className="container">
            <div className="flex justify-between items-center">
              <h2 className="my-8  font-bold ">Latest Articles</h2>
              <Link href={"#"} className="flex items-center gap-2">
                <span>View More</span>
                <span>
                  <IoIosArrowRoundForward />
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))]  gap-8">
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
