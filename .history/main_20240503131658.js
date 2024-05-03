const colorSelect = document.getElementById("colorSelect");
const colorInput = document.getElementById("colorInput");
const colorSection = document.getElementById("color_section");
const colorBtn = document.getElementById("colorBtn");
const colorColumn = document.getElementById("colorColumn");

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
      console.log(data);
      displayColors(data);
    });
});

function displayColors(colorObject) {
  let html = "";

  const colorsArray = Object.values(colorObject.colors);

  colorsArray.map((colorArray) => {
    html += `
        <div id="colorColumn" style="background-color: ${colorArray.hex.value}; min-width: 20%;  align-items: flex-end; display: flex; justify-content: center; cursor: pointer;">${colorArray.hex.value}</div>
        `;
    colorSection.innerHTML = html;
  });
}

colorColumn.addEventListener("click", () => {
  navigator.clipboard.writeText(colorColumn.textContent);
  copyText.select();
  console.log(clipboard);
});
