import Showercard from "../showercard/showercard"
import './shower.css'
import {products} from '../../../assets/assets'


 
const Shower = () => {
  return (
    <div className="shower-main-container">
      <div>
        <Showercard  image={products[0].image} name={products[0].name}  />
        <Showercard  image={products[1].image} name={products[1].name}  />
      </div>
      <div>
        <Showercard  image={products[2].image} name={products[2].name}  />
        <Showercard  image={products[3].image} name={products[3].name}  />
      </div>
      <div>
        <Showercard  image={products[4].image} name={products[4].name}  />
        <Showercard  image={products[5].image} name={products[5].name}  />
      </div>
    </div>
  )
}

export default Shower
