function initDrugs(){
  const select = document.getElementById("drugSelect");

  select.innerHTML = "";

  drugs.forEach(d=>{
    let opt = document.createElement("option");
    opt.value = d.name;
    opt.textContent = d.name;
    select.appendChild(opt);
  });
}

function calculate(){

  let drugName = document.getElementById("drugSelect").value;
  let drug = drugs.find(d => d.name === drugName);

  let weight = parseFloat(document.getElementById("weight").value);

  if(!weight){
    alert("Enter weight");
    return;
  }

  let total = weight * drug.dose;
  let perDose = total / drug.freq;

  let ml = "N/A";
  let drops = "N/A";

  if(drug.mg5 > 0){
    ml = perDose / (drug.mg5/5);
    drops = ml * 20;
  }

  document.getElementById("output").innerHTML =
    "Dose: " + perDose.toFixed(1) + " mg<br>" +
    "Volume: " + (typeof ml==="number" ? ml.toFixed(1)+" mL" : ml) + "<br>" +
    "Drops: " + (typeof drops==="number" ? drops.toFixed(0) : drops);
}

document.addEventListener("DOMContentLoaded", initDrugs);
