const colorSelect = document.getElementById("colorSelect");
const colorInput = document.getElementById("colorInput");
const colorSection = document.getElementById("color_section");
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {
  let colorHash;
  let colorSchemes;

  colorSchemes = colorSelect.value;
  colorHash = colorInput.value;

  colorHash = colorHash.slice(1);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorHash}&mode=${colorSchemes}&count=4`
  )
    .then((res) => res.json())
    .then((data) => {
      displayColors(data);
    });
});

function displayColors(colorObject) {
  let html;

  const colorsArray = Object.values(colorObject.colors);

  colorsArray.map((colorArray) => {
    html += `
        <div style="background-color: ${colorArray.hex.value}; ">${colorArray.hex.value}</div>
        `;
    colorSection.innerHTML = html;

    console.log(colorArray.hex.value);
  });
}
