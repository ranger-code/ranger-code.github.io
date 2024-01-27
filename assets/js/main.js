const navlink = document.querySelectorAll(".navlink");
const underline = document.querySelectorAll(".underline");
const coords = { x: 0, y: 0 };
const trailer = document.getElementById("trailer");
const magic = document.querySelectorAll(".magic");

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX - trailer.offsetWidth/2;
    coords.y = e.clientY - trailer.offsetHeight/2;
    trailer.style.left = `${coords.x}px`;
    trailer.style.top = `${coords.y}px`;

});
  

for (let i = 0; i <= navlink.length; i++) {
    navlink[i].addEventListener("mouseover", function () {
        trailer.style.backgroundColor = "rgba(255, 255, 255, 0.10)";
        underline[i].style.width="100%";
        // magic[i].classList.toggle("magiked")
    });
    navlink[i].addEventListener("mouseout", function () {
        trailer.style.backgroundColor = "rgba(255, 255, 255, 1)";
        underline[i].style.width="0%";
        // magic[i].classList.toggle("magic");
    });
}
