const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
cursor.style.left = `${e.clientX}px`;
cursor.style.top = `${e.clientY}px`;
});


document.addEventListener("click", () => {
cursor.classList.add("loading");

  
setTimeout(() => {
    cursor.classList.remove("loading");
  }, 1000); 
});
var crsr = document.querySelector("#cursor")
var blurs = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blurs.style.top = dets.y-150+"px"
    blurs.style.left = dets.x-150+"px"
})