var imgs = document.querySelectorAll('.billboard-img');
var panels = document.querySelectorAll('.panel');
var frames=document.querySelectorAll('iframe');

for(i = 0; i < imgs.length; i++) {
  var img = imgs[i];
  setimgHandler(img, i);
}

function setimgHandler(img, imgPos) {
  img.onclick = function() {
    for(i = 0; i < panels.length; i++) {
      if(panels[i].getAttribute('class')) {
        panels[i].removeAttribute('class');
        panels[i].setAttribute('class','panel')
      }
    }

    panels[imgPos+1].setAttribute('class', 'panel active-panel');
  }
}

window.setInterval(changeImg,5000);
function changeImg(){
  if(imgs[0].classList=='billboard-img pos-bottom-left'){
    imgs[0].classList='billboard-img';
    imgs[1].classList='billboard-img pos-bottom-left';
  //  alert('1');
  } else {
    imgs[1].classList='billboard-img';
    imgs[0].classList='billboard-img pos-bottom-left';
   // alert('2');
  }
}

//-------------------------for container panel
let btns=document.querySelectorAll('iframe+button');
for(i=0;i<btns.length;i++){
  btns[i].onclick=function(){
    for(i = 0; i < panels.length; i++) {
      if(panels[i].getAttribute('class')) {
        panels[i].removeAttribute('class');
        panels[i].setAttribute('class','panel')
      }
    }
    panels[0].setAttribute('class', 'panel active-panel');


    let e=document.createEvent('Event');
    e.initEvent("click", true, true);
    frames[0].dispatchEvent(e);
  }
}
//----------------------for nav label
// var lis=document.querySelectorAll('.nav ul li');
// var label=document.querySelector('.fly-icon label');

// for(i=0;i<lis.length;i++){
//   lis[i].addEventListener('click',clickLi);
// }

// function clickLi(){
//   var aside=document.querySelector('aside');
//   aside.setAttribute('class','hello');
// }
