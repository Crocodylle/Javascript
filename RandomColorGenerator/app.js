

const spans   = document.querySelectorAll("span")
const span = document.querySelector("span")
 
const div   = document.querySelector("div")



function gerandocores() { 

  let colorContainerEl = document.createElement("p");
    for(var i=0; i<spans.length; i++)
     { 
        
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    console.log( r ,"and g", g ,"and b", b);

    spans[i].style.backgroundColor = `rgb(${r},${g},${b}`
    
    
    const colorContainerEl = document.createElement("p");
    colorContainerEl.classList.add("color-container"); 
    spans[i].append(colorContainerEl);

    colorContainerEl.innerText = `Color: r(${r}), g(${g}), b(${b})`;
        
         
      }
  
    }
 


gerandocores(); 
