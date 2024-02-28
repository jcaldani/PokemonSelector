const fireButton = document.querySelector('.fireButton');
const waterButton = document.querySelector('.waterButton');
const grassButton = document.querySelector('.grassButton');
const selecttxt = document.querySelector('.selecttxt');

// const textCycle = ['Pick me!', 'No, pick me!', 'Choose me!', 'Hi!', ':D', ':3'];

/// fire button

fireButton.addEventListener('mouseover', () => {
    // fireButton.style.backgroundColor = 'rgb(218, 87, 0)';
    // fireButton.textContent = getRandomInt();
    selecttxt.textContent = 'Pick Cyndaquil?'
});

fireButton.addEventListener('mouseout', () => { 
        // fireButton.style.backgroundColor = 'orange';
        selecttxt.textContent = "Press a button to select";
    
}); 

fireButton.addEventListener('click', () => {   
    window.location.href = 'cyndadex.html';
});

/// water button

waterButton.addEventListener('mouseover', () => {
    // waterButton.style.backgroundColor = 'rgb(34, 34, 182)';
    // waterButton.textContent = getRandomInt();
    selecttxt.textContent = 'Pick Totodile?'
});

waterButton.addEventListener('mouseout', () => {    
    selecttxt.textContent = "Press a button to select";
});

waterButton.addEventListener('click', () => {   
    window.location.href = 'totodex.html';
});

//// grass button

grassButton.addEventListener('mouseover', () => {
    // grassButton.style.backgroundColor = 'rgb(21, 155, 21)';
    // grassButton.textContent = getRandomInt();
    selecttxt.textContent = 'Pick Chikorita?'

});

grassButton.addEventListener('mouseout', () => { 
    // grassButton.style.backgroundColor = 'lightgreen';
    selecttxt.textContent = "Press a button to select";
  
});

grassButton.addEventListener('click', () => {   
    window.location.href = 'chikodex.html';
});


/// cycle through button text 
/*
function getRandomInt(){
    const textIndex = Math.floor(Math.random() * textCycle.length);
    return textCycle[textIndex];
};
*/ 




