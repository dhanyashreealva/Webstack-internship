import React from 'react'

const PropertyListing = () => {
  return (
    <div className='property-container'>
        <p className='property-header'>Beautiful Villa in Goa</p>
        <h6 className='=property-loaction'>
            <span className='material-symbols-outlined'>House</span>
            <span className='location'> ecr, chennai, tamilnadu</span>
        </h6>
        <PropertyImg images={["/assets/property2.webp"]}/>
        <div className='middle-container row'>
            <div className='des-and-amenties col-md-8 col-sm-12 col-12'>
                <h2 className='property-description-header'>Description</h2>
                <p className='property-description'> This is a simple description of a luxury villa
            <br/><br/>Max number of guests:6
            </p>
            </div>
        </div>
    </div>
  )
}

export default PropertyListing
