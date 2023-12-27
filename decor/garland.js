const garlandInit = () =>{
  // console.log('garlandInit: ');
  const style = document.createElement('style')
  const elka = document.createElement('div')
  elka.classList.add('garland-elka')
  const garland = document.createElement('div')
  garland.className = 'garland garland_1'
  const myAudio= document.createElement('audio')
  myAudio.id = "myAudio"
  myAudio.setAttribute("NOautoplay", "");
  myAudio.setAttribute("NOcontrols", "");
  myAudio.setAttribute("NOloop", "");
  myAudio.innerHTML = `
  <source src="./decor/Bobby-Helms.mp3" type="audio/mpeg">
`
  document.head.append(style)
  document.body.append(elka, garland, myAudio)


  style.textContent = `
  body{
    position: relative;
  }
  .garland-elka{
    position: fixed;
    inset: 0;
    background-image: url('./decor/elka.png');
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: 400;
  }
  .garland{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 36px;
    background-image: url('./decor/christmas.png');
    pointer-events: none;
    z-index: 399;
  }
  .garland_1{
    background-position: 0 0;
  }
  .garland_2{
    background-position: 0 -36px;
  }
  .garland_3{
    background-position: 0 -72px;
  }
  .garland_4{
    background-position: 0 -108px;
  }
  `
  const garlandClasses = ['garland_1','garland_2','garland_3','garland_4','garland_2','garland_3',]
  let curIndexPrev = 0
  let curIndex = 0
  setInterval(() => {
    let newIndex = curIndex
    while(newIndex === curIndex || newIndex === curIndex){
      newIndex = Math.floor(Math.random() * garlandClasses.length)
    }
    curIndexPrev = curIndex
    curIndex = newIndex
    garland.className = `garland ${garlandClasses[curIndex]}`
  }, 100)

  startSound()
}

let inPlay = false
document.addEventListener('click', startSound);
function startSound(e) {
  if(typeof(isLocal) !== 'undefined' && isLocal) return
  if(e && e.target && e.target.id === 'header'){
    if(inPlay){
      myAudio.pause();
      inPlay = false
      return
    }
    myAudio.src = "./decor/Bobby-Helms.mp3";
    // myAudio.src = "./decor/jingle-bells.mp3";
    myAudio.currentTime = 7;
    document.getElementById('myAudio').play();
    inPlay = true
  }
}
garlandInit()