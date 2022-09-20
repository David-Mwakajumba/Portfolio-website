
// Hambager menu
window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav')

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active')
  })
}

// Add shadow on Scroll
window.addEventListener('scroll',(e)=>{
        const nav = document.querySelector('.nav');
        if(window.pageYOffset>0){
          nav.classList.add("add-shadow");
        }else{
          nav.classList.remove("add-shadow");
        }
      });