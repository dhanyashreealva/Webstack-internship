import React, { useState } from 'react'
import {DatePicker,Space} from"antd";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/Home.css";

const Search = () => {
    const {RangePicker}=DatePicker
    const [keyword,setKeyword]=useState({
        city:"",
        guests:"",
        dateIn:"",
        dateOut:""
    });
    const [value,setValue]=useState([])

    function searchHandler(e){
        e.preventDefault();
        setKeyword({city:"",guests:"",dateIn:"",dateOut:""})
        setValue([])
    }
 function returnDates(date,dateString){
    setValue([date[0],date[1]]);
    updateKeyword("dateIn",dateString[0]);
    updateKeyword("dateOut",dateString[1]);
 }
 const updateKeyword=(field,value)=>{
    setKeyword((prevKeyword)=>({
        ...prevKeyword,
        [field]:value
    }));
 }

  return (
    <div className='searchbar'>
        <input  className='search'
         type="text"
          name="" 
          id="search_destination" 
          placeholder='Search destination'
          value={keyword.city}
        onChange={(e)=>updateKeyword("city",e.target.value)} />
      <Space direction='vertical' size={12} className='search'>
        <RangePicker value={value}
        format="DD-MM-YYYY"
        picker="date"
        className="date_picker"
        disabledDate={(current)=>{
            return current && current.isBefore(Date.now(),"day")
        }}
        onChange={returnDates}
        />
      </Space>
      <input  className='search'
         type="text"
          name="" 
          id="addguest" 
          placeholder='Add Guests'
          value={keyword.guests}
        onChange={(e)=>updateKeyword("guests",e.target.value)} />
        <span  className='material-symbols-outlined searchicon' onClick={searchHandler}>Search</span>
    </div>
  )
}

export default Search
