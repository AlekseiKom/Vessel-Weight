
    function calculate() {
     event.preventDefault();

    let totalWeight = document.getElementById("weight").value; //Общий вес
    let itemsSum = document.getElementById("totalUnits").value;  //Общее кол-во св/шт
    let liftSumItems = document.getElementById("lift").value;   //Ко-во в одном подъеме
    let surWeight1 = document.getElementById("survei1").value; //Вес сюрв. 1
    let surWeight2 = document.getElementById("survei2").value; //Вес сюрв. 2
    let resultField = document.getElementById("testResult");  //Окно результата 


     let oneItemWeight = parseFloat(totalWeight/itemsSum);  //рассчет веса одной св./шт.
    
       function roundTo10(num) {      //округление до 10
        return Math.round(num/10)*10;
        }

     liftSumWeight = roundTo10(liftSumItems*oneItemWeight); //расчет веса одного подъема

     //Вывод основных данных
     resultField.innerHTML= 
     "Введенный общий вес (брутто) :  "  +  totalWeight + " кг." + "<br>" +
     "Общее кол-во св/шт. :  "  +  itemsSum + " ." + "<br>" +
     "Средний вес одной св/шт. :  " + oneItemWeight + " кг." + "<br>" +
     "Средний вес одного подъема из " + liftSumItems + " св/шт." + " =  " + liftSumWeight + " кг."; 

    }


    