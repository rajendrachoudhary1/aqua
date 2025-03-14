import Showercard from "../showercard/showercard";
import './shower.css';
import { products } from '../../../assets/assets';

const Shower = () => {
  const showerProducts = products.filter(product => product.category === 'shower');

  return (
    <div className="shower-main-container">
      {showerProducts.map((product, index) => (
        <Showercard key={index} image={product.image} name={product.name} />
      ))}
    </div>
  );
}

export default Shower;
