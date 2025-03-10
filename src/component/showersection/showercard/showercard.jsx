import './showercard.css';

 
const Showercard = (props) => {
  return (
    <div className='showercard-container'>
      <div className='showercard-img'>
        <img src={props.img} alt="Shower" />
      </div>
      <div className='showercard-content'>
        <h2 className='shower-title'>{props.title}</h2>
        <p className='shower-description'>Flat shower for master</p> 
        <p className='shower-price'>Price: <span>{props.price}</span></p>
      </div>
    </div>
  );
};

export default Showercard;