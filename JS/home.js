let myname = document.querySelector(".myname");
let mymaned = myname.innerHTML;
let mynamearra = mymaned.split("");
myname.innerHTML=""
let typing =0;
 
function typedJs(){
    if(typing < mymaned.length){
        myname.innerHTML += mymaned.charAt(typing); 
        typing++;
        mynamearra = mymaned.split("");
    }else{
        mynamearra.pop("");
        myname.innerHTML = mynamearra.join("");
        if(mynamearra.length == 0){ 
            typing = 0;
        }
    }
}
setInterval (()=>{
    typedJs();
},80);