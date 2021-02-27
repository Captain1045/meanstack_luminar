var click_result=document.querySelector("#click");
click_result.addEventListener("click",()=>{
    click_result.textContent="Clicked";
    click_result.style.color="red";
});

var doubleClick_result=document.querySelector("#double_click");
doubleClick_result.addEventListener("dblclick",()=>{
    doubleClick_result.textContent="Double Clicked";
    doubleClick_result.style.color="green";
});

var mouseOver_result=document.querySelector("#mouse_over");
mouseOver_result.addEventListener("mouseover",()=>{
    mouseOver_result.textContent="Mouse over me";
    mouseOver_result.style.color="black";
});

var mouseOver_result=document.querySelector("#mouse_over");
mouseOver_result.addEventListener("mouseout",()=>{
    mouseOver_result.textContent="Mouse not over me";
    mouseOver_result.style.color="blue";
});