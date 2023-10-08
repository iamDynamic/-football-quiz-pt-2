var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
// ================
var img = document.getElementById("img")
var canvas = document.querySelector("canvas")
var p = document.getElementById("p")
var footer = document.querySelector("article")

img.addEventListener("click",()=>{
     two.remove()
     three.remove()      
   })

function True(){
     img.remove()

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
     location.href ="/level14/index1.html"
      },3000)
   }
function False(){
     img.remove()

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
      location.href ="/level14/index1.html"
       },3000)

}


one.addEventListener("click",True)
two.addEventListener("click",False)
three.addEventListener("click",False)
four.addEventListener("click",False)