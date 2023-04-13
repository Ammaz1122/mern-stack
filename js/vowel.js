let vowel = (string)=>
{
    let match = string.match(/[aeiouAEIOU]/gi).length;
    alert(match);

}
let ask = prompt(" Enter a stinfg");
vowel(ask);
