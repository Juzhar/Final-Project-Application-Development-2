export function sanitizeInput(input) {
  const div = document.createElement("div");
  div.innerText = input;
  return div.innerHTML;
}