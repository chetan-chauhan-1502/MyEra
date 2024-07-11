import React,{useState} from 'react'



const DayPick = (openModal) => {
    const [showModal,  setShowModal] = useState(openModal)
    
  return (
    
    <div>
    {showModal ? (
        <>
          
        </>
      ) : null}
    </div>
  )
}

export default DayPick
