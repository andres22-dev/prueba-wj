import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import Card from '@material-ui/core/Card';




const MainPage = () => {

const urlBase = `https://restcountries.eu/rest/v2/`;
const maximun = 1;
const minimun = 372;
const minimunTwo = 250;
const random = () => Math.floor(Math.random()*(maximun - minimun)+ minimun);
const randomTwo = () => Math.floor(Math.random()*(maximun - minimunTwo)+ minimunTwo);

  const [paisRandom, setPaisRandom] = useState('57');
  const [flagC, setFlagC] = useState('https://restcountries.eu/data/col.svg');
  const [inputValue, setinputValue] = useState('Colombia');
  const [dataCountry, setDataCountry] = useState(['nombrePais', flagC, 'capital', 'region']);
  const [item, setItem] = useState([]);
  
  const getRandomPais = async () => {

    try {
      const petitionByCode = await axios.get(`${urlBase}callingcode/${paisRandom}`);
      setFlagC(petitionByCode.data.[0].flag);
    }catch{
      setFlagC('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Uno_unpalogo.svg/1200px-Uno_unpalogo.svg.png');
    }
    
  }

  const getDataPais = async () => {

    try{

      const response = await axios.get(`${urlBase}name/${inputValue}?fullText=true`);
      const {name, flag, capital, region} = await response.data.[0];
      setDataCountry([name, flag, capital, region]);

    }catch{
      alert(`No se ha encontrado ningun resultado de ${inputValue}, por favor vuelva a intentarlo !`);
    }
  }

  const getEasyData = () => {
    const countries = [];
    const peticion = axios.get(`${urlBase}all`)
          peticion
            .then(( response ) => { countries.push(response.data[randomTwo()], response.data[randomTwo()], response.data[randomTwo()], response.data[randomTwo()], response.data[randomTwo()])})
            .catch((error) => { console.log(error)})
    setItem(countries);
  }
  const handleClickRandom = () => {
    setPaisRandom(random().toString())
    getRandomPais();
    getEasyData();
  }

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getDataPais();
    

  }
  return (
    <>
      <div className="layoutcontainer">
        <header className="layoutcontainer__header">
          <h1 className="header__title">Whale Jaguar</h1>
          <div className="header__random">
            <Button variant="contained" onClick={handleClickRandom}>Pais Aleatorio</Button>
            <div className="random__container"><img src={flagC}/></div>
          </div>
        </header>

        <section className="layoutcontainer__main">
          <div className="main__search">
            <h2>Buscar Por Nombre de pais</h2>
            <form  onSubmit={ handleSubmit }>
              <TextField 
                id="filled-basic" 
                label="Filled" 
                variant="filled" 
                type="text"
                value={ inputValue }
                onChange={handleInputChange}
              />
              <div className="main__container">
                <Card className="search__card">
                  <h3 className="search__card--h3">{dataCountry[0]}</h3>
                  <img src={dataCountry[1]} />
                  <p>{dataCountry[2]}</p>
                  <p>{dataCountry[3]}</p>
                </Card>
              </div>
            </form>
          </div>
          <div className="main__data">
            <h2> Representando datos de forma simple</h2>
            <ul>
              {
                item.map((count) => { 
                  return (<li key={count}>{count}</li>)
                })
              }
            </ul>
          </div>
        </section>
        
        <footer>
          <p>@andres22_dev</p>
        </footer>
      </div>
    </>
  )
}


export default MainPage;