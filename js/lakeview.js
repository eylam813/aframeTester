console.log("lakeview hello");

let camera1 = document.querySelector("h1");
camera1.addEventListener("click", () => {
    console.log("clicked camera 1 tag");
    camera.setAttribute('camera', 'active', true);
})

let camera2 = document.querySelector("h2");
camera2.addEventListener("click", () => {
    console.log("clicked camera 2 tag");
    camera2b.setAttribute('camera', 'active', true);

})