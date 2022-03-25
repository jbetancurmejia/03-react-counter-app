import { getHeroeById,getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones heores", () => {
  test("debe retornar un heroe por Id ", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroedata = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroedata);
  });

  test("debe retornar undefined si el heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });


  test("debe retornar los  heroes por owner DC ", () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    const heroedata = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroedata);
  });

  test("debe retornar la  heroes por owner ", () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    console.log(heroes.length);
    expect(heroes.length).toBe(2);
  });

});
