import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string"

describe('pruebas en 02-template-string.js',() =>{

    test('getSaludo debe de retornar hola camilo! ', () => {
         
        
        const nombre='Camilo';

        const saludo= getSaludo(nombre);

        expect(saludo).toBe('Hola '+nombre +'!');
    })
    

    test('getSaludo debe de retornar hola carlos! si no hay argumento nombre ', () => {
         
        
        const nombre='Carlos';

        const saludo= getSaludo();

        expect(saludo).toBe('Hola '+nombre +'!');
    })

})