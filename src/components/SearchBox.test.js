import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBox from "./SearchBox";
import userEvent from "@testing-library/user-event";

test("<NoteForm /> updates parent state and calls onSubmit", async () => {
  const createNote = jest.fn();
  const user = userEvent.setup();

  render(<SearchBox />);

  const input = screen.getByRole("textbox");
  const sendButton = screen.getByRole("button");

  await user.type(input, "bananas");
  await user.click(sendButton);

  expect(createNote.mock.calls).toHaveLength(1);
  expect(createNote.mock.calls[0][0].content).toBe("testing a form...");
});
