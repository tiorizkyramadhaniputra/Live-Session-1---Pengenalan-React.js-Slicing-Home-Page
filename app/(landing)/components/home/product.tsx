import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const productList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "football-shoes (1) 1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "racket.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "shoes 2.png",
  },
  {
    name: "SportsOn Hypersoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "shoes 3.png",
  },
  {
    name: "SportsOn Hypersoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "shoes 3.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "sportshirt 1.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "sportshirt 2.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "racket.png",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-32">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-[#FF5F3F]">OUR </span>PRODUCTS
      </h2>

      <div className="grid grid-cols-4 gap-7">
        {productList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="bg-[#FDECEA] p-3 rounded-md hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-square w-full bg-[#FDECEA] flex justify-center items-center relative rounded-md">
              <Image
                src={`/products/${product.imgUrl}`}
                alt={product.name}
                width={280}
                height={280}
                className="aspect-square object-contain"
              />

              <Button
                className="w-10 h-10 p-2! absolute right-3 top-3 rounded-md bg-[#FF5F3F] text-white"
                size="normal"
              >
                <FiPlus size={24} />
              </Button>
            </div>

            <h3 className="font-semibold text-[18px] mt-4 mb-1">
              {product.name}
            </h3>

            <div className="flex justify-between items-center mb-2">
              <div className="text-[#FF5F3F] font-medium text-[14px]">
                {product.category}
              </div>

              <div className="font-bold text-[#FF5F3F] text-[15px]">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumSignificantDigits: 3,
                }).format(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
