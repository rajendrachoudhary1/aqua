import './assocesrios.css'
import Tapcard from '../../productsection/tapcard/Tapcard'
const Assocesrios = () => {
  return (
    <>
     <div className='assocesrios-container-first'>
        {/* <div className='assocesrios-inner-container'></div> */}
        <div className='assocesrios-inner-container'>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
     </div>
     </div>
   
      <div className='assocesrios-container-second'> 
      <div className='assocesrios-inner-container'>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
          <Tapcard/>
     </div>
        
      </div> 
    </>
    
  )
}

export default Assocesrios
