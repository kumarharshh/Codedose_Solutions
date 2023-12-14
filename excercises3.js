participantAges=[12,23,34,10,18,19,13];
arr=participantAges.filter(checkAdult);
console.log(arr);
function checkAdult(age){
  return age>=18;
}