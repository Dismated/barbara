import promptReducer from "./promptReducer";
import deepFreeze from "deep-freeze";

describe("promptReducer", () => {
  test("returns new state with action prompts/setPrompt", () => {
    const state = "";
    const action = {
      type: "prompts/setPrompt",
      payload: "bana",
    };

    deepFreeze(state);
    const newState = promptReducer(state, action);

    expect(newState).toEqual(action.payload);
  });
});
