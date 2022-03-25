import react from 'react';
import PropTypes from 'prop-types';
//FUNCTIONAL COMPONENT

const PrimeraApp = ( {saludo,subtitulo}) => {

    
    const json={
        nombre:'camilo',
        edad:32
    }

    console.log(saludo)

    return( 
    <>
    <h1> { saludo}</h1>
    {/* <pre>{JSON.stringify(json,null,3)}</pre> */}
    <p>{subtitulo}</p>
    </>)
}


PrimeraApp.propTypes ={
    saludo :PropTypes.string.isRequired,
    subtitulo :PropTypes.string
}
PrimeraApp.defaultProps ={
    subtitulo:'soy un subtitulo'
}

export default PrimeraApp;