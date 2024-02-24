const fireButton = document.querySelector('.fireButton');
const waterButton = document.querySelector('.waterButton');
const grassButton = document.querySelector('.grassButton');
const textCycle = ['Pick me!', 'No, pick me!', 'Choose me!', 'Hi!', ':D', ':3'];

/// fire button

fireButton.addEventListener('click', () => {   
    window.location.href = 'cyndadex.html';
});

fireButton.addEventListener('mouseover', () => {
    // fireButton.style.backgroundColor = 'rgb(218, 87, 0)';
    fireButton.textContent = getRandomInt();
});

fireButton.addEventListener('mouseout', () => { 
    setTimeout(() => {
        // fireButton.style.backgroundColor = 'orange';
        fireButton.textContent = 'Cyndaquil';
    }, "1000");  
}); 

/// water button

waterButton.addEventListener('mouseover', () => {
    // waterButton.style.backgroundColor = 'rgb(34, 34, 182)';
    waterButton.textContent = getRandomInt();
});

waterButton.addEventListener('mouseout', () => { 
    
    setTimeout(() => {
        // waterButton.style.backgroundColor = 'lightblue';
        waterButton.textContent = 'Totodile';
    }, "1000");  
});

waterButton.addEventListener('click', () => {   
    window.location.href = 'totodex.html';
});

//// grass button

grassButton.addEventListener('mouseover', () => {
    // grassButton.style.backgroundColor = 'rgb(21, 155, 21)';
    grassButton.textContent = getRandomInt();

});

grassButton.addEventListener('mouseout', () => { 
    
    setTimeout(() => {
        // grassButton.style.backgroundColor = 'lightgreen';
        grassButton.textContent = 'Chikorita';
    }, "1000");  
});

grassButton.addEventListener('click', () => {   
    window.location.href = 'chikodex.html';
});


/// cycle through button text 

function getRandomInt(){
    const textIndex = Math.floor(Math.random() * textCycle.length);
    return textCycle[textIndex];
};




