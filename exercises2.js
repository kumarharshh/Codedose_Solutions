const cityBuses = [
  {
    routeNumber: 1,
    stations: ['Central Station', 'Maple Street', 'Elm Street', 'Oak Avenue'],
    fare: 40 // flat fare in local currency units
  },
  {
    routeNumber: 2,
    stations: ['Airport', 'Central Station', 'Highland Road', 'River Side'],
    fare: 30
  },
  {
    routeNumber: 3,
    stations: ['Greenfield', 'Lakeview', 'Hilltop', 'East Market'],
    fare: 10
  },
  {
    routeNumber: 4,
    stations: ['Westgate', 'Old Town', 'City Hall', 'Central Park'],
    fare: 20
  }
  // Add more bus routes as needed
];
function myfunc(){
    let fare;
    var weekday = prompt("please enter the week day");
    switch(weekday){
      case "6":
        let cityBusesweekend1 = JSON.stringify(cityBuses);
        cityBusesweekend1=JSON.parse(cityBusesweekend1);
        fare = (cityBusesweekend1[0].fare*20)/100
        console.log(fare)
        break;
      case "7":
        let cityBusesweekend = JSON.stringify(cityBuses);
        cityBusesweekend=JSON.parse(cityBusesweekend);
        fare = (cityBusesweekend[1].fare*20)/100
        console.log(fare)
        break;
      default:
        fare=cityBuses[2].fare;
    }
    document.getElementById("ans").innerHTML=fare;
}
