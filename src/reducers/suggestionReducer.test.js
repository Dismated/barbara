import suggestionReducer from "./suggestionReducer";
import deepFreeze from "deep-freeze";

describe("suggestionReducer", () => {
  test("returns new state with action suggestions/setSuggestion", () => {
    const state = [];
    const action = {
      type: "suggestions/setSuggestion",
      payload: {
        title: "lol",
        image: "lol",
        quantity: 1,
        price: "lol",
      },
    };

    deepFreeze(state);
    const newState = suggestionReducer(state, action);

    expect(newState).toEqual(action.payload);
  });
});
