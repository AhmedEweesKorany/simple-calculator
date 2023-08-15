let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
let flag = false;
function ahmed() {
    display.innerText=''
}

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == 'CE') {
            display.innerText = ''
        }
        else if (e.target.innerText == '←') {
            display.innerText = display.innerText.slice(0, -1)
        }
        else if (e.target.innerText == '=') {
            try {
                display.innerText = eval(display.innerText)
                
            }
            catch {
                display.innerHTML = "error"
            }
        }


        else {
            display.innerText += e.target.innerText
        }
    })
})

// with switch statement


/*buttons.map( button => {
    button.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText=''
                break
            case '=':
                try{
                    display.innerText = eval(display.innerText)
                }
                catch{
                    display.innerText="syntax error"
                }
                break
            case '←':
                display.innerText = display.innerText.slice(0,-1)
                break
            default:
                display.innerText += e.target.innerText
        }
    })
}) */