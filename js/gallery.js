// Victory Football Club Gallery

console.log("Gallery page loaded successfully.");

// Select all images
let images = document.querySelectorAll("img");

console.log("Total images: " + images.length);

// Add click event to every image
for (let i = 0; i < images.length; i++) {

    images[i].addEventListener("click", function () {

        console.log("You clicked: " + images[i].alt);

        if (images[i].style.transform === "scale(1.05)") {

            images[i].style.transform = "scale(1)";

            console.log("Image returned to normal size.");

        } else {

            images[i].style.transform = "scale(1.05)";

            console.log("Image enlarged.");

        }

    });

}