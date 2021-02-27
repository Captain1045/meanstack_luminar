function clearBox(){
    document.querySelector("#result").value="";
}
function displayBox(num){
    document.querySelector("#result").value+=num;
}
function result(){
    let data=document.querySelector("#result").value;
    document.querySelector("#result").value=eval(data);
}
function back(){
    let data=document.querySelector("#result").value;
    let res=data.slice(0,-1);
    document.querySelector("#result").value=res;
}