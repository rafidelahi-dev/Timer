const countdown = document.getElementById('countdown');
console.log(countdown.innerText);
let second = 0;
function change(){
  countdown.innerText= `${second}s`;  
  console.log((countdown.innerText = `${second}s`))
  if(second <10){
   second+=1;
  }
  else if(second === 10){
   clearInterval(interval);
  }
}
change();
const interval = setInterval(change, 1000);