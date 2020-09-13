function calculate(type, number) {
  if(type === 'action'){
    
    if(number === 'c'){
      document.getElementById('result').value = ''
    }

    if(number === '+' || number === '-' || number === '*' || number === '/' || number === '.'){
      document.getElementById('result').value += number
    }

    if(number === '='){
      var number_campo = eval(document.getElementById('result').value)
      
      document.getElementById('result').value = number_campo
    }

  } else if(type ==='number'){
    document.getElementById('result').value += number
  }
}


function modifyTitleColor(BackgroundColor){
    document.getElementById('title-color').style.color = BackgroundColor
}


function modifyBackgroundSite(BackgroundColor){
    document.getElementById('background-site-color').style.background = BackgroundColor
}


function modifyBackgroundCalc(BackgroundColor){
    document.getElementById('background-calc-color').style.background = BackgroundColor
}


var visibility = true;
function showHide() {
    if (visibility) {
        document.getElementById("show-hide").className = "div-colors";
        visibility = false;

    } else {
        document.getElementById("show-hide").className = "hide";
        visibility = true;
    }
}
