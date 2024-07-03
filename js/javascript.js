const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
    const url = 'https://www.google.com/search?q' + search.value;
    window.open(url);

})