import "./App.css";
import ClassBasedComponent from "./Components/classComponent";
import Function_based_component from "./Components/Function_based_component";
import ProductList from "./Components/product";

const dummmyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {
  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      {/* <ClassBasedComponent /> */}
      {/* <Function_based_component /> */}
      <ProductList
        name="mohit"
        city="noida"
        dummmyProductData={dummmyProductData}
      />
      {/* name="mohit" -> this is a prop and this way is passed*/}
    </div>
  );
}

export default App;
