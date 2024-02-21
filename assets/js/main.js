const navlink = document.querySelectorAll("li");
const underline = document.querySelectorAll(".underline");

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX - trailer.offsetWidth/2;
    coords.y = e.clientY - trailer.offsetHeight/2;
    trailer.style.left = `${coords.x}px`;
    trailer.style.top = `${coords.y}px`;

});
  

for (let i = 0; i <= navlink.length; i++) {
    navlink[i].addEventListener("mouseover", function () {
        underline[i].style.width="100%";
    });
    navlink[i].addEventListener("mouseout", function () {
        underline[i].style.width="0%";
    });
}
