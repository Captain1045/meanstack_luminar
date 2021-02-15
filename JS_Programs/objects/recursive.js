var text="ABAC";
var char=text.split("");
console.log(text);
var recursive={

};
for(let c of char)
{
    if(c in recursive)
    {
        console.log(c);
        break;
    }
    else{
        recursive[c]=1;
    }
}
console.log(recursive);