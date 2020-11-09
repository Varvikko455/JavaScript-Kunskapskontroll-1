//Variabler som selectar button och anchor element i HTML, returnerar en array med querySelectorAll
let btns = document.querySelectorAll('button')
let aElement = document.querySelectorAll('a')

//Variabel som selectar button 3 ger den texten RESET med innerText och lägger den i en Evenlistener med click funktion och lägger in resetAll som function
let reset = btns[2]
    reset.innerText = 'RESET'
    reset.addEventListener('click', resetAll)

//Variabler för diverse olika funktioner som använder ovanstående querySelectors index platser för att bestämma knappar, innerText för att bestämma namn på knapp och Eventlisteners med click funktion för att utföra respektive funktion
let buttonChangeColor = btns[0];
    buttonChangeColor.innerText = 'Change Color'
    buttonChangeColor.addEventListener('click', function(e){
        changeColor();
    })
let buttonChangeText = aElement[0];
    buttonChangeText.innerText = 'Change Text'
    buttonChangeText.addEventListener('click', function(e){
        changeArtInArtTwo();
    })
let buttonChangePicture = aElement[1];
    buttonChangePicture.innerText = 'Change Picture'
    buttonChangePicture.addEventListener('click', function(e){
        changePicture();
    })
let buttonChangeColorButton = aElement[2];
    buttonChangeColorButton.innerText = 'Change Color Button'
    buttonChangeColorButton.addEventListener('click', function(e){
        changeColorButton();
    })
let buttonRemoveElement = btns[1];
    buttonRemoveElement.innerText = 'Remove Element'
    buttonRemoveElement.addEventListener('click', function(e){
        removeElement();
    })
let buttonCreateList = aElement[3];
    buttonCreateList.innerText = 'Create List'
    buttonCreateList.addEventListener('click', function(e){
        list();
    })
                //Funktion som återställer sidan
                function resetAll(){
                    let art1 = document.querySelector('.art-1');
                    art1.style.backgroundColor = 'white'

                    let h2 = document.querySelector('.art-2 h2');
                    h2.innerText = 'Sinus Hoodie';

                    let picture = document.querySelector('.art-1 img')
                    picture.src = 'img/hoodie-ash.png'

                    let colorButton = document.querySelector('.art-2 button')
                    colorButton.style.backgroundColor = '#222'

                    let remove = document.querySelector('.logo')
                    remove.style.display = 'block'

                    let ulTarget = document.querySelector('.ul-list')
                    ulTarget.innerHTML = "";
                }

                //Funktion som ändrar bakrundsfärg på ett element
                function changeColor(){
                    let art1 = document.querySelector('.art-1');
                    art1.style.backgroundColor = 'red';
                }
                //Funktion som ändrar text i h2 i art-2 klassen
                function changeArtInArtTwo(){
                    let h2 = document.querySelector('.art-2 h2');
                    h2.innerText = 'Potato';
                }
                //Funktion som ändrar bilden i art-1 klassen
                function changePicture(){
                    let picture = document.querySelector('.art-1 img')
                    picture.src = 'img/hoodie-ocean.png'
                }
                //Funktion som ändrar bakrundsfärgen på knappen i art-2 klassen
                function changeColorButton(){
                    let colorButton = document.querySelector('.art-2 button')
                    colorButton.style.backgroundColor = 'blue'
                }
                //Funktion som tar bort bilden i klassen logo
                function removeElement(){
                    let remove = document.querySelector('.logo')
                    remove.style.display = 'none'
                }
            //Variabel som skapar en unordered list som sedan får klassen ul-list och får main id:et som föräldrer med AppendChild
            let ulCreate = document.createElement('ul')
            ulCreate.classList = 'ul-list'
            main.appendChild(ulCreate)
                //Funktion som skapar 10st list element i ul
                function list(){
                    let ulTarget = document.querySelector('.ul-list')
                    ulTarget.style.display = 'block'
                    //For loop som itererar 10 gånger, skapar ett list element med style element och lägger in i ul listan
                    for(let i=0; i<10; i++){
                        let listCreate = document.createElement('li');
                        listCreate.innerText = 'RandomText';
                        ulCreate.appendChild(listCreate);

                        listCreate.style.border = '1px solid black'
                        listCreate.style.borderRadius = '1rem'
                        listCreate.style.padding = '2px 20px'
                        listCreate.style.marginBottom = '2px'
                        listCreate.style.marginTop = '2px'
                        listCreate.style.width = '8rem'
                        listCreate.style.display = 'flex'
                        listCreate.style.justifyContent = 'center'
                    }
                }