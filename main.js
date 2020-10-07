let rollthedice = document.querySelector('#roll-the-dice');
let rollbutton = document.querySelector('#roll');
let showallrolls = document.querySelector("#show-all-rolls");
let totalresult = document.querySelector("#total-result");
let dierolls = [];


rollbutton.addEventListener('click', function(){
    console.log('works');
    let rollthedicenumber = rollthedice.value;
    console.log(rollthedicenumber);
 
    let count= 0

    while (count <rollthedicenumber){
       // console.log(count)
       let randomnumber =  Math.ceil(Math.random()*6) 
      console.log(randomnumber)
      dierolls.push(randomnumber);
      
        count++;
    }
    console.log(dierolls)

    totalresult.innerHTML += totalresult
         
}) 
 showallrolls.addEventListener('click', function(){
    console.log(showallrolls);

 })


