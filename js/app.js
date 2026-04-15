function calculate(){

  let drugName = document.getElementById("drugSelect").value;
  let drug = drugs.find(d=>d.name===drugName);

  let weight = parseFloat(document.getElementById("weight").value);
  let unit = document.getElementById("weightUnit").value;

  if(unit==="lb") weight *= 0.4536;

  let total = weight * drug.dose;
  let perDose = total / drug.freq;

  let ml = perDose / (drug.mg5/5);

  document.getElementById("output").innerHTML =
  `Dose: ${perDose.toFixed(1)} mg<br>
   Volume: ${ml.toFixed(1)} mL`;
}
