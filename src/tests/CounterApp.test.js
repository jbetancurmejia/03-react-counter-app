import * as React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import "@testing-library/jest-dom";

describe('Pruebas <CounterApp/>', () => {
    
    
    let wrapper = shallow(<CounterApp />);

    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    });

    
    test('debe de mostar <CounterApp/> correctamente', () => {       

        expect(wrapper).toMatchSnapshot();
      
    });
    

    test('debe de mostar el valor por defecto de 100', () => {


        
        const value=100;
        const wrapper = shallow(<CounterApp value={value}/>);
      
        const elementoHtmlCounter= wrapper.find('h2').html();
        console.log(elementoHtmlCounter);

        expect( elementoHtmlCounter ).toBe('<h2>100</h2>');
      
    });

    test('debe de incrementar con el boton +1', () => {

      wrapper.find('button').at(2).simulate('click');
      const elementoHtmlCounter= wrapper.find('h2').text().trim();
      expect(elementoHtmlCounter).toBe('11')
      
      
    });

    test('debe de decrementar con el boton -1', () => {

        wrapper.find('button').at(0).simulate('click');
        const elementoHtmlCounter= wrapper.find('h2').text().trim();
        expect(elementoHtmlCounter).toBe('9')
        
        
      });

      test('debe de decrementar con el boton reset', () => {

        wrapper.find('button').at(1).simulate('click');
        const elementoHtmlCounter= wrapper.find('h2').text().trim();
        expect(elementoHtmlCounter).toBe('10')
        
        
      });
    
    

});
