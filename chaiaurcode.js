//generate a random color

const randomcolor =function(){
  const hex="0123456789ABCDEF"
  let color="#"
  for(let i=0;i<6;i++){
    color+= hex[Math.floor(Math.random()*16)]

  }
    return color
}
let intervalid;
// console.log(randomcolor())
const startChangingcolor=function(){
  if(!intervalid)
  {
    intervalid=setInterval(changeBgcolor,1000)
  }
  
  function changeBgcolor(){
    document.body.style.backgroundColor=randomcolor()
  }
}
const stopChangingcolor=function(){
clearInterval(intervalid)
intervalid=null

}
document.querySelector("#start").addEventListener('click',startChangingcolor)
document.querySelector("#stop").addEventListener('click',stopChangingcolor)


