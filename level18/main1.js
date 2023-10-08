var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
// ================
var canvas = document.querySelector("canvas")
var h3 = document.querySelector("h3")
var footer = document.querySelector("article")
var transfer = "/level19/index1.html"
h3.addEventListener("click",()=>{
     two.remove()
     four.remove()      
   })

function True(){
     h3.remove()

     var YouWin = 
     `
     <div class="fonts-size">
        <h1>you win</h1>
     </div>
     `
     p.innerHTML = `<p>${YouWin}</p>`
     console.log(true)
     one.style.background = "#04e762"
     two.style.background = "#d00000"
     three.style.background = "#d00000"
     four.style.background = "#d00000"
     one.style.color = "#fff"
     two.style.color = "#fff"
     three.style.color = "#fff"
     four.style.color = "#fff"
      setTimeout(()=>{
     location.href = transfer
      },3000)
   }
function False(){
     h3.remove()

     var YouWin = 
     `
     <div class="fonts-size">
        <h1>you Lose</h1>
     </div>
     `
     p.innerHTML = `<p>${YouWin}</p>`
     console.log(false)
     one.style.background = "#04e762"
     two.style.background = "#d00000"
     three.style.background = "#d00000"
     four.style.background = "#d00000"
     one.style.color = "#fff"
     two.style.color = "#fff"
     three.style.color = "#fff"
     four.style.color = "#fff"

     setTimeout(()=>{
      location.href = transfer
       },3000)

}


one.addEventListener("click",True)
two.addEventListener("click",False)
three.addEventListener("click",False)
four.addEventListener("click",False)