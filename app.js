const fireButton = document.querySelector('.fireButton');

fireButton.addEventListener('mouseover', () => {
    fireButton.style.backgroundColor = 'red';
    fireButton.style.changeText = 'Quilava';
});

fireButton.addEventListener('mouseout', () => {
    fireButton.style.backgroundColor = 'orange';
    fireButton.style.text = 'Cyndaquil';
});

/// 

const textCycle = ['Pick me!', 'No, pick me!', 'Choose me!'];

function getRandomInt(){
    const textIndex = Math.floor(Math.random() * textCycle.length);
    return textCycle[textIndex];
};