import img from '../../../assets/shai.png';
import './showercard.css';

const Showercard = () => {
  return (
    <div className='showercard-container'>
      <div className='showercard-img'>
        <img src={img} alt="Shower" />
      </div>
      <div className='showercard-content'>
        <h2 className='shower-title'>Shower</h2>
        <p className='shower-description'>Flat shower for master</p>
        <p className='shower-description'>Flat shower for master</p> 
        <p className='shower-price'>Price: <span>599/-</span></p>
      </div>
    </div>
  );
};

export default Showercard;