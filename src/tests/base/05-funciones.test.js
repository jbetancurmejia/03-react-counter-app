import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones.js", () => {
  test("getUser debe de retornar un objeto ", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);

    console.log(user);
  });

  test("getUsuarioActivo debe retornar un objeto ", () => {
    const nombre = "camilo";
    const userActiveTest = {
      uid: "ABC567",
      username: nombre,
    };

    const userActive = getUsuarioActivo(nombre);

    expect(userActive).toEqual(userActiveTest);
  });
});
