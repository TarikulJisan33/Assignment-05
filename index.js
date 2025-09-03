console.log("hello")
const historyData=[]
// document.getElementById("call").addEventListener("click",function(){
    
//     alert(
        
        
//     "Calling National Emergency Service Number 999..."
        
    
//     )
//     const coinElement=document.getElementById("coin")
    
//     let newcoin=parseInt(coinElement.innerText)
//     console.log(typeof newcoin)
//     if(newcoin>0){
//         newcoin=newcoin-20;
//     }
//     else{
//         alert("Your coin is finished")
//     }
    
//     console.log(newcoin)
//     coinElement.innerText=newcoin

//     // history

//     const data={
//         name:"Emergency Services",
//         time:new Date().toLocaleTimeString(),
//         Number:999
//     }
//     historyData.push(data)
//     const historyContainer=document.getElementById("history-container")
//     console.log(historyContainer)
//     for (const data of historyData) {
//         const div=document.createElement("div")
//         div.innerHTML=`
//           <div>
//                     <h1 class="font-bold"> ${data.name} </h1>
//                 <p class="text-gray-400">${data.Number}</p>
//                 </div>
//                 <div>
//                     <p class="font-semibold">${data.time}</p>
//                 </div>
        
//         `
//         historyContainer.appendChild(div)
//     }


//     document.getElementById("clear").addEventListener("click",function(){
//         historyContainer.innerHTML=" "
//     })


    
    
// })


// Example usage



// access call class
const allclass=document.querySelectorAll(".call")
for (const call of allclass) {

	
    call.addEventListener("click",function(){
        const name=call.getAttribute("data-name")
        const number=call.getAttribute("data-number")
        
        console.log("clicked")
        
     const dynamic={
        name:name,
        time:new Date().toLocaleTimeString(),
        Number:number
    }
        alert(
            
        
   `Calling ${dynamic.name}  ${dynamic.Number}.....`
    
    
    )


    // coin
     const coinElement=document.getElementById("coin")
    
    let newcoin=parseInt(coinElement.innerText)
    
    if(newcoin>0){
        newcoin=newcoin-20;
    }

    else{
        alert("Your coin is finished")
        return ;
    }
    
    
    coinElement.innerText=newcoin


   // history

    const data={
        name:name,
        time:new Date().toLocaleTimeString(),
        Number:number
    }
    historyData.push(data)
    const historyContainer=document.getElementById("history-container")
    historyContainer.innerHTML=" "
    for (const data of historyData) {
        const div=document.createElement("div")
        div.classList.add("flex","justify-between","gap-4","w-full")
        div.innerHTML=`
          <div>
                    <h1 class="font-bold"> ${data.name} </h1>
                <p class="text-gray-400">${data.Number}</p>
                </div>
               
                    <p class="font-semibold">${data.time}</p>
                
        
        `
        


        historyContainer.prepend(div)

    }
   

    // clear history
     document.getElementById("clear").addEventListener("click", function() {
            historyContainer.innerHTML = " ";
        });

    })


 
        
    
    

    
}







const heartbutton=document.querySelectorAll(".heartbtn")

    for (const heartbtn of heartbutton) {
        heartbtn.addEventListener("click",function(){
            console.log("clicked")
                const heartbalance=document.getElementById("heartbalance")
    
    const heartbalancevalue=heartbalance.innerText
   
    let updateheartbalance=parseInt(heartbalancevalue)
   
    updateheartbalance=updateheartbalance+1
    console.log(updateheartbalance)
    heartbalance.innerText=updateheartbalance
        })
    }



    const copyall=document.querySelectorAll(".copy")
    console.log(copy)
    for (const copy of copyall) {
        copy.addEventListener("click",function(event){





            const copynumber=event.currentTarget.closest(".card")
            
            const allnumbersection=copynumber.querySelector(".number")
           
            
              navigator.clipboard.writeText(allnumbersection.innerText);
            alert("Copied the text: " + allnumbersection.innerText);


            const copynumbersection=document.getElementById("copynumber")
console.log(copynumbersection)
const copynumbervalue=copynumbersection.innerText
let numbercopy=parseInt(copynumbervalue)
numbercopy=numbercopy+1
copynumbersection.innerText=numbercopy
            
        })

    }

    
