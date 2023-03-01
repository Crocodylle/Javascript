const textArea = document.getElementById("message"); 
const totalChar = document.getElementById("tChar"); 
const remainingChar = document.getElementById("rChar"); 


var CountMaxChar = 50; 


function CountChar() { 
  
   /* let max =+ textArea.maxlength;  */
   let numOfEnteredChars = textArea.value.length; 
   let counter = CountMaxChar - numOfEnteredChars; 
   totalChar.textContent = `Total Characters: ${numOfEnteredChars}`;
   remainingChar.textContent = `Remaining: ${counter}`;  

}

textArea.addEventListener("input", CountChar);

