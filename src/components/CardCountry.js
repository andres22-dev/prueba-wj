import React, {useState} from 'react'
import axios from 'axios';

export const CardCountry = ({ nombre = 'Colombia' }) => {

  const [dataC, setDataC] = useState([]);
  const getDataPais = async () => {
      try {
        const country = await axios.get(`https://restcountries.eu/rest/v2/name/aruba?fullText=true`);


        
      }catch{
        console.log('error');
      }
  
  }
  return (
    <div className="">
      <h2></h2>
      <img src="" />

    </div>
  )
}


export default CardCountry;