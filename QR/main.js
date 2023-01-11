let btn =document.querySelector("#btn");
let inp= document.getElementById("inp");
let qr_code=document.querySelector(".qr__code");
let container=document.querySelector(".container");

btn.onclick=(e)=>{
   e.preventDefault();
   let inpvalue= inp.value;

   if(inpvalue!=""){
    container.classList.add("active")
    let src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpvalue}`;
   
    let Qrimg=document.createElement("img");
    Qrimg.src=src;
    qr_code.appendChild(Qrimg);


    /// Create button
    let link= document.createElement("a");
    let linktext=document.createTextNode("Download");
    link.appendChild(linktext);
    qr_code.appendChild(link);

    ////downolad image
    link.onclick=()=>{
        link.getAttribute("download");
        link.href=Qrimg.src;
    } 
   
    ////create reload
    let reload=document.createElement("a");
    let reloadtext=document.createTextNode("reload");
    reload.appendChild(reloadtext);
    qr_code.appendChild(reload)
    reload.onclick=()=>{
        location.reload();
    }
    
   }



















else{
    alert("Please Enter your Url")
    
   }

}
