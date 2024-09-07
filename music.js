let song=document.querySelectorAll(".songitem");
let play= new Audio("assets/songs/song1.mp3");
let pause=document.querySelector(".play");
let prev=document.querySelector("#previous");
let next=document.querySelector("#next");
let progress=document.querySelector("#progressbar");
let txt=document.querySelector("#SongName");
let pkey=0;
let pic=document.querySelector("#gif");
console.log(txt)
let songs=[{name:"Antidote",path:"assets/songs/song1.mp3"},
    {name:"G.O.A.T ",path:"assets/songs/song2.mp3"},
    {name:"Old money",path:"assets/songs/song3.mp3"},
    {name:"Jee Ni Lagda",path:"assets/songs/song4.m4a"},
    {name:"52 bars",path:"assets/songs/song5.m4a"},
    {name:"Khutti",path:"assets/songs/song6.mp3"},
]
function plays(key){
    pkey=key;
    txt.innerHTML=`${songs[pkey].name}`
    play.src=songs[key].path;
    play.play();
    pic.style.opacity=1;
    pause.classList.remove("play");
    
}
song.forEach(songitem => {
    songitem.addEventListener("click",()=>{
        plays(songitem.dataset.key)
    })
});
pause.addEventListener("click",()=>{
    if(play.paused){
        play.play();
        pause.classList.remove("play");
        pic.style.opacity=1;
    }
    else{
        play.pause();
        pause.classList.add("play");
        pic.style.opacity=0;
    }
});
play.addEventListener("timeupdate",()=>{
    let progres=(play.currentTime/play.duration * 100);
    progress.value=progres;
})
next.addEventListener("click",()=>{
    if(pkey<5 && pkey>-1){
        pkey++;
    }
    else{
        pkey=0;
    }
    plays(pkey);
});
progress.addEventListener("change",()=>{
    play.currentTime=progress.value*play.duration / 100;
})
prev.addEventListener("click",()=>{
    if(pkey>0 && pkey<6){
        pkey--;
    }
    else{
        pkey=5;
    }
    plays(pkey);
});
