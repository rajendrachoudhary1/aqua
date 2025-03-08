import React, { useState } from 'react'
import './aquafaq.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const Aquafaq = () => {
    
    const [ans,setans] = useState(false)
    const [ans1,setans1] = useState(false)
    const [ans2,setans2] = useState(false)
    // const ansvisible= ( ) =>{
    //     setans(prev=>!prev);
    // }

  return (
    <div className='aquaContainer'>
        <div className='faq'>
            <h1>Frequently asked Questions</h1>
            <div className="question">
                <p onClick={()=>setans(prev=>!prev)} className='ques'>Is Foundersclub free to use? <span  className={ans ? "rotate-icon" : ""}><FontAwesomeIcon icon={faChevronRight} /></span></p>
              {ans?<p className='ans'>Yes, Foundersclub offers free access to its features, including creating profiles, joining clubs, and participating in discussions.</p> : null}   
            </div>
            <div className="underline-faq"></div>
            <div className="question">
                <p className='ques' onClick={()=>setans1(prev=>!prev)} >Who can join Foundersclub?<span className={ans1 ? "rotate-icon" : ""}><FontAwesomeIcon icon={faChevronRight} /></span></p>
             {ans1?<p className='ans'>Yes, Foundersclub offers free access to its features, including creating profiles, joining clubs, and participating in discussions.</p> :null}    
            </div>
            <div className="underline-faq"></div>
            <div className="question">
                <p className='ques' onClick={()=>setans2(prev=>!prev)} >Can I post job openings for my startup? <span className={ans2 ? "rotate-icon" : ""}><FontAwesomeIcon icon={faChevronRight} /></span></p>
                {ans2?<p className='ans'>Yes, Foundersclub offers free access to its features, including creating profiles, joining clubs, and participating in discussions.</p> :null}
            </div>

        </div>
      
    </div>
  )
}

export default Aquafaq
