
const button = document.getElementById("button")
const video = document.getElementById("video")
const content = document.getElementById("content")
const xbutton = document.getElementById("xButton")
const vid = document.getElementById("vid")





button.addEventListener("click", (event) => { 
     if(video.classList)  video.classList.remove("hidden")
       /*  else video.classList +=" active";  */ 
     if(xbutton.classList) xbutton.classList.remove("hidden")
      /*   else video.classList +=" active"; */ 
     if(content.classList) content.classList.add("hidden");
      /*   else video.classList +=" hidden";  */
      
});


xbutton.addEventListener("click", (event) => {

  if(video.classList) video.classList.add("hidden")
 /*    else video.classList +=" hidden";   */
  if(xbutton.classList)  xbutton.classList.add("hidden") 
    /* else video.classList +=" hidden";  */
  if(content.classList) content.classList.remove("hidden")
    /* else video.classList +=" active"; */
  vid.pause(); 
  vid.currentime = 0;
   
     
});


