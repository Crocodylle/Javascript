(function() { 
    const pictures = [

        "1",
        "2",
        "3"
    ];


const buttons = document.querySelectorAll(".btn")
const imgDiv = document.querySelector(".img-container")

let counter = 0 

buttons.forEach(function (button) { 

    button.addEventListener("click", function(e) { 

        if (button.classList.contains('btn-left')) {
        counter-- 
         console.log("another one", counter)
         if(counter < 0) { 
            console.log(counter)
            counter = pictures.length - 1 
         } 
         imgDiv.style.background = `url('./img/${pictures[counter]}.jpg')`
         }
        if (button.classList.contains('btn-right')) {
            counter++ 
             if(counter >  pictures.length - 1) { 
                console.log(counter)
                counter = 0
             } 
             imgDiv.style.background = `url('./img/${pictures[counter]}.jpg')`
             }
    })
})


})()