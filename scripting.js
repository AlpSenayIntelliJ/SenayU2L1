var total = 0;

function roll() {
    var rollNumber = 1 + Math.floor(Math.random() * 6);
    total = total + rollNumber;
    return rollNumber;
}

function rollDice() {
    const para = document.createElement('p');
    const para1 = document.createElement('p');
    para.textContent = "You rolled a " + roll();
    para1.textContent = "Your combined total is " + total;
    document.body.appendChild(para);
    document.body.appendChild(para1);
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener('click', rollDice);
}