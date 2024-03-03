import Link from 'next/link';


function Items() {
  return (
    <div className="w-full ">
      {/* catagories */}

      <div className="mb-8">
        <h5 className="uppercase font-sans font-medium mb-3">CATEGORIES</h5>
        <ul className="max-h-[400px] overflow-y-auto overflow-x-hidden ">
          {[
            "Golf",
            "Golf Bags",
            "Footwear",
            "Clothing & Rainwear",
            `Accessories`,
          ].map((value, index) => (
            <li key={index}>
              <Link href={`/shop/${value}`}>{value}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* price list  */}

      <div>
        <h4 className="uppercase font-sans font-medium mb-3">Price</h4>
        <ul>
          <li className="flex justify-between items-center">
            <label htmlFor="all_price">All Price</label>
            <input type="checkbox" id="all_price" />
          </li>

          {[
            { label: "$0.00 - 99.99", value: "0.00 - 99.99" },
            { label: "$100.00 - 199.99", value: "100.00 - 199.99" },
            { label: "$200.00 - 299.99", value: "200.00 - 299.99" },
            { label: "$300.00 - 399.99", value: "300.00 - 399.99" },
          ].map((value, index) => (
            <li key={index} className="flex justify-between items-center">
              <label htmlFor="all_price">{value.label}</label>
              <input type="checkbox" id="all_price" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Items