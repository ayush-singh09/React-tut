import ProductCard from "../components/ProductCard";

function Products() {
  const data = [
    {
      name: "Pencil",
      des: "Good for long writing.",
      imageUrl:
        "https://www.kokuyocamlin.com/camel/gallery/contest/surrealism-van-goghs-style/9.jpg",
      inStock: true,
    },
    {
      name: "Eraser",
      des: "Good for erasing pencil marks.",
      imageUrl:
        "https://www.collinsdictionary.com/images/full/eraser_135124940.jpg",
      inStock: false,
    },
    {
      name: "Note Book",
      des: "Good to write on.",
      imageUrl:
        "https://m.media-amazon.com/images/I/81sZo+jzQuL._AC_UF1000,1000_QL80_.jpg",
      inStock: true,
    },
  ];

  return (
    <div className="h-screen w-full bg-zinc-800 flex flex-wrap justify-center items-center gap-10 p-10">
      {data.map((item, index) => {
        return (
          <ProductCard
            key={index}
            name={item.name}
            des={item.des}
            imageUrl={item.imageUrl}
            inStock={item.inStock}
          />
        );
      })}
    </div>
  );
}

export default Products;
