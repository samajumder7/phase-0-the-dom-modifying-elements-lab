const elem = document.getElementById("main");
elem.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Coco Gauff is the champion!";
document.body.append(newHeader);
