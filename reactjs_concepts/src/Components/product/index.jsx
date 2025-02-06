import ProductItem from "./components/product-item";

// const dummmyProductData = ["Product 1", "Product 2", "Product 3"];

function ProductList({ name, city, dummmyProductData }) {
  //   console.log(props);
  //   const { name, city } = props;
  return (
    <div>
      <h1>E-Commerce Project</h1>
      {/* <ProductItem /> */}
      {/* props is a dynamic value so this under {} bracket */}
      <h3>
        Name is {name},he/she is belong to{city}
      </h3>
      <ul>
        {dummmyProductData.map((item, index) => (
          <ProductItem
            singleProductItem={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
