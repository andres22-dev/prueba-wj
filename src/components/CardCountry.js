import React from 'react';
import Card from '@material-ui/core/Card';

export const CardCountry = ({domain, population, demonym, subregion}) => {
  return (
    <Card>
      <h2>{domain}</h2>
      <p>{population}</p>
      <p>{demonym}</p>
      <p>{subregion}</p>
    </Card>
  )
}


export default CardCountry;