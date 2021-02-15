var text = "hai its me hello its amal hai hello";
var words = text.split(" ");
console.log(words);
var dic = {

};
for (let word of words) {
    if (word in dic) {
        dic[word] += 1;
    }
    else {
        dic[word]=1;
    }
}
console.log(dic);