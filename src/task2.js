const container = document.querySelector("#boxes");

const getRandomColor = () =>
  `rgb(${[
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ].join(",")})`;

const createBoxes = (amount) => {
  container.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    box.style.backgroundColor = getRandomColor();
    container.appendChild(box);
  }
};
