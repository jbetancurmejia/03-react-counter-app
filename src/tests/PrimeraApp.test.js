import * as React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp/>", () => {
  // test('debe mostrar el mensaje "hola, Soy Goku" ', () => {

  //     const saludo="Hola ,Soy Goku";

  //     const { getByText} = render(<PrimeraApp saludo={saludo} />);
  //     expect( getByText(saludo)).toBeInTheDocument();

  // })

  test("debe de mostrar <PrimeraApp/> correctamente ", () => {
    const saludo = "Hola ,Soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect( wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    
    const saludo = "Hola ,Soy Goku";
    const subTitulo = "I'm a subtitle";
    
    const wrapper = shallow(<PrimeraApp 
      saludo={saludo} 
      subtitulo={ subTitulo}
      />);

      const textoParrafo= wrapper.find('p').text();
      console.log(textoParrafo);

      expect( textoParrafo ).toBe( subTitulo);

  });
  
});
