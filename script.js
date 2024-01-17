const pixelHeight = 50;
const pixelWidth = 50;

const table = document.querySelector(".table");

const OnClick = (e) =>
{
    console.log("clicked");
    console.log(e.target);
}

let isMouseDown = false;

const OnMouseDown = (e) =>
{
    isMouseDown = true;
    e.target.style.backgroundColor = "black";
}

const OnMouseUp = (e) =>
{
    isMouseDown = false;
}

const OnMouseOver = (e) =>
{
    if (isMouseDown)
    {
        e.target.style.backgroundColor = "black";
    }
}

const CreateTable = () =>
{
    // const screenWidth = table.scrollWidth;
    // const screenHeight = table.scrollHeight;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const boxSize = 10;
    const boxesPerRow = Math.floor(screenWidth / boxSize);
    const numberOfRows = Math.floor(screenHeight / boxSize);

    // console.log(boxesPerRow);
    // console.log(numberOfRows);
    console.log(table);
    console.log(screenHeight);
    console.log(screenWidth);
    let i = 0;
    for (let row = 0; row < numberOfRows; row++)
    {
        for (let col = 0; col < boxesPerRow; col++)
        {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.height = boxSize + "px";
            pixel.style.width = boxSize + "px";

            // pixel.addEventListener("click", OnClick);
            pixel.addEventListener("mousedown", OnMouseDown);
            pixel.addEventListener("mouseup", OnMouseUp);
            pixel.addEventListener("mouseover", OnMouseOver);
            // pixel.innerText = i;
            table.appendChild(pixel);
            i++;
        }
    }

    console.log(i);
}

CreateTable();

// window.addEventListener("resize", function ()
// {
//     // Yeniden boyutlandırıldığında kutuları güncelle
//     table.innerHTML = "";
//     CreateTable();
// });


// If mouse is down, color the pixel, also holding



// const pixels = document.querySelectorAll(".pixel");

// pixels.forEach(pixel =>
// {
//     pixel.addEventListener("mousedown", OnMouseDown);
//     pixel.addEventListener("mouseup", OnMouseUp);
//     pixel.addEventListener("mouseover", OnMouseOver);
// });
