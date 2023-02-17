(function() {   

    const buttons = document.querySelectorAll('.counterBtn') // get buttons from html and point to buttons 
    let count = 0  // initializer a counter 

    buttons.forEach(function(button) {  // a function calling button

        button.addEventListener('click', function() {  //listening the buttons 
       
          if(button.classList.contains('prevBtn')){  
        count-- 
        } else if(button.classList.contains('nextBtn')){ 
         count++
        }


        const counter = document.querySelector('#counter')
        counter.textContent = count 

        if(count < 0) { 
            counter.style.color = 'red'
        } else { 
            counter.style.color = 'green'
      
        }
     })

    })

})()