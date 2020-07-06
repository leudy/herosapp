const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/authTypes");
const state = {
  name: "leudi",
};

describe("Probando el AutReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const result = authReducer(state, {});
    expect(result).toEqual({ name: "leudi" });
  });
  test("debe de autenticar y colocar el name del usuario y devolver el valor de logeado en true", () => {
    const action = {
      type: types.LOGIN,
      payload: {
        name: "Leo",
      },
    };
    const result = authReducer({ logged: false }, action);
    expect(result).toEqual({ name: "Leo", logged: true });
  });
  test("debe de borrar la cuenta de usuario", () => {
    const action = { type: types.LOGOUT };
    const reducer = authReducer(state, action);
    expect(reducer).toEqual({ logged: false });
  });
});
