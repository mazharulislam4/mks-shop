import Breadcrumb from "../widgets/breadcrumb";

function ShopHero() {
  return (
    <div className="w-[inherit] min-h-[inherit] bg-primary text-center flex flex-col justify-center items-center gap-[1.5rem]">
      <div>
        <Breadcrumb />
      </div>

      <h1 className="text-large">Shop Page</h1>

      <p>Let’s design the place you always imagined.</p>
    </div>
  );
}

export default ShopHero;
