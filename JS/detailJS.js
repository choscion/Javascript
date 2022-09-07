var tabBtnAll = document.querySelectorAll('.tab-button');
var tabBtn = document.querySelector('.tab-button');
var tabCont = document.querySelectorAll('.tab-content');

tabBtnAll[0].addEventListener('click', ()=>{
  tabBtn.classList.remove('orange');
  tabBtnAll[0].classList.add('orange');
  // tabCont.classList.remove('show');
  // tabCont[1].classList.add('show');
  console.log('click');
  console.log(tabBtnAll[0].classList);
  console.log(tabBtn.classList);
});