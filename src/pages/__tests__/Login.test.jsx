import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../Login";
import { AuthContext } from "../../context/AuthContext";

test("Shows error when fields empty", () => {

  render(
    <AuthContext.Provider value={{ login: jest.fn() }}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  fireEvent.click(screen.getByText("Login"));

  expect(
    screen.getByText("Please enter both username and password")
  ).toBeInTheDocument();
});