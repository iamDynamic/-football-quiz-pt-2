var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
// ================
var h3 = document.getElementById("h3")
var transfer = "/level23/index1.html"


function remove(){
   three.remove()
   four.remove()
}

h3.addEventListener("click",remove)

function T(){
   h3.innerHTML = "<h1 class='h5'>You Win</h1>"
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
function F(){
   h3.innerHTML = "<h1 class='font-size2'>You Lose</h1>"
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
one.addEventListener("click",T)
two.addEventListener("click",F)
three.addEventListener("click",F)
four.addEventListener("click",F)