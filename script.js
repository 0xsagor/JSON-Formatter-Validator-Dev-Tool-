function formatJSON() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  const error = document.getElementById("error");

  output.textContent = "";
  error.textContent = "";

  try {
    const obj = JSON.parse(input);
    output.textContent = JSON.stringify(obj, null, 2);
  } catch (e) {
    error.textContent = "Invalid JSON ❌";
  }
}
