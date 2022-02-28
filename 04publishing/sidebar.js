//사이드js
//선택지 2개 - window.onload
//           - js코드를 아래쪽에 삽입
window.onload = function(){

    var menuBtn = document.querySelector(".menuBtn"); //오타 apply인한 오류

    menuBtn.addEventListener("click", onSidenav);

}

function onSidenav() {

    var side = document.querySelector(".side"); //side태그
    if(side.style.width == '200px') { //너비가 200이면
        side.style.width = '0px';
    } else {
        side.style.width = '200px';
    }


}