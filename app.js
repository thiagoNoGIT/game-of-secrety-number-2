let listRamdomNumber = [];
let limitNumber = 10;
let secretNumber = ramdomNumber ();
let tentatives = 1

function displayText(tag, text) {
    let element = document.querySelector(tag);
    element.innerHTML = text;

    // I was stuck on this part of the code, so I asked ChatGPT for help and it showed me the 
    //typeof and console.error commands. They were a lifesaver! 
    if (typeof responsiveVoice !== 'undefined') {
        responsiveVoice.speak(text, 'US English Female', { rate: 1.2 });
    } else {
        console.error('responsiveVoice não está carregado corretamente.');
    }
}
    
    function displayInitialMessage () {
        displayText ('h1', 'Game of secrety number');
        displayText ('p', 'Choose a number between 1 and 10');
    }

        displayInitialMessage ();

function checkKick() {
    let  tentative = document.querySelector ('input').value;

    if ( tentative == secretNumber) {
        displayText ('h1' , 'right!!!');
        let workTentative = tentatives > 1 ? 'tentatives' : 'tentative'
        let messageTentatives = `you hit the secret number if ${tentatives} ${workTentative}`;
        displayText ('p' , messageTentatives);
        document.getElementById ('refresh').removeAttribute ('disabled');
    } else {
        if (tentative > secretNumber) {
            displayText ('p' , 'the secret number is smaller');
        } else {
            displayText ('p' , 'the secret number is bigger');
        }
        tentatives++
        cleartheBox ();
    }
    console.log ( tentative == secretNumber);
}

function ramdomNumber () {
   let choiceNumber = parseInt(Math.random () * limitNumber + 1);
   let lengthOfTheList = listRamdomNumber.length;

   if (lengthOfTheList == limitNumber) {
    listRamdomNumber = []
   }

   if (listRamdomNumber.includes(choiceNumber)) {
      return ramdomNumber ();
   } else { 
     listRamdomNumber.push (choiceNumber)
     console.log(listRamdomNumber)
     return choiceNumber
   }
   
}
function cleartheBox () { 
    tentative = document.querySelector ('input');
    tentative.value = ''; 
}

function refreshGame () {
    secretNumber = ramdomNumber ();
    cleartheBox ();
    tentatives = 1;
    displayInitialMessage ();
    document.getElementById ('refresh'). setAttribute('disabled',
    true)
}

