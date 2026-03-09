import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { AuthContext } from "../../context/AuthContext";

function renderWithAuth(isAuthenticated) {
  return render(
    <AuthContext.Provider value={{ isAuthenticated }}>
      <MemoryRouter>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    </AuthContext.Provider>
  );
}

test("renders children when authenticated", () => {
  renderWithAuth(true);

  expect(screen.getByText("Protected Content")).toBeInTheDocument();
});

test("redirects when not authenticated", () => {
  renderWithAuth(false);

  expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
});