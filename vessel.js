
function calculate() {

    let resultWeight = document.getElementById("weight").value;
    document.write("<br/>" + "<br/>" + "Введенный общий вес (брутто): " + resultWeight + " кг.");
    
    let itemsSum = document.getElementById("totalUnits").value;
    document.write("<br/>" + "<br/>" + "Общее кол-во штук/связок: " + itemsSum + " шт/св.");

    let oneItemWeight = resultWeight/itemsSum;
    oneItemWeight = oneItemWeight.toFixed(2); 
    document.write("<br/>" + "<br/>" + "Средний вес одной связки: " + oneItemWeight + " кг.");

    let survNumber1 =  document.getElementById("survei1").value; 
    let survNumber2 =  document.getElementById("survei2").value; 
    
    let piecesSurvNumber1 = Math.floor(survNumber1/piecesInlustLift);
    document.write("<br/>" + "<br/>" + "Кол-во связок в первом контрольном взвешивании: " + piecesSurvNumber1 + " св/шт.");
    let piecesSurvNumber2 = Math.floor(survNumber2/piecesInlustLift);
    document.write("<br/>" + "<br/>" + "Кол-во связок во втором контрольном взвешивании: " + piecesSurvNumber2 + " св/шт.");

    let liftSum = document.getElementById("lift").value; 
    document.write("<br/>" + "<br/>" + "Введенный общее кол-во св/шт в одном подъеме: " + liftSum + " св/шт.");

   /*
    //расчет кол-ва подьемов
    
    let liftSumPreTotal = Math.floor(itemsSum/liftSum);
    let piecesInlustLift = itemsSum - (liftSumPreTotal * liftSum );
    
    if (piecesInlustLift > 0) {
    } 
    else {
      false;
    }
    
    let lustLift;
    if (piecesInlustLift > 0) {
      lustLift = 1;
    }
    else {
      lustLift = 0;
    }
    
    let liftSumTotal = liftSumPreTotal + lustLift;
    
    document.write ("<br/" + "<br/>" + "Количество подъемов по " + liftSum + " шт: " + liftSumPreTotal + ".");
    document.write ("<br/" + "<br/>" + "Количество св/шт в последнем подъеме" + piecesInlustLift + ".");
    document.write ("<br/" + "<br/>" + "Общее количество подъемов: " + liftSumTotal);
    
    
    // количество связок в одном подъеме.
    
  
    //выбор случайного числа для каждого подъема
    let randArr = [10, -10, 20 ,-20, 30, -30, 40, -40]
    var rand = Math.floor(Math.random() * randArr.length);
    let def = randArr[rand];
    
    //расчет веса по подъемам 
    
    
    // расчет для 16 связок.
    
    
    let a = (resultWeight/4) + 20;
    let b = (resultWeight/4) - 10;
    let c = (resultWeight/4) + 10;
    let d = (resultWeight/4) - 20;
    
    let array = [a,b,c,d];
    
    if((a+b+c+d) == resultWeight && itemsSum == 16 ){
    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      
      function arraySum(array){
      let sum = 0;
      for(let i = 0; i < array.length; i++){
      sum +=  + array[i];
        }
        document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
        "св. " + "весом " + sum + "кг." + "</strong>");
      }
      arraySum(array);
    }
    else {
        alert ("Что-то пошло не так ((()))")
    }
    */
    //end function calculate
    }


    
    