var counter = 0
var input = document.getElementById('input')
var button = document.getElementById('button')
var btn = document.getElementById('btn')
button.addEventListener('click', (e)=>{
    Input(e)
})
btn.addEventListener('click', ()=>{
    if (counter === 0) {
        document.getElementsByClassName('p1')[0].classList.remove('hidden')
        counter++
    } else if(counter === 1){
        document.getElementsByClassName('p2')[0].classList.remove('hidden')
        counter++
    } else if(counter === 2 || counter > 1){
        document.getElementsByClassName('p3')[0].classList.remove('hidden')
        counter++
    }
})

function Input(e) {
    if (input.value === 'document.getElementById("content").classList.remove("hidden")' || input.value === 'document.getElementsByClassName("content")[0].classList.remove("hidden")' || input.value === "document.getElementsByClassName('content')[0].classList.remove('hidden')" || input.value === "document.getElementById('content').classList.remove('hidden')") {
        alert('Bravo !')
        document.getElementsByClassName('pageBroken')[0].classList.add('hidden')
        document.getElementById("content").classList.remove("hidden")
    }else {
        input.style="border: 1px solid red"
        input.value = ""
        alert('Mauvaise réponse !')
    }
}