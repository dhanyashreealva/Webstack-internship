import React from 'react'

const PropertyImg = () => {
    const [isModalOpen,setIsModalOpen]=useState(false);

    const handleShowAllPhotos=()=>{
        setIsModalOpen(true)
    }
    const handleCloseModal=()=>{
        setIsModalOpen(false)
    }
  return (

   <>
   <div className='property-ima-container'>
    <div className='img-item'>
        <img src={images[0].url}  className='images' style={{borderTopLeftRadius alt="" /></div></div></>
  )
}

export default PropertyImg
