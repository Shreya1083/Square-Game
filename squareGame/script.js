let s1=document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*100);
    s1.innerHTML=`<h1>${r}</h1>`;
})

s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1>1</h>`;
})

let s2=document.getElementById("sq2");
s2.addEventListener("mouseenter",function(){
    s2.style.backgroundColor="blue"
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white"
})
let s3=document.getElementById("sq3");
s3.addEventListener("click",function(){
    s1.backgroundColor="yellow";
})
let s4=document.getElementById("sq4");
s4.addEventListener("click",function(){
    s2.innerHTML="9";
})



