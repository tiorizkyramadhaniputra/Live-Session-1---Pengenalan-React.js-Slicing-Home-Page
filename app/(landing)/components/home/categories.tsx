import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  {
    name: "Running",
    imgUrl: "/categories/category-running.svg",
  },
  {
    name: "Tennis",
    imgUrl: "/categories/category-racket.svg",
  },
  {
    name: "Basketball",
    imgUrl: "/categories/category-basketball.svg",
  },
  {
    name: "Football",
    imgUrl: "/categories/category-football.svg",
  },
  {
    name: "Badminton",
    imgUrl: "/categories/category-badminton.svg",
  },
  {
    name: "Swimming",
    imgUrl: "/categories/category-swimming.svg",
  },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-12 mt-8">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
          >
            <div className="self-center text-center">
              <Image
                src={category.imgUrl}
                width={86}
                height={86}
                alt={category.name}
                className="mx-auto mb-[10px] object-contain"
              />
              <div className="font-medium text-xl" style={{ color: "#ff5f3f" }}>
  {category.name}
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
