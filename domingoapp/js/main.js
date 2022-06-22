window.onload=()=>{
    const hides = document.querySelectorAll(".hide");
    for(let h of hides){
        h.addEventListener("mouseover",()=>{
            h.style.color = "blue";
        });
        h.addEventListener("mouseout",()=>{
            h.style.color = "#aaa";
            h.style.fontSize = "16px";
        });
        h.addEventListener("click",()=>{
            h.style.fontSize = "40px";
        });
    }
};