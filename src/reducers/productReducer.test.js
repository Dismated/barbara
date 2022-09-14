import productReducer from "./productReducer";
import deepFreeze from "deep-freeze";

describe("productReducer", () => {
  const baseState = [
    { title: "lol", image: "lol", quantity: 1, price: "lol", id: 2 },
    { title: "lol", image: "lol", quantity: 1, price: "lol", id: 1 },
  ];
  test("returns new state with action products/createProduct", () => {
    const state = [];
    const action = {
      type: "products/createProduct",
      payload: {
        title: "lol",
        image: "lol",
        quantity: 1,
        price: "lol",
      },
    };

    deepFreeze(state);
    const newState = productReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState.map((e) => e.content)).toContainEqual(action.payload);
  });

  test("substracts 1 from initial number", () => {
    const action = { type: "products/decrement", payload: { id: 2, num: -1 } };

    deepFreeze(baseState);
    const newState = productReducer(baseState, action);

    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(baseState[1]);
    expect(newState).toContainEqual({
      title: "lol",
      image: "lol",
      quantity: 0,
      price: "lol",
      id: 2,
    });
  });

  test("adds 1 to initial number", () => {
    const action = { type: "products/increment", payload: { id: 2, num: 1 } };

    deepFreeze(baseState);
    const newState = productReducer(baseState, action);

    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(baseState[1]);
    expect(newState).toContainEqual({
      title: "lol",
      image: "lol",
      quantity: 2,
      price: "lol",
      id: 2,
    });
  });

  test("changes the number to defined value", () => {
    const action = { type: "products/custom", payload: { id: 2, num: 4 } };

    deepFreeze(baseState);
    const newState = productReducer(baseState, action);

    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(baseState[1]);
    expect(newState).toContainEqual({
      title: "lol",
      image: "lol",
      quantity: 4,
      price: "lol",
      id: 2,
    });
  });

  test("return new state with action products/setProduct", () => {
    const state = [];
    const action = {
      type: "products/setProduct",
      payload: {
        title: "lol",
        image: "lol",
        quantity: 1,
        price: "lol",
      },
    };

    deepFreeze(state);
    const newState = productReducer(state, action);

    expect(newState).toEqual(action.payload);
  });
});
