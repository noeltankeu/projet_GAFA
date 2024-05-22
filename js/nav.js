const btn1 = document.querySelector("#donate");

const btn2 = document.querySelector("#cont");

window.addEventListener("scroll", () => {
    //console.log("Test !");
  // console.log(window.scrollY);
if (window.scrollY > 120) {
    btn1.style.top = "0";
} else if (window.scrollY < 120) {
    btn1.style.top = "-100px";
}
});