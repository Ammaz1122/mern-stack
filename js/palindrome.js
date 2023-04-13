function palindrom(str) {  
  
   
    let  len = str.length;  
    //maadm

    for (let i = 0; i < len / 2; i++) {  
   
        if (str[i] !== str[len - 1 - i]) {  
            return( 'It is not a palindrome');  
        }  
    }  
    return("its a palindrom")
}  


let string = prompt('Enter a string ');  
  
let value = palindrom(string);  
  
alert(value) 