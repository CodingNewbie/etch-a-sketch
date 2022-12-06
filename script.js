const container = document.querySelector(".grid-container");
const btn = document.querySelector("#grid-size");
let gridSize = 16;

function createGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for(i = 0; i < gridSize; i++) {
        for(j = 0; j < gridSize; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            container.appendChild(gridItem);
        }
    }
}

function clearGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

container.addEventListener("mouseover", function(e) {
    if(e.target.classList.contains("grid-item")) {
        e.target.style.background = "black";
    }
});

btn.addEventListener("click", function(e) {
    let gridSize = prompt("Enter a size: ");

    clearGrid(container);
    createGrid(gridSize);
})

createGrid(gridSize);