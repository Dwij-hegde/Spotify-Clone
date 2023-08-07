let songIndex=0;
let audioElement = new Audio("songs/gasolina.mp3.mp3"); 
let masterPlay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar')
let masterSongName = document.getElementById("masterSongName");
let songitems=Array.from(document.getElementsByClassName('songitem'))

let songs = [
  {
    songName: "Gasolina",
    filepath: "songs/gasolina.mp3.mp3",
    coverpath: "photos/dady yanke.jpg",
  },
  {
    songName: "Dandelions",
    filepath: "songs/dandelions.mp3.mp3",
    coverpath: "photos/ruthb.jpg",
  },
  {
    songName: "Mary on a Cross",
    filepath: "songs/mary on a cross.mp3.mp3",
    coverpath: "photos/mary on a cross.jpg",
  },
  {
    songName: "Perfect",
    filepath: "songs/perfect.mp3.mp3",
    coverpath: "photos/ed sheeran.jpg",
  },
  {
    songName: "Untill I Found you",
    filepath: "songs/until i found you.mp3.mp3",
    coverpath: "photos/untill i found you.jpg",
  },
  {
    songName: "Sing for the Moment",
    filepath: "songs/sing for the moment.mp3.mp3",
    coverpath: "photos/eminem.jpg",
  }
];
songitems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src= songs[i].coverpath;
   element.getElementsByClassName("songname").innerText= songs[i].songName;
})

// audioElement.play()

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove("fa-solid-fa-play-circle");
      masterPlay.classList.add("fa-solid-pause");
    } 
    else {
    audioElement.pause();
    masterPlay.classList.remove("fa-solid-fa-pause");
    masterPlay.classList.add("fa-solid-fa-play-circle");
    }

    })

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value *audioElement.duration/100;
})


const makeAllPlays=()=>{
 
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.classList.add('fa-play-circle')
   element.classList.remove('fa-pause-circle');

})
}  

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.addEventListener('click',(e)=>{
          makeAllPlays();
          index = parseInt(e.target.id);
       console.log(audioElement);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`songs/${index}.mp3`;
        audioElement.currentTime =0;
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')


      })
})
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex }.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex }.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
