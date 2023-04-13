
let string = prompt("Enter a string ");
let leng = string.length;

for(var i= 0; i< leng / 2; i++ )
{
    if(string[i] != string[leng -1 - i])
    alert("Not palindrom");
}

alert('palindrom')


// alert(leng)