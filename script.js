const container = document.querySelector('.content');
const fillButton = document.querySelector('.fill-button');
const eraseButton = document.querySelector('.erase-button');
const randomButton = document.querySelector('.random-button');
const colorPicker = document.querySelector('#color-picker');
let isActive = false;


createGrid(16);

function createGrid( cellNo){
    for(let i=0; i < cellNo; i++){
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        for(let x =0; x < cellNo; x++){
            const card = document.createElement('div');
            card.classList.add('card');
            cardContainer.appendChild(card);
        }

        
        container.appendChild(cardContainer);
    }
}

const cards = document.querySelectorAll('.card');
console.log(cards.length);



fillButton.addEventListener('click', () =>{
    if(!isActive){
        activateButton(fillButton);

        cards.forEach((card) =>{
            card.classList.remove('noHover')
            card.addEventListener('mousemove', () =>{
                card.classList.add('hover');
            });
        });
    }
    
    else if(isActive){
        deactivateButton(fillButton);
        
    }
    
});

eraseButton.addEventListener('click', () =>{
    if(!isActive){
        activateButton(eraseButton);

        cards.forEach(card => {
            card.classList.remove('noHover');
            card.addEventListener('mousemove', () =>{
                card.classList.remove('hover');
            })
        })
    }

    else if(isActive){
        deactivateButton(eraseButton);
    }

});

randomButton.addEventListener('click', () =>{
    if(!isActive){
        activateButton(randomButton);

        let newHover = document.cre('.hover');
        console.log(newHover.style.backgroundColor);
       // newHover.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

        cards.forEach(card => {
            card.classList.remove('noHover');
            card.addEventListener('mousemove', ()=>{
                card.classList.add(newHover);
            });
        });
    }

    else if(isActive){
        deactivateButton(randomButton);
    }
});

colorPicker.addEventListener("input", changeColor, false);
colorPicker.addEventListener("change", changeColor, false);


function changeColor(event){
    document.querySelectorAll('.card').forEach((card) =>{
        if(card.classList.contains('hover')){
            card.style.backgroundColor= event.target.value;
        }
    });
}


function activateButton(button){
    button.style.color = 'white';
    button.style.backgroundColor ="rgb(61, 133, 182)";
    isActive =true;
}

function deactivateButton(button){
    button.style.color = 'black';
    button.style.backgroundColor ="#EFEFEF";

    isActive =false;
    
    cards.forEach((card) =>{
        card.classList.add('noHover');
    });
}

const randomNumber =() =>{
    return Math.floor(Math.random() * 256);
}
