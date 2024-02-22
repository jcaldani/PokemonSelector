const fireButton = document.querySelector('.fireButton');
const waterButton = document.querySelector('.waterButton');
const grassButton = document.querySelector('.grassButton');
const textCycle = ['Pick me!', 'No, pick me!', 'Choose me!'];

function switchToPage(pageUrl) {
    window.location.href = pageUrl;
  };

/// fire button
fireButton.addEventListener('click', () => {
    switchToPage('cyndadex.html');
});

fireButton.addEventListener('mouseover', () => {
    fireButton.style.backgroundColor = 'red';
    fireButton.textContent = getRandomInt();
});

fireButton.addEventListener('mouseout', () => { 
    setTimeout(() => {
        fireButton.style.backgroundColor = 'orange';
        fireButton.textContent = 'Cyndaquil';
    }, "1000");  
});


/// water button

waterButton.addEventListener('mouseover', () => {
    waterButton.style.backgroundColor = 'blue';
    waterButton.textContent = getRandomInt();
});

waterButton.addEventListener('mouseout', () => { 
    
    setTimeout(() => {
        waterButton.style.backgroundColor = 'lightblue';
        waterButton.textContent = 'Totodile';
    }, "1000");  
});

//// grass button

grassButton.addEventListener('mouseover', () => {
    grassButton.style.backgroundColor = 'green';
    grassButton.textContent = getRandomInt();

});

grassButton.addEventListener('mouseout', () => { 
    
    setTimeout(() => {
        grassButton.style.backgroundColor = 'lightgreen';
        grassButton.textContent = 'Chikorita';
    }, "1000");  
});

/// cycle through button text 



function getRandomInt(){
    const textIndex = Math.floor(Math.random() * textCycle.length);
    return textCycle[textIndex];
};




