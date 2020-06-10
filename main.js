
    function calculate() {
     event.preventDefault();

    let totalWeight = document.getElementById("weight").value;   //Общий вес
    let itemsSum = document.getElementById("totalUnits").value;  //Общее кол-во св/шт
    let liftSumItems = document.getElementById("lift").value;    //Ко-во в одном подъеме
    //let surWeight1 = document.getElementById("survei1").value;   //Вес сюрвейера 1
    //let surWeight2 = document.getElementById("survei2").value;   //Вес сюрвейера 2 
    let resultField = document.getElementById("testResult");     //Окно предварительного расчета 
    let mainResultField = document.getElementById("mainResult");  //Окно основной перевески 

     /* if (totalWeight||itemsSum||liftSumItems = '') {               //Проверка заполнения формы /перезакгрузка страницы
      alert ('Все поля обязательны для заполнения и не должны быть равны или меньше нуля.');
        // location.reload();
     }*/

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
      console.log("Предварительный массив  " + weightSum);
                                                                    //Рабочий рандомайзер для массива
      weightSumLust = [];                                                            
      let arr = new Array(10, 20, 0, 30, 40, 0, -10, -20, 0, -30, -40); 
      for (let index = 0; index < weightSum.length; ++index) {
          let randElement = arr[Math.floor(Math.random()*(arr.length))];
          let value =weightSum[index] + randElement;
          weightSumLust.push(value);
      }

      console.log('Обработанный массив без корректировки  ' + weightSumLust);

                                                                    //Сумма элементов массива
      function arraySum(array){
      let sum = 0;
      for(var i = 0; i < array.length; i++){
          sum += array[i];
          }
          return sum;    
      }
      

      let correction = totalWeight - (arraySum(weightSumLust));     //Разница с основным весом
       
      if (correction <= 80) {                                       //Распределение разницы по элементам массива
      weightSumLust[0] = weightSumLust[0] + correction; 
      } 
      else if (80 <= correction <= 200) {
      weightSumLust[0] = weightSumLust[0] + 80;
      weightSumLust[2] = weightSumLust[2] + (correction - 80);
      }  
      else if (200 <= correction <= 300 ){
        weightSumLust[0] = weightSumLust[0] + 70;
        weightSumLust[2] = weightSumLust[2] + 70; 
        weightSumLust[4] = weightSumLust[4] + 60;
        weightSumLust[6] = weightSumLust[6] + (correction-200);
      }  
      else if (300 <= correction <= 400 ){
        weightSumLust[0] = weightSumLust[0] + 70;
        weightSumLust[2] = weightSumLust[2] + 80; 
        weightSumLust[3] = weightSumLust[3] + 70; 
        weightSumLust[5] = weightSumLust[5] + 80;
        weightSumLust[6] = weightSumLust[6] + (correction-300);
      }    
      else if (300 <= correction <= 400 ){
        weightSumLust[0] = weightSumLust[0] + 70;
        weightSumLust[2] = weightSumLust[2] + 80; 
        weightSumLust[3] = weightSumLust[3] + 70; 
        weightSumLust[5] = weightSumLust[5] + 80;
        weightSumLust[6] = weightSumLust[6] + (correction-300);
      }
      else if (correction >= -80) {                                      
        weightSumLust[0] = weightSumLust[0] + correction; 
      }  
      else if (-80 >= correction >= -200) {
        weightSumLust[0] = weightSumLust[0] + (-80);
        weightSumLust[2] = weightSumLust[2] + (correction + 80);
      }  
    
      else {
        weightSumLust[0] = weightSumLust[0] + correction; 
      } 
            
     
       /*  if (correction%2 == 0) {
         corePart = correction/2;
         console.log("Разница кратна 2 и = " + corePart);
       }
       else if (correction%3 == 0) {
        corePart = correction/3; 
        console.log("Разница кратна 3 и = " + corePart);
       }
       else if (correction%4 == 0) {
        corePart = correction/4; 
        console.log("Разница кратна 4 и = " + corePart);
       }
       else if (correction%5 == 0) {
        corePart = correction/5; 
        console.log("Разница кратна 5 и = " + corePart);
       }
       else if (correction%6 == 0) {
        corePart = correction/6; 
        console.log("Разница кратна 6 и = " + corePart);
       }
       else if (correction%7 == 0) {
        corePart = correction/7; 
        console.log("Разница кратна 7 и = " + corePart);
       }
       else if (correction%8 == 0) {
        corePart = correction/8; 
        console.log("Разница кратна 8 и = " + corePart);
       }
       else if (correction%9 == 0) {
        corePart = correction/9; 
        console.log("Разница кратна 9 и = " + corePart);
       }
       else if (correction == 0 || 10 || -10 ) { 
        corePart = correction; 
        console.log("Разница невелика и = " + corePart);
       }
       else {
        corePart = correction; 
        console.log("Разница = " + corePart);
       }  */

      
      //тестовый вывод
      
      mainResultField.innerHTML = 
      'Основное число подъемов (кол-во) = ' + mainLifts + ' по ' + liftSumItems + ' св./шт'  + "<br>" +
      'Кол-во в основных подъемах = ' + mainLiftsSumItems + "<br>" +
      'Кол-во в последнем подъеме = ' + lastLiftItems + "<br>" +
      'Общее кол-во подъемов = ' + totaLiftSum + "<br>" +
      'Сумма элементов массива = ' + arraySum(weightSumLust) + "<br>" +
      'Разница с основным весом = ' + correction  + "<br>" +
      "Массив с учетом корректировки:  " + weightSumLust + "<br>" 


      /*
      console.log('Основное число подъемов (кол-во) = ' + mainLifts + ' по ' + liftSumItems + ' св./шт')
      console.log('Кол-во в основных подъемах = ' + mainLiftsSumItems);
      console.log('Кол-во в последнем подъеме = ' + lastLiftItems);
      console.log('Общее кол-во подъемов = ' + totaLiftSum);
      console.log('Сумма элементов массива = ' + arraySum(weightSumLust));
      console.log('Разница с основным весом = ' + correction); 
      console.log("Массив с учетом корректировки:  " + weightSumLust) */
    
      } 