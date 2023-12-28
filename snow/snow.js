function getRndIntInclusive(n, m, lg){
  const min = Math.min(n,m)
  const max = Math.max(n,m)
  // const r = Math.round(Math.random() *(max - min + 1) + min)
  const r = Math.round(Math.random()*(max - min) + min)
  if(lg)
    console.log('r: ', r, min, max);
  return r
}
const createSnow = (min, max, sat) => {
  const style = document.createElement('style')

  document.head.append(style)

  style.textContent = `
  body{
    position: relative;
  }
  .snow{
    position: fixed;
    width: 20px;
    height: 20px;
    top: -20px;
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
    animation-name: fall;
    animation-timing-function: linear;
  }
  @keyframes fall{
    100%{
      transform: translateY(100vh);
    }
  }  
  `
  
  const count = 4
  const createSnowItem = () =>{
    const snowItem = document.createElement('div')
    snowItem.className = 'snow'
    const time = getRndIntInclusive(min, max)
    snowItem.style.cssText = `
    left: ${getRndIntInclusive(-2, 102)}vw;
    background-image: url(./snow/snowflake${getRndIntInclusive(1,count)}.svg);
    animation-duration: ${time}s;    
    `
    document.body.append(snowItem)
    setTimeout(() => {snowItem.remove()}, time*1000)
  }
  setInterval(createSnowItem, sat)
}
createSnow(20, 40, 700)