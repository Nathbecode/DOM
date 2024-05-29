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
// const btn = document.querySelectorAll("button");
// btn.forEach((item)=>{item.addEventListener('click',function(){item.nextElementSibling.classList.toggle('hidden');
// if(item.innerText=='Open tab'|| item.nextElementSibling.className != 'hidden') {item.innerText = 'Close tab'}
// else if(item.innerText=='Close tab'|| item.nextElementSibling.className == 'hidden') {item.innerText = 'Open tab'}

// })})
    //     {item.innerText = 'Close tab'};});
    // if(item.innerText = 'Close tab'){item.innerText = 'Open tab'};})
// addEventListener("click",alert);
//.addEventListener('click',function(){item.parentElement.classList.remove('hidden');

// EXO 3

// const button = document.querySelector('button');

// const color = () => {
//     let x =()=> Math.floor((Math.random() * 255) + 1);
//     document.querySelector('body').style.backgroundColor = `rgb(${x()}, ${x()}, ${x()})`;
//     const h1 = document.querySelector('body');
//     const style = window.getComputedStyle(h1).backgroundColor;
//     document.querySelector('h1').innerText = style;
// }

// button.addEventListener('click',color);

//region SCORE KEEPER


// const btn = document.querySelector('body');
// let x=0;
// let score1 = document.querySelector('h2').firstChild;
// let stylescore1 = document.querySelector('h2').querySelector('span');
// stylescore1.style.color = 'black';
// let y=0;
// let array = document.querySelector('h2').getElementsByClassName("play2");
// let score2 = array[0];
// let stylescore2 = document.querySelectorAll('span')[1];
// let z;

// btn.addEventListener('click',(e) => {
//     if (e.target.innerText === "+1 player One") {
//         if (x<5 && !(y+x>=5)) {
//             x++;
//         score1.innerText= `${x}`}        
//         }   if (e.target.innerText === "+1 player Two") {
//         if (y<5 && !(y+x>=5)) {
//             y++;
//             score2.innerText= `${y}`}            
//         }
//         if(x>y) {
//         stylescore1.style.color = 'green';
//         } else if (x<y) {
//             stylescore1.style.color = 'red'
//         }
//         if(y>x) {
//             stylescore2.style.color = 'green'
//         } else if (y<x) {
//             stylescore2.style.color = 'red'
//         }
//     if (e.target.innerText === "Reset") {
//         x=0;
//         score1.innerText= `${x}`
//         y=0
//         score2.innerText= `${y}`
//         stylescore1.style.color = 'black';
//         stylescore2.style.color = 'black';
//     }
// })

//