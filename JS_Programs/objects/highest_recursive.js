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
console.log(temp);
