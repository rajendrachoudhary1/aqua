import Showercard from "../showercard/showercard"
import './shower.css'
import img from '../../../assets/shai.png';
import img1 from '../../../assets/shower/shower1.png';
import img2 from '../../../assets/shower/shower2.png';
import img3 from '../../../assets/shower/shower3.png';
import img4 from '../../../assets/shower/shower4.png';
import img5 from '../../../assets/shower/shower5.png';


const showerinfo=[
  {
    img: img,
    title: 'flt-shower',
    price: '444/-'
  },
  {
    img: img1,
    title: 'duck-shower',
    price: '544/-'
  },
  {
    img: img2,
    title: 'ideal-shower',
    price: '634/-'
  },
  {
    img: img3,
    title: 'canis-shower',
    price: '944/-'
  },
  {
    img: img4,
    title: 'Deil-shower',
    price: '840/-'
  },
  {
    img: img5,
    title: 'flt-shower',
    price: '444/-'
  },
]
const Shower = () => {
  return (
    <div className="shower-main-container">
      <div>
        <Showercard img={showerinfo[0].img} title={showerinfo[0].title} price={showerinfo[0].price}/>
        <Showercard img={showerinfo[1].img} title={showerinfo[1].title} price={showerinfo[1].price}/>
      </div>
      <div>
        <Showercard img={showerinfo[2].img} title={showerinfo[2].title} price={showerinfo[2].price}/>
        <Showercard img={showerinfo[3].img} title={showerinfo[3].title} price={showerinfo[3].price}/>
      </div>
      <div>
        <Showercard img={showerinfo[4].img} title={showerinfo[4].title} price={showerinfo[4].price}/>
        <Showercard img={showerinfo[5].img} title={showerinfo[5].title} price={showerinfo[5].price}/>
      </div>
    </div>
  )
}

export default Shower
