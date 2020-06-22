
function calculate() {

  let resultWeight = document.getElementById("weight").value;
  let itemsSum = document.getElementById("totalUnits").value;
    // Подсчет подъема let liftSum = document.getElementById("lift").value;
  
  
  //вывод данных
  document.write("<br/>" + "<br/>" + "Введенный общий вес (брутто): " + resultWeight + "кг.");
  document.write("<br/>" + "<br/>" + "Общее кол-во связок: " + itemsSum + " шт.");
  
    /*//расчет кол-ва подьемов
    let liftSumPreTotal = Math.floor(itemsSum/liftSum);
    document.write ("<br/" + "<br/>" + "Количество подъемов по " + liftSum + " шт: " + liftSumPreTotal + ".");
    let piecesInlustLift = itemsSum - (liftSumPreTotal * liftSum );
    if (piecesInlustLift > 0) {
      document.write ("<br/" + "<br/>" + "Количество св/шт в последнем подъеме " + piecesInlustLift + ".");
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
     document.write ("<br/" + "<br/>" + "Общее количество подъемов: " + liftSumTotal);*/
  


  
  //вес одной связки
  let oneItemWeight = resultWeight/itemsSum;
  oneItemWeight = oneItemWeight.toFixed(2); 
  document.write("<br/>" + "<br/>" + "Средний вес одной связки: " + oneItemWeight + "кг.");
  
  //Р А С Ч Е Т   В Е С А   П О   П О Д Ъ Е М А М 
    
  //выбор случайного числа
  let randArr = [10, -10, 20 ,-20, 30, -30, 40, -40]
  let rand = Math.floor(Math.random() * randArr.length);
  var def = randArr[rand];
    
  //округление до 10
  function roundTo10(num) {
      return Math.round(num/10)*10;
  }

  
    if (itemsSum == 5)   {

    let a = roundTo10((resultWeight/5)*2) - 10;
    let b = roundTo10((resultWeight/5)*2) + 10;
    let c = roundTo10((resultWeight/5)*1) - 0;
    let correction = ((resultWeight-(a+b+c)));
    let aC = a + correction;
    
    let array = [aC,b,c];
    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 2 св/шт.: 2;</br> В последнем подъеме: 1 св/шт. ");   
      function arraySum(array){
      let sum = 0;
      for(let i = 0; i < array.length; i++){
      sum +=  + array[i];
        }
        document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
        "св. " + "весом " + sum + "кг." + "</strong>" );
      }
      arraySum(array);
    }  

     
    else if (itemsSum == 6)   {

      let a = roundTo10((resultWeight/6)*2) - 10;
      let b = roundTo10((resultWeight/6)*2) + 10;
      let c = roundTo10((resultWeight/6)*2) - 0;
      let correction = ((resultWeight-(a+b+c)));
      let aC = a + correction;
      
      let array = [aC,b,c];
      
        document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
        document.write ("<br/" + "<br/>" + "Количество подъемов по 2 св/шт.: 3."); 

        function arraySum(array){
        let sum = 0;
        for(let i = 0; i < array.length; i++){
        sum +=  + array[i];
          }
          document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
          "св. " + "весом " + sum + "кг." + "</strong>" );
        }
        arraySum(array);
      }  

    else if (itemsSum == 7)   {

      let a = roundTo10((resultWeight/7)*3) - 10;
      let b = roundTo10((resultWeight/7)*3) + 10;
      let c = roundTo10((resultWeight/7)*1) - 0;
      let correction = ((resultWeight-(a+b+c)));
      let aC = a + correction;
      
      let array = [aC,b,c];
      
        document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
        document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 2;</br> В последнем подъеме: 1 св/шт. "); 
        
        function arraySum(array){
        let sum = 0;
        for(let i = 0; i < array.length; i++){
        sum +=  + array[i];
          }
          document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
          "св. " + "весом " + sum + "кг." + "</strong>" );
        }
        arraySum(array);
      }  

    else if (itemsSum == 8)   {

      let a = roundTo10((resultWeight/8)*3) - 10;
      let b = roundTo10((resultWeight/8)*3) + 10;
      let c = roundTo10((resultWeight/8)*2) - 0;
      let correction = ((resultWeight-(a+b+c)));
      let aC = a + correction;
      
      let array = [aC,b,c];
      
        document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
        document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 2;</br> В последнем подъеме: 2 св/шт. "); 
        
        function arraySum(array){
        let sum = 0;
        for(let i = 0; i < array.length; i++){
        sum +=  + array[i];
          }
          document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
          "св. " + "весом " + sum + "кг." + "</strong>" );
        }
        arraySum(array);
      }  
  
    else if (itemsSum == 9)   {

    let a = roundTo10((resultWeight/9)*3) + 10;
    let b = roundTo10((resultWeight/9)*3) + 0;
    let c = roundTo10((resultWeight/9)*3) - 10;
    let correction = ((resultWeight-(a+b+c)));
    let aC = a + correction;
    
    let array = [aC,b,c];
    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 3.</br> "); 
      
      function arraySum(array){
      let sum = 0;
      for(let i = 0; i < array.length; i++){
      sum +=  + array[i];
        }
        document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
        "св. " + "весом " + sum + "кг." + "</strong>" );
      }
      arraySum(array);
    }  


   else if (itemsSum == 10)   {

    let a = roundTo10((resultWeight/10)*3) - 10;
    let b = roundTo10((resultWeight/10)*3) + 10;
    let c = roundTo10((resultWeight/10)*3) - 10;
    let d = roundTo10((resultWeight/10)*1) + 10;
    let correction = ((resultWeight-(a+b+c+d)));
    let aC = a + correction;
    
    let array = [aC,b,c,d];
    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 3;</br> В последнем подъеме: 1 св/шт. "); 
      
      function arraySum(array){
      let sum = 0;
      for(let i = 0; i < array.length; i++){
      sum +=  + array[i];
        }
        document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
        "св. " + "весом " + sum + "кг." + "</strong>" );
      }
      arraySum(array);
    } 

  else if (itemsSum == 11)   {

    let a = roundTo10((resultWeight/11)*3) - 10;
    let b = roundTo10((resultWeight/11)*3) + 10;
    let c = roundTo10((resultWeight/11)*3) - 10;
    let d = roundTo10((resultWeight/11)*2) + 10;
    let correction = ((resultWeight-(a+b+c+d)));
    let aC = a + correction;
    
    let array = [aC,b,c,d];
    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 3св/шт.: 3;</br> В последнем подъеме: 2 св/шт. "); 
     
      function arraySum(array){
      let sum = 0;
      for(let i = 0; i < array.length; i++){
      sum +=  + array[i];
        }
        document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
        "св. " + "весом " + sum + "кг." + "</strong>" );
      }
      arraySum(array);
    } 


  else if (itemsSum == 12)   {

    let a = roundTo10((resultWeight/12)*3) - 10;
    let b = roundTo10((resultWeight/12)*3) + 10;
    let c = roundTo10((resultWeight/12)*3) - 10;
    let d = roundTo10((resultWeight/12)*3) + 10;
    let correction = ((resultWeight-(a+b+c+d)));
    let aC = a + correction;
    
    let array = [aC,b,c,d];
    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 4.</br>  "); 
     
      function arraySum(array){
      let sum = 0;
      for(let i = 0; i < array.length; i++){
      sum +=  + array[i];
        }
        document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
        "св. " + "весом " + sum + "кг." + "</strong>" );
      }
      arraySum(array);
    } 
  
  else if (itemsSum == 13)   {

    let a = roundTo10((resultWeight/13)*3) - 10;
    let b = roundTo10((resultWeight/13)*3) + 10;
    let c = roundTo10((resultWeight/13)*3) - 10;
    let d = roundTo10((resultWeight/13)*3) +  0;
    let e = roundTo10((resultWeight/13)*1) + 10;
    let correction = ((resultWeight-(a+b+c+d+e)));
    let aC = a + correction;
    
    let array = [aC,b,c,d,e];
    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 4;</br> В последнем подъеме: 1 св/шт. "); 
     
      function arraySum(array){
      let sum = 0;
      for(let i = 0; i < array.length; i++){
      sum +=  + array[i];
        }
        document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
        "св. " + "весом " + sum + "кг." + "</strong>" );
      }
      arraySum(array);
    } 

  else if (itemsSum == 14)   {

    let a = roundTo10((resultWeight/14)*3) - 10;
    let b = roundTo10((resultWeight/14)*3) + 10;
    let c = roundTo10((resultWeight/14)*3) - 10;
    let d = roundTo10((resultWeight/14)*3) + 0;
    let e = roundTo10((resultWeight/14)*2) + 10;
    let correction = ((resultWeight-(a+b+c+d+e)));
    let aC = a + correction;
    
    let array = [aC,b,c,d,e];
    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 4;</br> В последнем подъеме: 2 св/шт. "); 
      function arraySum(array){
      let sum = 0;
      for(let i = 0; i < array.length; i++){
      sum +=  + array[i];
        }
        document.write("<br/>" + "<br/>" + "<strong>" + "Всего: "  + itemsSum + 
        "св. " + "весом " + sum + "кг." + "</strong>" );
      }
      arraySum(array);
    }

  else if (itemsSum == 15)   {

    let a = roundTo10((resultWeight/15)*3) + 10;
    let b = roundTo10((resultWeight/15)*3) - 10;
    let c = roundTo10((resultWeight/15)*3) + 10;
    let d = roundTo10((resultWeight/15)*3) + 0;
    let e = roundTo10((resultWeight/15)*3) - 10;
    let correction = ((resultWeight-(a+b+c+d+e)));
    let aC = a + correction;

    let array = [aC,b,c,d,e];
    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 5.</br>"); 
      
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
  
    else if(itemsSum == 16 ) {
    let a = roundTo10((resultWeight/16)*3) + 10;
    let b = roundTo10((resultWeight/16)*3) - 10;
    let c = roundTo10((resultWeight/16)*3) + 10;
    let d = roundTo10((resultWeight/16)*3) - 10;
    let e = roundTo10((resultWeight/16)*3) + 10;
    let f = roundTo10((resultWeight/16)*1) + 0; 
      let correction = ((resultWeight-(a+b+c+d+e+f)));
        let aC = a + correction;
      
      let array = [aC,b,c,d,e,f];
      
        document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
        document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 5;</br> В последнем подъеме: 1 св/шт.  "); 
        
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

 else if (itemsSum == 17)   {

  let a = roundTo10((resultWeight/17)*3) + 10;
  let b = roundTo10((resultWeight/17)*3) - 10;
  let c = roundTo10((resultWeight/17)*3) + 10;
  let d = roundTo10((resultWeight/17)*3) - 10;
  let e = roundTo10((resultWeight/17)*3) + 0;
  let f = roundTo10((resultWeight/17)*2) - 0;
  let correction = ((resultWeight-(a+b+c+d+e+f)));
  let aC = a + correction;
  let array = [aC,b,c,d,e,f];
  
    document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
    document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 5;</br> В последнем подъеме: 2 св/шт. "); 
    
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

  else if (itemsSum == 18)   {

    let a = roundTo10((resultWeight/18)*3) + 10;
    let b = roundTo10((resultWeight/18)*3) - 10;
    let c = roundTo10((resultWeight/18)*3) + 20;
    let d = roundTo10((resultWeight/18)*3) - 10;
    let e = roundTo10((resultWeight/18)*3) + 10;
    let f = roundTo10((resultWeight/18)*3) - 10;
    let correction = ((resultWeight-(a+b+c+d+e+f)));
    let aC = a + correction;
    let array = [aC,b,c,d,e,f];
    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 6;</br> "); 
      
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

    else if (itemsSum == 19)   {

      let a = roundTo10((resultWeight/19)*3) + 10;
      let b = roundTo10((resultWeight/19)*3) - 10;
      let c = roundTo10((resultWeight/19)*3) + 20;
      let d = roundTo10((resultWeight/19)*3) - 10;
      let e = roundTo10((resultWeight/19)*3) + 10;
      let f = roundTo10((resultWeight/19)*3) + 0;
      let g = roundTo10((resultWeight/19)*1) + 0;
      let correction = ((resultWeight-(a+b+c+d+e+f+g)));
      let aC = a + correction;
      let array = [aC,b,c,d,e,f,g];
      
        document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
        document.write ("<br/" + "<br/>" + "Количество подъемов по 3 св/шт.: 6. В последнем подъеме: 1 св/шт. "); 
        
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

      else if (itemsSum == 20)   {

        let a = roundTo10((resultWeight/20)*4) + 10;
        let b = roundTo10((resultWeight/20)*4) - 20;
        let c = roundTo10((resultWeight/20)*4) + 10;
        let d = roundTo10((resultWeight/20)*4) + 0;
        let e = roundTo10((resultWeight/20)*4) - 10;
        let correction = ((resultWeight-(a+b+c+d+e)));
        let aC = a + correction;
    
        let array = [aC,b,c,d,e];
        
          document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
          document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 5.</br>"); 
          
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
       
        else if (itemsSum == 21)   {

          let a = roundTo10((resultWeight/21)*4) + 10;
          let b = roundTo10((resultWeight/21)*4) - 10;
          let c = roundTo10((resultWeight/21)*4) + 20;
          let d = roundTo10((resultWeight/21)*4) - 10;
          let e = roundTo10((resultWeight/21)*4) + 10;
          let f = roundTo10((resultWeight/21)*1) + 0;
          let correction = ((resultWeight-(a+b+c+d+e+f)));
          let aC = a + correction;
          let array = [aC,b,c,d,e,f];
          
            document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
            document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 5;</br> В последнем подъеме: 1 св/шт.  "); 
            
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
        
      else if (itemsSum == 22)   {

      let a = roundTo10((resultWeight/22)*4) + 10;
      let b = roundTo10((resultWeight/22)*4) - 10;
      let c = roundTo10((resultWeight/22)*4) + 10;
      let d = roundTo10((resultWeight/22)*4) - 20;
      let e = roundTo10((resultWeight/22)*4) + 10;
      let f = roundTo10((resultWeight/22)*2) + 0;
      let correction = ((resultWeight-(a+b+c+d+e+f)));
      let aC = a + correction;
      let array = [aC,b,c,d,e,f];
            
        document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
        document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 5;</br> В последнем подъеме: 2 св/шт.  "); 
              
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

   else if (itemsSum == 23)   {

     let a = roundTo10((resultWeight/23)*4) + 10;
     let b = roundTo10((resultWeight/23)*4) - 10;
     let c = roundTo10((resultWeight/23)*4) + 10;
     let d = roundTo10((resultWeight/23)*4) - 20;
     let e = roundTo10((resultWeight/23)*4) + 10;
     let f = roundTo10((resultWeight/23)*3) + 0;
     let correction = ((resultWeight-(a+b+c+d+e+f)));
     let aC = a + correction;
     let array = [aC,b,c,d,e,f];
                
       document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
       document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 5;</br> В последнем подъеме: 3 св/шт.  "); 
                  
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

      else if (itemsSum == 24)   {

        let a = roundTo10((resultWeight/24)*4) + 10;
        let b = roundTo10((resultWeight/24)*4) - 10;
        let c = roundTo10((resultWeight/24)*4) + 10;
        let d = roundTo10((resultWeight/24)*4) - 10;
        let e = roundTo10((resultWeight/24)*4) + 10;
        let f = roundTo10((resultWeight/24)*4) + 0;
        let correction = ((resultWeight-(a+b+c+d+e+f)));
        let aC = a + correction;
        let array = [aC,b,c,d,e,f];
                   
          document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
          document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 6. "); 
                     
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


   else if (itemsSum == 25)   {

     let a = roundTo10((resultWeight/25)*4) + 10;
     let b = roundTo10((resultWeight/25)*4) - 10;
     let c = roundTo10((resultWeight/25)*4) + 10;
     let d = roundTo10((resultWeight/25)*4) - 20;
     let e = roundTo10((resultWeight/25)*4) + 10;
     let f = roundTo10((resultWeight/25)*4) - 10;
     let g = roundTo10((resultWeight/25)*1) + 10;
     let correction = ((resultWeight-(a+b+c+d+e+f+g)));
     let aC = a + correction;
     let array = [aC,b,c,d,e,f,g];
                     
     document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
     document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 6;</br> В последнем подъеме: 1 св/шт.  "); 
                       
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
    
    else if (itemsSum == 26)   {

    let a = roundTo10((resultWeight/26)*4) + 10;
    let b = roundTo10((resultWeight/26)*4) - 10;
    let c = roundTo10((resultWeight/26)*4) + 10;
    let d = roundTo10((resultWeight/26)*4) - 10;
    let e = roundTo10((resultWeight/26)*4) + 20;
    let f = roundTo10((resultWeight/26)*4) - 10;
    let g = roundTo10((resultWeight/26)*2) + 0;
    let correction = ((resultWeight-(a+b+c+d+e+f+g)));
    let aC = a + correction;
    let array = [aC,b,c,d,e,f,g];
                        
    document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
    document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 6;</br> В последнем подъеме: 2 св/шт.  "); 
                          
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

    else if (itemsSum == 27)   {

      let a = roundTo10((resultWeight/27)*4) + 10;
      let b = roundTo10((resultWeight/27)*4) +  0;
      let c = roundTo10((resultWeight/27)*4) + 10;
      let d = roundTo10((resultWeight/27)*4) - 10;
      let e = roundTo10((resultWeight/27)*4) + 10;
      let f = roundTo10((resultWeight/27)*4) - 20;
      let g = roundTo10((resultWeight/27)*3) - 10;
      let correction = ((resultWeight-(a+b+c+d+e+f+g)));
      let aC = a + correction;
      let array = [aC,b,c,d,e,f,g];
                              
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 6;</br> В последнем подъеме: 3 св/шт.  "); 
                                
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
      
    else if (itemsSum == 28)   {

    let a = roundTo10((resultWeight/28)*4) + 20;
    let b = roundTo10((resultWeight/28)*4) - 10;
    let c = roundTo10((resultWeight/28)*4) + 10;
    let d = roundTo10((resultWeight/28)*4) - 10;
    let e = roundTo10((resultWeight/28)*4) + 20;
    let f = roundTo10((resultWeight/28)*4) - 10;
    let g = roundTo10((resultWeight/28)*4) + 0;
    let correction = ((resultWeight-(a+b+c+d+e+f+g)));
    let aC = a + correction;
    let array = [aC,b,c,d,e,f,g];
                                  
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 7."); 
                                    
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

   else if (itemsSum == 29)   {

      let a = roundTo10((resultWeight/29)*4) + 10;
      let b = roundTo10((resultWeight/29)*4) - 20;
      let c = roundTo10((resultWeight/29)*4) + 20;
      let d = roundTo10((resultWeight/29)*4) + 10;
      let e = roundTo10((resultWeight/29)*4) - 10;
      let f = roundTo10((resultWeight/29)*4) - 20;
      let g = roundTo10((resultWeight/29)*4) + 10;
      let h = roundTo10((resultWeight/29)*1) + 0;
      let correction = ((resultWeight-(a+b+c+d+e+f+g+h)));
      let aC = a + correction;
      let array = [aC,b,c,d,e,f,g,h];
                                    
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 7;</br> В последнем подъеме: 1 св/шт.  "); 
                                      
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
          
      else if (itemsSum == 30)   {

       let a = roundTo10((resultWeight/30)*4) + 10;
       let b = roundTo10((resultWeight/30)*4) + 10;
       let c = roundTo10((resultWeight/30)*4) + 0;
       let d = roundTo10((resultWeight/30)*4) - 10;
       let e = roundTo10((resultWeight/30)*4) + 10;
       let f = roundTo10((resultWeight/30)*4) - 10;
       let g = roundTo10((resultWeight/30)*4) + 0;
       let h = roundTo10((resultWeight/30)*2) - 10;
       let correction = ((resultWeight-(a+b+c+d+e+f+g+h)));
       let aC = a + correction;
       let array = [aC,b,c,d,e,f,g,h];
                                          
         document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
         document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 7;</br> В последнем подъеме: 2 св/шт.  "); 
                                            
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
      
      else if (itemsSum == 31)   {

      let a = roundTo10((resultWeight/31)*4) + 20;
      let b = roundTo10((resultWeight/31)*4) - 10;
      let c = roundTo10((resultWeight/31)*4) - 10;
      let d = roundTo10((resultWeight/31)*4) - 10;
      let e = roundTo10((resultWeight/31)*4) + 10;
      let f = roundTo10((resultWeight/31)*4) - 10;
      let g = roundTo10((resultWeight/31)*4) + 20;
      let h = roundTo10((resultWeight/31)*3) - 0;
      let correction = ((resultWeight-(a+b+c+d+e+f+g+h)));
      let aC = a + correction;
      let array = [aC,b,c,d,e,f,g,h];
                                             
        document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
        document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 7;</br> В последнем подъеме: 3 св/шт.  "); 
                                               
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
    
       else if (itemsSum == 32)   {

        let a = roundTo10((resultWeight/32)*4) + 10;
        let b = roundTo10((resultWeight/32)*4) - 20;
        let c = roundTo10((resultWeight/32)*4) + 10;
        let d = roundTo10((resultWeight/32)*4) - 10;
        let e = roundTo10((resultWeight/32)*4) + 20;
        let f = roundTo10((resultWeight/32)*4) - 10;
        let g = roundTo10((resultWeight/32)*4) + 10;
        let h = roundTo10((resultWeight/32)*4) - 0;
        let correction = ((resultWeight-(a+b+c+d+e+f+g+h)));
        let aC = a + correction;
        let array = [aC,b,c,d,e,f,g,h];
                                               
          document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
          document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 8."); 
                                                 
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
                
   
    else if (itemsSum == 33)   {

    let a = roundTo10((resultWeight/33)*4) + 20;
    let b = roundTo10((resultWeight/33)*4) - 10;
    let c = roundTo10((resultWeight/33)*4) + 10;
    let d = roundTo10((resultWeight/33)*4) + 20;
    let e = roundTo10((resultWeight/33)*4) - 20;
    let f = roundTo10((resultWeight/33)*4) + 10;
    let g = roundTo10((resultWeight/33)*4) + 0;
    let h = roundTo10((resultWeight/33)*4) - 20;
    let j = roundTo10((resultWeight/33)*1) - 10;
    let correction = ((resultWeight-(a+b+c+d+e+f+g+h+j)));
    let aC = a + correction;
    let array = [aC,b,c,d,e,f,g,h,j];
                                                 
     document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
     document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 8;</br> В последнем подъеме: 1 св/шт.  "); 
                                                   
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
      
      else if (itemsSum == 34)   {

        let a = roundTo10((resultWeight/34)*4) + 10;
        let b = roundTo10((resultWeight/34)*4) + 20;
        let c = roundTo10((resultWeight/34)*4) - 10;
        let d = roundTo10((resultWeight/34)*4) - 20;
        let e = roundTo10((resultWeight/34)*4) + 0;
        let f = roundTo10((resultWeight/34)*4) - 10;
        let g = roundTo10((resultWeight/34)*4) + 10;
        let h = roundTo10((resultWeight/34)*4) - 10;
        let j = roundTo10((resultWeight/34)*2) - 0;
        let correction = ((resultWeight-(a+b+c+d+e+f+g+h+j)));
        let aC = a + correction;
        let array = [aC,b,c,d,e,f,g,h,j];
                                                     
         document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
         document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 8;</br> В последнем подъеме: 2 св/шт.  "); 
                                                       
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
    
    else if (itemsSum == 35)   {

    let a = roundTo10((resultWeight/35)*4) + 0;
    let b = roundTo10((resultWeight/35)*4) + 20;
    let c = roundTo10((resultWeight/35)*4) - 10;
    let d = roundTo10((resultWeight/35)*4) - 20;
    let e = roundTo10((resultWeight/35)*4) + 10;
    let f = roundTo10((resultWeight/35)*4) - 10;
    let g = roundTo10((resultWeight/35)*4) + 20;
    let h = roundTo10((resultWeight/35)*4) - 0;
    let j = roundTo10((resultWeight/35)*3) - 10;
    let correction = ((resultWeight-(a+b+c+d+e+f+g+h+j)));
    let aC = a + correction;
    let array = [aC,b,c,d,e,f,g,h,j];
                                                         
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 4 св/шт.: 8;</br> В последнем подъеме: 3 св/шт.  "); 
                                                           
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
     
     else if (itemsSum == 36)   {

      let a = roundTo10((resultWeight/36)*5) - 10;
      let b = roundTo10((resultWeight/36)*5) + 10;
      let c = roundTo10((resultWeight/36)*5) - 20;
      let d = roundTo10((resultWeight/36)*5) - 10;
      let e = roundTo10((resultWeight/36)*5) + 20;
      let f = roundTo10((resultWeight/36)*5) + 10;
      let g = roundTo10((resultWeight/36)*5) - 0;
      let h = roundTo10((resultWeight/36)*1) + 0;
      let correction = ((resultWeight-(a+b+c+d+e+f+g+h)));
      let aC = a + correction;
      let array = [aC,b,c,d,e,f,g,h];
                 
        document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
        document.write ("<br/" + "<br/>" + "Количество подъемов по 5 св/шт.: 7;</br> В последнем подъеме: 1 св/шт."); 
                   
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

       else if (itemsSum == 37)   {

        let a = roundTo10((resultWeight/37)*5) - 10;
        let b = roundTo10((resultWeight/37)*5) + 10;
        let c = roundTo10((resultWeight/37)*5) - 20;
        let d = roundTo10((resultWeight/37)*5) - 10;
        let e = roundTo10((resultWeight/37)*5) + 20;
        let f = roundTo10((resultWeight/37)*5) + 10;
        let g = roundTo10((resultWeight/37)*5) - 0;
        let h = roundTo10((resultWeight/37)*2) + 0;
        let correction = ((resultWeight-(a+b+c+d+e+f+g+h)));
        let aC = a + correction;
        let array = [aC,b,c,d,e,f,g,h];
                   
          document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
          document.write ("<br/" + "<br/>" + "Количество подъемов по 5 св/шт.: 7;</br> В последнем подъеме: 2 св/шт."); 
                     
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
     
         else if (itemsSum == 38)   {

          let a = roundTo10((resultWeight/38)*5) - 10;
          let b = roundTo10((resultWeight/38)*5) + 10;
          let c = roundTo10((resultWeight/38)*5) - 20;
          let d = roundTo10((resultWeight/38)*5) - 10;
          let e = roundTo10((resultWeight/38)*5) + 20;
          let f = roundTo10((resultWeight/38)*5) + 10;
          let g = roundTo10((resultWeight/38)*5) -  0;
          let h = roundTo10((resultWeight/38)*3) +  0;
          let correction = ((resultWeight-(a+b+c+d+e+f+g+h)));
          let aC = a + correction;
          let array = [aC,b,c,d,e,f,g,h];
                     
            document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
            document.write ("<br/" + "<br/>" + "Количество подъемов по 5 св/шт.: 7;</br> В последнем подъеме: 3 св/шт."); 
                       
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
  
      else if (itemsSum == 39)   {

      let a = roundTo10((resultWeight/39)*5) - 20;
      let b = roundTo10((resultWeight/39)*5) + 10;
      let c = roundTo10((resultWeight/39)*5) - 20;
      let d = roundTo10((resultWeight/39)*5) - 10;
      let e = roundTo10((resultWeight/39)*5) + 20;
      let f = roundTo10((resultWeight/39)*5) + 10;
      let g = roundTo10((resultWeight/39)*5) - 0;
      let h = roundTo10((resultWeight/39)*4) + 20;
      let correction = ((resultWeight-(a+b+c+d+e+f+g+h)));
      let aC = a + correction;
      let array = [aC,b,c,d,e,f,g,h];
                       
       document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
       document.write ("<br/" + "<br/>" + "Количество подъемов по 5 св/шт.: 7;</br> В последнем подъеме: 4 св/шт."); 
                         
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

  else if (itemsSum == 40)   {

  let a = roundTo10((resultWeight/40)*5 - 20);
  let b = roundTo10((resultWeight/40)*5 + 20);
  let c = roundTo10((resultWeight/40)*5 - 30);
  let d = roundTo10((resultWeight/40)*5 + 20);
  let e = roundTo10((resultWeight/40)*5);
  let f = roundTo10((resultWeight/40)*5 -20);
  let g = roundTo10((resultWeight/40)*5 + 10);
  let h = roundTo10((resultWeight/40)*5 - 10);
  let correction = ((resultWeight-(a+b+c+d+e+f+g+h)));
  let aC = a + correction;
  let array = [aC,b,c,d,e,f,g,h];
                               
  document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
  document.write ("<br/" + "<br/>" + "Количество подъемов по 5 св/шт.: 8."); 
                                 
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

   else if (itemsSum == 41)   {

    let a = roundTo10((resultWeight/41)*5 - 20);
    let b = roundTo10((resultWeight/41)*5 + 20);
    let c = roundTo10((resultWeight/41)*5 - 30);
    let d = roundTo10((resultWeight/41)*5 + 20);
    let e = roundTo10((resultWeight/41)*5);
    let f = roundTo10((resultWeight/41)*5 -20);
    let g = roundTo10((resultWeight/41)*5 + 10);
    let h = roundTo10((resultWeight/41)*5 - 10);
    let j = roundTo10((resultWeight/41)*1 - 10);
    let correction = ((resultWeight-(a+b+c+d+e+f+g+h+j)));
    let aC = a + correction;
    let array = [aC,b,c,d,e,f,g,h,j];
                                         
      document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
      document.write ("<br/" + "<br/>" + "Количество подъемов по 5 св/шт.: 8;</br> В последнем подъеме: 1 св/шт."); 
                                           
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
   
  
  else if (itemsSum == 42)   {

  let a = roundTo10((resultWeight/42)*5 - 20);
  let b = roundTo10((resultWeight/42)*5 + 20);
  let c = roundTo10((resultWeight/42)*5 - 30);
  let d = roundTo10((resultWeight/42)*5 + 20);
  let e = roundTo10((resultWeight/42)*5);
  let f = roundTo10((resultWeight/42)*5 -20);
  let g = roundTo10((resultWeight/42)*5 + 10);
  let h = roundTo10((resultWeight/42)*5 - 10);
  let j = roundTo10((resultWeight/42)*2 - 10);
  let correction = ((resultWeight-(a+b+c+d+e+f+g+h+j)));
  let aC = a + correction;
  let array = [aC,b,c,d,e,f,g,h,j];
                                                   
  document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
  document.write ("<br/" + "<br/>" + "Количество подъемов по 5 св/шт.: 8;</br> В последнем подъеме: 2 св/шт."); 
                                                     
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

    else if (itemsSum == 43)   {

  let a = roundTo10((resultWeight/43)*5 - 25);
  let b = roundTo10((resultWeight/43)*5 + 15);
  let c = roundTo10((resultWeight/43)*5 - 30);
  let d = roundTo10((resultWeight/43)*5 + 15);
  let e = roundTo10((resultWeight/43)*5);
  let f = roundTo10((resultWeight/43)*5 -20);
  let g = roundTo10((resultWeight/43)*5 + 10);
  let h = roundTo10((resultWeight/43)*5 - 15);
  let j = roundTo10((resultWeight/43)*3 - 5);
  let correction = ((resultWeight-(a+b+c+d+e+f+g+h+j)));
  let aC = a + correction;
  let array = [aC,b,c,d,e,f,g,h,j];
                                                         
    document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
    document.write ("<br/" + "<br/>" + "Количество подъемов по 5 св/шт.: 8;</br> В последнем подъеме: 3 св/шт."); 
                                                           
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
        
      else if (itemsSum == 44)   {

        let a = roundTo10((resultWeight/44)*5 - 20);
        let b = roundTo10((resultWeight/44)*5 + 15);
        let c = roundTo10((resultWeight/44)*5 - 30);
        let d = roundTo10((resultWeight/44)*5 + 15);
        let e = roundTo10((resultWeight/44)*5);
        let f = roundTo10((resultWeight/44)*5 -20);
        let g = roundTo10((resultWeight/44)*5 + 10);
        let h = roundTo10((resultWeight/44)*5 - 15);
        let j = roundTo10((resultWeight/44)*4 - 5);
        let correction = ((resultWeight-(a+b+c+d+e+f+g+h+j)));
        let aC = a + correction;
        let array = [aC,b,c,d,e,f,g,h,j];
                                                               
          document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
          document.write ("<br/" + "<br/>" + "Количество подъемов по 5 св/шт.: 8;</br> В последнем подъеме: 4 св/шт."); 
                                                                 
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

            else if (itemsSum == 45)   {

              let a = roundTo10((resultWeight/45)*5 - 20);
              let b = roundTo10((resultWeight/45)*5 + 15);
              let c = roundTo10((resultWeight/45)*5 - 30);
              let d = roundTo10((resultWeight/45)*5 + 15);
              let e = roundTo10((resultWeight/45)*5);
              let f = roundTo10((resultWeight/45)*5 -20);
              let g = roundTo10((resultWeight/45)*5 + 10);
              let h = roundTo10((resultWeight/45)*5 - 15);
              let j = roundTo10((resultWeight/45)*5 - 5);
              let correction = ((resultWeight-(a+b+c+d+e+f+g+h+j)));
              let aC = a + correction;
              let array = [aC,b,c,d,e,f,g,h,j];
                                                                     
                document.write("<br/>" + "<br/>" + "Расчет веса по подъемам крана (г/п до 15000кг.)" + "<br/>" + "<br/>" + (array));    
                document.write ("<br/" + "<br/>" + "Количество подъемов по 5 св/шт.: 9."); 
                                                                       
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
      alert ("Введены не все данные или что-то пошло не так !!")
  }
  
  //end function calculate
  }
  
  