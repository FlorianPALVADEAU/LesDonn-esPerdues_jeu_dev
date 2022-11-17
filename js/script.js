const input = document.getElementById('inputGame')
const checkBtn = document.getElementById('check')
const scenario1 = document.getElementById('scenario1')
const scenario2 = document.getElementById('scenario2')
const scenario3 = document.getElementById('scenario3')
var x = document.getElementById("electricity")
var counter = 0

checkBtn.addEventListener('click', ()=>{
    start()
    x.play();
    x.volume = 0.2;
})
input.addEventListener('keypress', (e)=>{
    if (e.keyCode === 13) {
        start()
    }
})

document.addEventListener('click', ()=>{
    if (counter === 0) {
        x.play();
        x.volume = 0.2;
        counter++
    }
    })

function start() {
    if (input.value.trim(). slice(-1) === ";") {
        if (scenario2.classList.contains('hidden') && scenario3.classList.contains('hidden')) {
            firstScenario()
        } else if (scenario1.classList.contains('hidden') && scenario3.classList.contains('hidden')) {
            secondScenario()
        } else if (scenario1.classList.contains('hidden') && scenario2.classList.contains('hidden')) {
            thirdScenario()
        }
    }else{
        alert('Veuillez rentrer une ligne de CSS valide !')
    }
}


function firstScenario() {
    document.getElementById('scenario1').style.cssText = input.value
    if (input.value.trim() === 'justify-content: flex-end;' || input.value.trim() === 'justify-content:flex-end;') {
        document.getElementById('box1').style.display = "none"
        document.getElementById('container1').style.backgroundImage = "url(../img/branchement1.png)"
        successScenario(scenario1)
    }
}
function secondScenario() {
    scenario2.style.cssText += input.value
    if (input.value.trim() === 'justify-content: flex-start;' || input.value.trim() === 'justify-content:flex-start;') {
        document.getElementById('pInfo').innerHTML= 'Maintenant, gérez la position de la prise avec le "align-items"'
        scenario2.style.cssText += input.value
    }
    if (scenario2.style.cssText === "justify-content: flex-start; align-items: flex-end;" || scenario2.style.cssText === "align-items: flex-end; justify-content: flex-start;") {
        successScenario(scenario2)
        document.getElementById('box2').style.display = "none"
        document.getElementById('container2').style.backgroundImage = "url(../img/branchement1.png)"

    }
}
function thirdScenario() {
    scenario3.style.cssText += input.value
    if (input.value.trim() === 'justify-content: space-around;' || input.value.trim() === 'justify-content:space-around;') {
        document.getElementById('pInfo2').innerHTML= 'Maintenant, gérez la position des prises avec le "align-items"'
    }
    if (input.value.trim() === 'align-items: flex-end;' || input.value.trim() === 'align-items:flex-end;') {
        document.getElementById('pInfo2').innerHTML= 'Maintenant, gérez la position des prises avec le "flex-direction"'
    }
    if (input.value.trim() === 'flex-direction: culumn-reverse;' || input.value.trim() === 'flex-direction: culumn-reverse;') {
        scenario3.style['flexDirection'] = 'column-reverse'
        
    }
    if (scenario3.style.cssText === "justify-content: space-around; align-items: flex-end; flex-direction: column-reverse;" || scenario3.style.cssText === "justify-content: space-around; flex-direction: column-reverse; align-items: flex-end;" || scenario3.style.cssText === "align-items: flex-end; flex-direction: column-reverse; justify-content: space-around;" || scenario3.style.cssText === "align-items: flex-end; justify-content: space-around; flex-direction: column-reverse;" || scenario3.style.cssText === "flex-direction: column-reverse; justify-content: space-around; align-items: flex-end;" || scenario3.style.cssText === "flex-direction: column-reverse; align-items: flex-end; justify-content: space-around;") {
        document.getElementById('box3').style.display = "none"
        document.getElementById('box4').style.display = "none"
        document.getElementById('container3').style.backgroundImage = "url(../img/branchement1.png)"
        document.getElementById('container4').style.backgroundImage = "url(../img/branchement2.png)"

        successScenario(scenario3)
    }
}
function successScenario(scenario) {
    setTimeout(() => {        
        scenario.classList.add("hidden")
        x.pause()
        if (scenario === scenario3) {
            document.getElementById('yeah').play()
            document.getElementsByClassName('gif')[0].classList.remove('hidden')
            document.getElementById('successH2').innerHTML = "▶ Bravo, vous avez remporté l'épreuve !"
            document.getElementById('successH2').style.cssText = "transform: scale(0.8); width: 100%; text-align: center;"
            document.getElementById('successP').style.cssText = "transform: scale(0.5); width: 100%; text-align: center;"
            document.getElementById('successP').innerHTML = "▶ Vous allez pouvoir accéder à la prémière partie du mot de passe..."
            document.getElementById("success").classList.remove('hidden')
        }else{
            document.getElementById("success").classList.remove('hidden')
        }
        setTimeout(() => {
            document.getElementById("success").classList.add('hidden')
            document.getElementsByClassName('gif')[0].classList.add('hidden')

            if (scenario === scenario1) {
                scenario2.classList.remove('hidden')
                x.play()
            } else if (scenario === scenario2) {
                scenario3.classList.remove('hidden')
                x.play()
            } else if (scenario === scenario3) {
                win()
            }
        }, 4500);
    }, 700);
}

function win() {
    document.getElementsByClassName('game')[0].classList.add('hidden')
    document.getElementById('gameWon').classList.remove('hidden')
}