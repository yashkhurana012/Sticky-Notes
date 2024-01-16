let clr=document.querySelector("#clr");
let notes=document.querySelector("#notes");
let btn=document.querySelector(".button-borders");
let txt=document.querySelector("#txt");
let para=document.querySelector("#para");
let i=0;


btn.addEventListener(("click"),()=>{
    console.log(clr)
    if(txt.value == ""){
        alert("Enter some text")
    }else{
        
        let x=document.createElement("div");
        let y=document.createElement("span");
            y.innerText="close"
        notes.appendChild(x);
        x.classList.add("notes_style");
        x.style.backgroundColor=clr.value;
        x.innerText=txt.value;
        if(txt.value.length>50){
             x.style.overflowY="scroll"
        }
        
        x.appendChild(y).classList.add("material-symbols-outlined")
        y.classList.add("cross");
        console.log(clr.value)
       y.addEventListener("click",(e)=>{
            e.target.parentNode.remove();
        })
       
        para.style.display="none"
        if(clr.value === '#000000'){
          x.style.color="white"
          console.log("black")
        }
     if(notes.children.length==0){
        para.innerText="You have not added a note yet."
     }else{
         txt.value=""
     }

    //     let rm=document.querySelector("#removebtn");
    //   rm.addEventListener(("click"),(e)=>{
//    x.forEach(() => {
//     e.remove();
//    });

//    while (notes.children.length!=) {
    
//     notes.removeChild(notes.lastChild);
   
//   }
   
// })




    }


 


})

document.addEventListener("contextmenu",function(e){
e.preventDefault();
},false);