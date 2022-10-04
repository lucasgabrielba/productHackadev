import Product from "./components/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer /Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://my-simple-ecommerce-api.herokuapp.com/products/cropped-1/s?size=M"
      )
      .then((response) => {
        setProduct(response.data[0]);
        console.log(response.data[0]);
        setColors(response.data.map((prod) => prod.color));
        console.log(colors);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Product
        product={product.product}
        price={product.price}
        category={product.category}
        colors={colors}
        slug={product.slug}
        description={product.description}
        image={product.image}
      />
      <Footer />
    </>
  );
}

export default App;
