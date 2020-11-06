//Återställningsknapp
let btns = document.querySelectorAll('button')
let reset = btns[2]
    reset.innerText = 'RESET'
//Variabel till art klasserna i html    
let art1 = document.querySelector('.art-1');


//Sätt en event listener på reset-knappen
    reset.addEventListener('click', resetAll)

//Sätt event listener för första knappen
let button1 = btns[0];
    button1.addEventListener('click', function(e){
        changeColor();
        changeArtInArtTwo();
    })


                function resetAll(){
                    art1.style.backgroundColor = 'white'

                    let h2 = document.querySelector('.art-2 h2');
                    h2.innerText = 'Sinus Hoodie';
                }


                function changeColor(){
                    art1.style.backgroundColor = 'red';
                }

                function changeArtInArtTwo(){
                    let h2 = document.querySelector('.art-2 h2');
                    h2.innerText = 'Potato';
                }