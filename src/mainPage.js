import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import axios from 'axios';


const MainPage = () => {

const maximun = 1;
const minimun = 372;
const random = () => Math.floor(Math.random()*(maximun - minimun)+ minimun);

  const [paisRandom, setPaisRandom] = useState('57');
  const [flag, setFlag] = useState('https://restcountries.eu/data/col.svg');
  const [inputValue, setinputValue] = useState('Colombia');


  const getRandomPais = async () => {

    try {
      const paisCode = await axios.get(`https://restcountries.eu/rest/v2/callingcode/${paisRandom}`);
      setFlag(paisCode.data.[0].flag);
    }catch{
      setFlag('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Uno_unpalogo.svg/1200px-Uno_unpalogo.svg.png');
    }
    
  }

  const handleClickRandom = () => {
    setPaisRandom(random().toString())
    getRandomPais()
  }

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit realizadp');

  }
  return (
    <>
      <div className="layoutcontainer">
        <header className="layoutcontainer__header">
          <h1 className="header__title">Whale Jaguar</h1>
          <div className="header__random">
            <Button variant="contained" onClick={handleClickRandom}>Pais Aleatorio</Button>
            <div class="random__container"><img src={flag}/></div>
          </div>
        </header>

        <section className="layoutcontainer__main">
          <div className="main__search">
            <h2>Buscar Por Nombre de pais</h2>
            <form>
              <TextField 
                id="filled-basic" 
                label="Filled" 
                variant="filled" 
                type="text"
                value={ inputValue }
                onChange={handleInputChange}
              />
              
            </form>

          </div>
          <div className="main__data">
            <h2> Representando datos de forma simple</h2>
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