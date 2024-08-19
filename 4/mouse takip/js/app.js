const bebekler=document.getElementsByClassName('bebek');

document.onmousemove=function(){
    let x= event.clientX*100/window.innerWidth+"%";
    let y= event.clientY*100/window.innerHeight+"%";
//console.log(x,y)
 //=========>> kisa yontem<<===========

for(var i=0;i<2;i++){
    bebekler[i].style.top=y;
    bebekler[i].style.left=x;
 }
 //=========>> uzun yontem<<===========
// bebekler[0].style.top=y;
// bebekler[0].style.left=x;
// bebekler[1].style.top=y;
// bebekler[1].style.left=x;
}

