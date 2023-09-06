const hr=document.getElementById("hr");
const min=document.getElementById("min");
const sec=document.getElementById("sec");
const ampm=document.getElementById("ampm");


function digwatch(){
    const date=new Date();
   let second=date.getSeconds();
   let minut=date.getMinutes();
   let hour=date.getHours();

   let ap="am";
 
    if(hour>12){
        hour=hour-12;
        ap="pm";
    }

    hour=hour<10?"0"+hour:hour;
    minut=minut<10?"0"+minut:minut;
    second=second<10?"0"+second:second;

   sec.innerText=second; 
min.innerText=minut;
hr.innerText=hour;
ampm.innerText=ap;

// console.log(hour,+""+minut,+""+second)


setTimeout(()=>{
    digwatch();
},1000);
}

digwatch();
