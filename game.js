let tube = document.getElementById("tube");
let open = document.getElementById("open");

open.addEventListener('animationIteration' , () => {
    let random = -((Math.random() * 300) + 200); 
    open.style.top = random + "px";
});



