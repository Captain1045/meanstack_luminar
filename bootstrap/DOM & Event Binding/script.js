var ob=document.getElementsByTagName("h1");
for(let tag of ob)
{
    tag.style.color="red";
}

var li=document.getElementsByTagName("li");
for(let item of li)
{
    item.style.color="green";
}

var head=document.getElementById("head2");
head.style.color="cyan";

var li=document.getElementsByClassName("li_class");
for(let ob of li)
{
    ob.style.color="blue";
}
var head=document.querySelectorAll("h3");
for(let ob of head)
{
    ob.style.color="yellow";
}
var h4=document.querySelector("#head4");
h4.style.color="pink";