var text = "hai its me hello its amal hai hello hai";
var words = text.split(" ");
var temp,flag=0;
//console.log(words);
var dic = {

};
for (let word of words) {
    if (word in dic) {
        if(dic[word]>flag)
        {
            flag=dic[word];
            temp=word;
        }
        dic[word] += 1;
    }
    else {
        dic[word]=1;
    }
}
console.log(dic);
console.log("Highest recursive word is "+temp);


// Using array
var elements=[];
for(let key in dic)
{
    elements.push(dic);
}
elements.sort((a,b)=>a-b);
console.log(elements);
