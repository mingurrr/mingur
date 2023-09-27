const large = document.querySelector('#large');
const small = document.querySelector('.small');

small.forEach((el) => {
    el.addEventListener('click', function () {
        let change = this.src;
        large.setAttribute('src', change);
    });
});

document.querySelector('#view').addEventListener('click', function () {
    document.querySelector('#detail').style.display = 'block';
});





//  function displaySrc () {
//     alert("이미지주소" + large.getAttribute('src'));
// } 
