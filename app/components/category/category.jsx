import Image from "next/image";
import golf from "../../assets/category/golf.png";

const categories = [
  {
    id: 1,
    name: "golf",
    image: golf,
  },
  {
    id: 2,
    name: "Accessories",
    image: golf,
  },
  ,
  {
    id: 3,
    name: "Golf Balls",
    image: golf,
  },
  ,
  {
    id: 4,
    name: "Golf Bags",
    image: golf,
  },
  {
    id: 5,
    name: "Clothing & Rainwear",
    image: golf,
  },
  {
    id: 6,
    name: "Footwear",
    image: golf,
  },
];

const CategoryCard = () => {
  return categories.map((category) => (
    <div key={category.id} className=" w-full h-auto  ">
      <div className="bg-primary flex flex-col justify-center items-center w-full h-auto relative">
        <Image
          src={category.image}
          alt={category.name}
          className="object-fit w-full h-auto"
        />
      </div>

      <h3 className="mt-[24px] text-center font-medium">{category.name}</h3>
    </div>
  ));
};

function Category() {
  return (
    <div className="grid  xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10   md:gap-16">
      <CategoryCard />
    </div>
  );
}

export default Category;
