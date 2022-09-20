import deepFreeze from "deep-freeze";
import productReducer from "./productReducer";

describe("productReducer", () => {
  test("returns new state with action products/setProduct", () => {
    const state = [];
    const action = {
      type: "products/setProduct",
      payload: {
        products: {
          title: "Ekologiški bananai (fasuoti), 1 kg",
          image:
            "https://cdn.barbora.lt/products/06c3253b-953c-435a-b1b8-df4a1069bec1_s…",
          price: 1.79,
          quantity: 1,
        },
      },
    };

    deepFreeze(state);
    const newState = productReducer(state, action);

    expect(newState).toEqual(action.payload.products);
  });

  test("returns new state with action notes/appendProduct", () => {
    const state = [];
    const action = {
      type: "products/appendProduct",
      payload: {
        title: "Ekologiški bananai (fasuoti), 1 kg",
        image:
          "https://cdn.barbora.lt/products/06c3253b-953c-435a-b1b8-df4a1069bec1_s…",
        price: 1.79,
        quantity: 0,
      },
    };

    deepFreeze(state);
    const newState = productReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState[0]).toEqual({
      title: "Ekologiški bananai (fasuoti), 1 kg",
      image:
        "https://cdn.barbora.lt/products/06c3253b-953c-435a-b1b8-df4a1069bec1_s…",
      price: 1.79,
      quantity: 0,
    });
  });

  test("return new state with action products/updateProduct", () => {
    const state = [
      {
        _id: "632462caf1611011f0331b01",
        title: "Ekologiški bananai (fasuoti), 1 kg",
        image:
          "https://cdn.barbora.lt/products/06c3253b-953c-435a-b1b8-df4a1069bec1_s…",
        price: 1.79,
        quantity: 3,
      },
      {
        _id: "6326410a1837b671118c904b",
        title: "Avižų gėrimas ALPRO, 3,5 % rieb., 1 l",
        image:
          "https://cdn.barbora.lt/products/a9bdb73f-285b-4a24-bf1f-deec2f7a9306_s…",
        price: 2.39,
        quantity: 2,
      },
    ];
    const action = {
      type: "products/updateProduct",
      payload: {
        _id: "632462caf1611011f0331b01",
        title: "Ekologiški bananai (fasuoti), 1 kg",
        image:
          "https://cdn.barbora.lt/products/06c3253b-953c-435a-b1b8-df4a1069bec1_s…",
        price: 1.79,
        quantity: 1,
      },
    };

    deepFreeze(state);
    const newState = productReducer(state, action);

    expect(newState[0]).toEqual(action.payload);
  });
});
