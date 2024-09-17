const btnDOM = document.querySelector('button');
const textDOM = document.querySelector('p');
const url = 'https://api.chucknorris.io/jokes/random';

btnDOM.addEventListener('click', () => {
    fetch(url).then(res => (res.json().then(data => textDOM.textContent = data.value)));
});

// function getApi() {
//     fetch(url).then(res => (res.json().then(console.log(data.value))));
// }

// getApi();