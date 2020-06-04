
    function calculate() {
     event.preventDefault();

    let totalWeight = document.getElementById("weight").value;   //Общий вес
    let itemsSum = document.getElementById("totalUnits").value;  //Общее кол-во св/шт
    let liftSumItems = document.getElementById("lift").value;    //Ко-во в одном подъеме
    let surWeight1 = document.getElementById("survei1").value;   //Вес сюрв. 1
    let surWeight2 = document.getElementById("survei2").value;   //Вес сюрв. 2
    let resultField = document.getElementById("testResult");     //Окно предварительного расчета 
    //let mainResultField = document.getElementById("mainResult");  //Окно основной перевески 

     let oneItemWeight = parseFloat(totalWeight/itemsSum);         //Рассчет веса одной св./шт.
    
       function roundTo10(num) {      //округление до 10
        return Math.round(num/10)*10;
        }

     liftSumWeight = roundTo10(liftSumItems*oneItemWeight);        //Расчет веса одного подъема

                                                                   //Вывод предварительных данных для расчета
     resultField.innerHTML= 
     "Введенный общий вес (брутто) :  "  +  totalWeight + " кг." + "<br>" +
     "Общее кол-во св/шт. :  "  +  itemsSum + " ." + "<br>" +
     "Средний вес одной св/шт. :  " + (oneItemWeight.toFixed(3)) + " кг." + "<br>" +
     "Средний вес одного подъема из " + liftSumItems + " св/шт." + " =  " + liftSumWeight + " кг."; 
     
      
     //               Р А С Ч Е Т    О С Н О В Н О Й    П Е Р Е В Е С К И 
      
      let totaLiftSum, lastLiftItems, lastLift;

      mainLiftsSumItems = liftSumItems*(Math.floor(itemsSum/liftSumItems)); //Расчет кол-ва св./шт без последнего подъема 

      mainLifts = mainLiftsSumItems/liftSumItems;                  //Расчет основного кол-ва подъемов

      lastLiftItems =  itemsSum - mainLiftsSumItems                //Расчет кол-ва в последнем подъеме
      if (lastLiftItems > 0) {
        lastLift = 1
       }
      else {
        lastLift = 0;
       }
       
      lastLiftWeight = roundTo10(lastLiftItems*oneItemWeight);     //Расчет веса в поледнего подъема
      
      totaLiftSum = Math.floor(itemsSum/liftSumItems) + lastLift;  //Общее кол-во подъемов
      
      //Выбор случайного числа (разлет до 80 кг) при расчете погрешности по весу каждой св./шт  
      
      /*function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
  
      let randArr = [10, -10, 20 ,-20, 0, 30, -30, 40, -40]        
      let rand = Math.floor(Math.random() * randArr.length);
      let diff = randArr[rand];

      console.log(diff);*/
    
      let weightSum = []; 

      for (step = 0; step < mainLifts; step++) {
        weightSum.push(liftSumWeight);
      }
      if (lastLift > 0) {
      weightSum.push(lastLiftWeight);
      }
                                                                    //Рабочий рандомайзер для массива
      weightSumLust = [];                                                            
      let arr = new Array(10, 20, 30, 40, 0, -10, -20, -30, -40); 
      for (let index = 0; index < weightSum.length; ++index) {
          let randElement = arr[Math.floor(Math.random()*(arr.length))];
          let value =weightSum[index] + randElement;
          weightSumLust.push(value);
      }

                                                                    //Сумма элементов массива
      function arraySum(array){
      let sum = 0;
      for(var i = 0; i < array.length; i++){
          sum += array[i];
          }
          return sum;    
      }

      let correction = totalWeight - (arraySum(weightSumLust));     //Разница с основным весом
    

      
      //тестовый вывод
      console.log('Основное число подъемов (кол-во) = ' + mainLifts + ' по ' + liftSumItems + ' св./шт')
      console.log('Кол-во в основных подъемах = ' + mainLiftsSumItems);
      console.log('Кол-во в последнем подъеме = ' + lastLiftItems);
      console.log('Общее кол-во подъемов = ' + totaLiftSum);
      console.log("Предварительный массив  " + weightSum);
      console.log('Обработанный массив без корректировки  ' + weightSumLust);
      console.log('Сумма элементов массива = ' + arraySum(weightSumLust));
      console.log('Разница с основным весом = ' + correction); 
    



    }


    