import { renderHook, act } from "@testing-library/react";
import { AuthProvider, useAuth } from "../AuthContext";

test("Login sets user", () => {

  const wrapper = ({ children }) => (
    <AuthProvider>{children}</AuthProvider>
  );

  const { result } = renderHook(() => useAuth(), { wrapper });

  act(() => {
    result.current.login("test", "123");
  });

  expect(result.current.isAuthenticated).toBe(true);
});