document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('p').style.color = 'green';
    document.querySelector('.blue').style.color = 'blue';
    /*  선책  */
    let list1 = document.querySelectorAll('#list1 li');
    list1.forEach((el, idx) => {
        el.textContent+=`🍕${idx}🍕textContent로 추가`
        el.claddList.add(`a${idx}`)
        el.style.marginLeft(`${idx}px`)
    });
    let list2 = document.querySelector ('#theObj');
    list2.innerHTML=`<span>${Math.random()}</span>`
    list2.setAttribute('data-set','accessbillity');
    console.log(list2.getAttribute('class'));//theObj
});
