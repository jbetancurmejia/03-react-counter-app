import { getImagen } from "../../base/11-async-await"

describe('Pruebas con async-await y Fethc', () => {
    
 test('debe retornar la Url de la imagen', async () => {
     
      const  url= await getImagen();
      expect( url.includes('https://') ).toBe(true);
 })

})
