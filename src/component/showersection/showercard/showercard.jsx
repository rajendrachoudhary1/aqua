import shower_img1 from '../../../assets/shower/shower6.png'
import './showercard.css'
const Showercard = () => {
  return (
    <div className='showerContainer'>
        <div className='showerimg'>
            <img src={shower_img1} alt="" />
        </div>
        <div className='showerinfo'>
           <h1>shower</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quae.</p>
           <p>price 444/-</p>
        </div>
      
    </div>
  )
}

export default Showercard
