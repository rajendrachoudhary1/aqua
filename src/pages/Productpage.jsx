import { useParams } from "react-router-dom";
import Productdisplay from "../component/productsection/productdisplay/productdisplay";
import ProductTitle from "../component/productsection/productTitle/productTitle";

const ProductPage = () => {
  const { category } = useParams();  

  return (
    <div>
      <ProductTitle />
      <Productdisplay category={category} />
    </div>
  );
};

export default ProductPage;
