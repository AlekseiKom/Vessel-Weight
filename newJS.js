
    function calculate() {
     event.preventDefault();

    let totalWeight = document.getElementById("weight").value; //Общий вес
    let itemsSum = document.getElementById("totalUnits").value;  //Общее кол-во св/шт
    let liftSum = document.getElementById("lift").value;   //Ко-во в одном подъеме
    let surWeight1 = document.getElementById("survei1").value; //Вес сюрв. 1
    let surWeight2 = document.getElementById("survei2").value; //Вес сюрв. 2
    let resultField = document.getElementById("testResult");  //Окно результата 


     let oneItem = parseFloat(totalWeight/itemsSum);
     resultField.innerHTML= "Вес одной св/шт. = " + oneItem;
     
     

    }


    