
import reactDom from "react-dom";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css' 




const divRoot = document.querySelector('#app');

// reactDom.render(<PrimeraApp saludo="Hola ,Soy Goku" subtitulo="hola" />, divRoot);
reactDom.render(<CounterApp   />, divRoot);
