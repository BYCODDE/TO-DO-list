function addElement() {
    
    const li = document.createElement("li");
    
    let inputValue = document.getElementById("myInput").value
    
    
    
    const textValue = document.createTextNode(inputValue)
    
    li.appendChild(textValue)
    
    const ul = document.getElementById("myUL")
    
    
    
    const rame = document.querySelectorAll("li")
    
    
    
    
    if(inputValue === ""){
        
        alert("Please enter!")
    
    inputValue.style.display = 'none'
    
    
    
        
    }
    
    
    
    for(let i = 0; i < rame.length;i++){
        
        
        if( inputValue === rame[i].innerText){
            
            
            alert("You have already entered")
            
            ul.removeChild(rame[i])
        }
            else{
                
            }
        }
        ul.appendChild(li)
    
    
        
        
        
        
        
        
    
    
    const collection = document.querySelectorAll('li')
    
    
    for(let i = 0; i < collection.length; i++){
    
    const imgs =  document.createElement("img");
    
    imgs.src = "square-xmark-solid.svg"
    
    imgs.classList.add("remove")
    
    
    const div = document.createElement("div");
        
        div.appendChild(imgs)
        
        div.classList.add("removediv")
    
        collection[i].appendChild(div);
    
    div.addEventListener("click", () =>{
        collection[i].remove();
    })
    
    
    }

}