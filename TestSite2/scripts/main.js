const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
    const name = prompt("What is your name?");
    alert(`Hello, ${name}, nice to meet you`);
    headingA.textContent = `Welcome ${name}`  
};