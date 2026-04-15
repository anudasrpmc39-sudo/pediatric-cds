function calculate(){

  let drugName = document.getElementById("drugSelect").value;
  let drug = drugs.find(d => d.name === drugName);

  let weight = parseFloat(document.getElementById("weight").value);

  // 👉 ADD HERE
  let age = parseFloat(document.getElementById("age").value);
  let ageUnit = document.getElementById("ageUnit").value;

  if(ageUnit === "years"){
    age = age * 12;
  }

  if(!weight || !age){
    alert("Enter age and weight");
    return;
  }

  // rest of your calculation...
}
