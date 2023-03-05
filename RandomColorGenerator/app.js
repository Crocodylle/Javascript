 
const div   = document.querySelector("div")
const ispan = document.createElement("span");


function gerandocores() { 

  for(x=0; x<=35; x++) {
    
  const ispan = document.createElement("span");
  ispan.classList.add("boxes");
  div.appendChild(ispan)

          
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    console.log( r ,"and g", g ,"and b", b);

    ispan.style.backgroundColor = `rgb(${r},${g},${b}`;
    
    
    const colorContainerEl = document.createElement("p");
    colorContainerEl.classList.add("color-container"); 
    ispan.append(colorContainerEl);

    colorContainerEl.innerText = `Color: r(${r}), g(${g}), b(${b})`;
            
  
    }
}
 

gerandocores(); 
