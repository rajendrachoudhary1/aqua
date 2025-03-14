import './showercard.css';

 
const Showercard = (props) => {
  return (
    <div className='showercard-container'>
      <div className='showercard-img'>
        <img src={props.image} alt="Shower" />
      </div>
      <div className='underline-showercard'></div>
      <div className='showercard-content'>
        <h2 className='shower-title'>{props.name}</h2>
        <p className='shower-description'>{props.model}</p> 
        <p className='shower-price'></p>
      </div>
    </div>
  );
};

export default Showercard;