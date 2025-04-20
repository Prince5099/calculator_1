let para1=document.querySelector("#demo");
let equal=document.getElementById("result");
let para2=document.getElementById("demo1");
let clear1=document.querySelector("#clear");
let back1=document.querySelector("#back");
let divide1=document.querySelector("#divide");
let add1=document.querySelector("#plus");
let multiply1=document.querySelector("#multiply");
let minus1=document.querySelector("#minus");
let block=document.querySelectorAll(".two");

divide1.disabled=true;
add1.disabled=true;
multiply1.disabled=true;
minus1.disabled=true;
para1.disabled=true;
para2.disabled=true;

function appendValue(value){
   para1.innerHTML += value;
   divide1.disabled=false;
   add1.disabled=false;
   multiply1.disabled=false;
   minus1.disabled=false;
};

divide1.addEventListener("click",()=>{
   divide1.disabled=true;
    
})
add1.addEventListener("click",()=>{
   let value=para1.innerHTML.toString();
   if(value.length>0){
      let value1=value.slice(0,-1);
      para1.innerHTML=value1;
   }
})
multiply1.addEventListener("click",()=>{
   multiply1.disabled=true;
})
minus1.addEventListener("click",()=>{
   minus1.disabled=true;
})

equal.addEventListener("click",()=>{
   try{
   para2.innerHTML=eval(para1.innerHTML);
   }
   catch{
      para2.innerHTML="error";
   }
});

clear1.addEventListener("click",()=>{
   para1.innerHTML=" ";
   para2.innerHTML=" ";
});

back1.addEventListener("click", ()=>{
   let value=para1.innerHTML.toString();
   if(value.length>0){
      let value1=value.slice(0,-1);
      para1.innerHTML=value1;
   }
})
let canvas=document.getElementById("canvas");

const line=document.getElementById("canvas");
const Xarray=[[0,0],[125,0],[250,0],[375,0],[500,0],[0,125],[0,250],[0,375],[0,500],[0,0],[0,0],[500,0]];
const Yarray=[[500,500],[125,500],[250,500],[375,500],[500,500],[500,125],[500,250],[500,375],[500,500],[500,0],[0,500],[0,500]];
const ctx=line.getContext("2d");
for(let i=0; i<12; i++){
   ctx.beginPath();
   ctx.moveTo(Xarray[i][0],Xarray[i][1]);
   ctx.lineTo(Yarray[i][0],Yarray[i][1]);
   ctx.stroke(); 
   
}