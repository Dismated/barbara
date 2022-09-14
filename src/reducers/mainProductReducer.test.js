import mainProductReducer from "./mainProductReducer";
import deepFreeze from "deep-freeze";

describe("mainProductReducer", () => {
  test("return new state with action mainProducts/initializeMainProduct", () => {
    const state = [];
    const action = {
      type: "mainProducts/setMainProduct",
      payload: {
        title: "lol",
        image: "lol",
        quantity: 1,
        price: "lol",
      },
    };

    deepFreeze(state);
    const newState = mainProductReducer(state, action);

    expect(newState).toEqual(action.payload);
  });
});
