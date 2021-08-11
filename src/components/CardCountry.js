import React from 'react';
import Card from '@material-ui/core/Card';

export const CardCountry = ({alpha3Code, subregion, population, demonym}) => {
  return (
    <Card>
      <h2>{alpha3Code}</h2>
      <p>{subregion}</p>
      <p>{population}</p>
      <p>{demonym}</p>
    </Card>
  )
}


export default CardCountry;