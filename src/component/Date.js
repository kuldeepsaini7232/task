import React,{useState,useEffect} from 'react'
import moment from 'moment';
import './date.css';


const Date=()=>{
  const [date,setDate]=useState([]);
  useEffect(()=>{
    const today=parseInt(moment().format("Do")); 
    const lastDate=today-8;
    const dateArray=[];
    for(var i=today;i>lastDate;i--)
    {
      dateArray.push(i);
    }
   setDate(dateArray);
  },[]);
  return(
    <div>
      {date.map((ele)=>{
        return(<p key={ele}>{ele}</p>)
      })}
    </div>
  )
}

export default Date;