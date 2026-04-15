function runCDS(){

  let fever = document.getElementById("fever").checked;
  let cough = document.getElementById("cough").checked;
  let fast = document.getElementById("fast").checked;
  let plate = document.getElementById("platelet").checked;

  let result = "";

  if(fever && plate){
    result = "Suspected Dengue → Avoid NSAIDs";
  }
  else if(cough && fast){
    result = "Pneumonia → Start Amoxicillin";
  }
  else if(fever){
    result = "Viral → No antibiotic";
  }
  else{
    result = "Supportive care";
  }

  document.getElementById("result").innerHTML = result;
}
