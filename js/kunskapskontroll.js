
let btns = document.querySelectorAll('button')
let aElement = document.querySelectorAll('a')


 








//Satt en event listener på reset-knappen
let reset = btns[2]
    reset.innerText = 'RESET'
    reset.addEventListener('click', resetAll)

//Skapat variabel för btns första knapp på index plats 0    
//Satt event listener för första knappen
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
                    /* ulTarget.style.display = 'none' */
                    ulTarget.innerHTML = "";
                }


                function changeColor(){
                    let art1 = document.querySelector('.art-1');
                    art1.style.backgroundColor = 'red';
                }

                function changeArtInArtTwo(){
                    let h2 = document.querySelector('.art-2 h2');
                    h2.innerText = 'Potato';
                }

                function changePicture(){
                    let picture = document.querySelector('.art-1 img')
                    picture.src = 'img/hoodie-ocean.png'
                }

                function changeColorButton(){
                    let colorButton = document.querySelector('.art-2 button')
                    colorButton.style.backgroundColor = 'blue'
                }

                function removeElement(){
                    let remove = document.querySelector('.logo')
                    remove.style.display = 'none'
                }

            let ulCreate = document.createElement('ul')
            ulCreate.classList = 'ul-list'
            main.appendChild(ulCreate)

                function list(){

                    let ulTarget = document.querySelector('.ul-list')
                    ulTarget.style.display = 'block'

                    for(let i=0; i<10; i++){
                        let listCreate = document.createElement('li');
                        listCreate.innerText = 'RandomText';
                        ulCreate.appendChild(listCreate);

                        listCreate.style.border = '1px solid black'
                        listCreate.style.padding = '2px 20px'
                        listCreate.style.marginBottom = '2px'
                        listCreate.style.marginTop = '2px'
                        listCreate.style.width = '8rem'
                        listCreate.style.display = 'flex'
                        listCreate.style.justifyContent = 'center'
                    }
                    
                    
                    
                    
                    
                    
                    
                }