let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');

    if(mySrc=='images/world.jpg'){
        myImage.setAttribute('src','images/world1.png');

    } else {
   
        myImage.setAttribute('src','images/world.jpg');
    }
}
let myButton=document.querySelector("Button");
let myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt('你的名字');
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.innerHTML="your name is: " + myName;
    }
    
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName=localStorage.getItem('name');
    myHeading.textContent='你好啊 ' + storedName;
}

myButton.onclick=function(){
    setUserName();
}