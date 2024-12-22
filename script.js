let newDate = new Date();
let clock =  document.querySelector('.clock')
clock.innerHTML = newDate.toLocaleTimeString();
setInterval(()=>
{
  location.reload();
},1000)

