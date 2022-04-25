const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audio = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const deg = 45; //각각의 article요소가 회전할 각도
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼줌
let i = 0; 
let num = 0; 
let active = 0; 



//아티클의 개수만큼 반복
for(let el of lists) {  
 //각 article 요소 안쪽의 재생, 정지, 처음부터 재생 버튼을 변수에 저장
 let play = el.querySelector(".play");
 let pause = el.querySelector(".pause");
 let load = el.querySelector(".load");

 //play버튼 클릭 시, 
 play.addEventListener("click", e=>{
     let isActive = e.currentTarget.closest("article").classList.contains("on");
     if(isActive){
         e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
         e.currentTarget.closest("article").querySelector("audio").play(); 
     }              
 });

 //pause버튼 클릭 시
 pause.addEventListener("click", e=>{
     let isActive = e.currentTarget.closest("article").classList.contains("on");
     if(isActive){
         e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
         e.currentTarget.closest("article").querySelector("audio").pause();
     }
             
 });

 //load버튼 클릭 시
 load.addEventListener("click", e=>{
     let isActive = e.currentTarget.closest("article").classList.contains("on");
     if(isActive){
         e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
         e.currentTarget.closest("article").querySelector("audio").load();   
         e.currentTarget.closest("article").querySelector("audio").play(); 
     }          
 });
}


//모든 오디오 요소를 반복하면서 정지시키고 .pic 요소의 모션을 중지해서 초기화하는 함수
function initMusic(){
 for( let el of audio ){
     el.pause();
     el.load();
     el.closest("article").querySelector(".pic").classList.remove("on");
 }
}



