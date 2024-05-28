// EXO 1 //

// const bold = document.querySelector("b");

// bold.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = 'beige';

// bold.style.color = 'red';

// bold.parentElement.parentElement.parentElement.style.backgroundColor = 'darkblue';
// bold.parentElement.parentElement.parentElement.style.color = 'white'

// bold.parentElement.parentElement.parentElement.querySelector('a').style.color = 'pink';

// bold.parentElement.parentElement.parentElement.previousElementSibling.querySelector('ul').style.color = 'orange';

// bold.parentElement.parentElement.parentElement.previousElementSibling.querySelector('ul').querySelectorAll('a').forEach((item)=>item.style.color='green');

// bold.parentElement.parentElement.parentElement.previousElementSibling.querySelector("h1").style.textTransform = 'upperCase';

// EXO 2 //

// const butons = (x) => {
// if (typeof x == "number") {let where = document.querySelector('.container');
//     for (let i=1;i<=x;i++) { 
//         const btn = document.createElement('button');
//         btn.type = 'button';
//         btn.textContent = `I am button ${i}`;
//         where.appendChild(btn);
//         }
//     }
// }

// const change = () => {document.querySelector('h1').innerText = 'There are a lot of buttons here!'};


// setTimeout(butons,2000,100);
// setTimeout(change,2000);

// EXO 3 //

// document.querySelector('.highlight').classList.remove('highlight');

// document.querySelector('.highlight').classList.remove('highlight');

// document.querySelector('.highlight').classList.remove('highlight');

// document.querySelector('ul').getElementsByTagName('li')[1].classList.add('highlight');

// document.querySelector('ul').getElementsByTagName('li')[3].classList.add('highlight');

// EXO 4 //

// const pokemons = () => {
// var cont = document.querySelector('.container');
// for (let i=7;i<152;i++) {
//     var pic = document.createElement('img');
//     pic.src =
//     `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//     cont.appendChild(pic);
// }
// }

// pokemons();

//#region EXOS 8 

//EXO 1
// const buttonHello = document.querySelector("button");

// const alertBtn = () => {
//     alert("Oh my God ! You again !!!");
// };

// buttonHello.addEventListener("click", alertBtn);

// const alertBtn2 = () => {
//     alert("Thank God ! I thought you'd' never leave !");
// };

// const buttonGood = document.querySelector('button').nextElementSibling;

// buttonGood.addEventListener("click", alertBtn2);

// EXO 2 

