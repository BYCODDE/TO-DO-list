// const mainimgs = document.querySelectorAll("itemslider")
// const mainimg = document.querySelector("itemslider show")

// const prev = document.querySelector("#previousbtn")
// const next = document.querySelector("#nextbtn")


// const sliderIndex = 0;





// next.addEventListener("click",function() {

// mainimgs[sliderIndex].classList.remove("show")

// sliderIndex++;

// mainimgs[sliderIndex].classList.add("show")


// }) 

// if(next) {
    
    



// }




// if (sliderIndex > mainimgs.length - 1) {
//     sliderIndex = 0;
// }

// const sliderItems = document.querySelectorAll(".slider-item")


// const prevBtn = document.querySelector("#prev-btn")
// const nextBtn = document.querySelector("#next-btn")

// let currentSliderIndex  = 0


// nextBtn.addEventListener("click",() => {


//     sliderItems[currentSliderIndex].classList.remove("show")
    
// if(currentSliderIndex === sliderItems.length - 1) {

// currentSliderIndex = 0 


// }

// else{
//     currentSliderIndex++;



// }
// sliderItems[currentSliderIndex].classList.add("show")


    

// })


// prevBtn.addEventListener("click",() => {

// sliderItems[currentSliderIndex].classList.remove("show")

// if(currentSliderIndex === 0) {

//     currentSliderIndex = sliderItems.length - 1


// }else{
//     currentSliderIndex--;



// }
// sliderItems[currentSliderIndex].classList.add("show")








// })

////////////////////////////////////////////////////////////////////////////////////////////////////




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


    
    
    
    
    
    
    const collection = document.getElementsByTagName("li");
    
    for(let i = 0; i < collection.length; i++) {
    
    const imgs = document.createElement("img");
    
    imgs.src = "square-xmark-solid.svg";

    imgs.classList.add("remove")

    
    const div = document.createElement("div");
    
    div.appendChild(imgs)
    
    div.classList.add("removediv")

    collection[i].appendChild(div);
    
    
    div.addEventListener("click", () =>{
    
const lis =document.querySelectorAll("li")

li.classList.add("removeli")

for(let i=0; i<lis.length; i++){
    
    if(lis[i].classList.contains("removeli")){
        
        // li.style.display = 'none'
        // lis[i].remove()
    }
    



    console.log("123");
}





    })
    }
    
    
    

}    










    

