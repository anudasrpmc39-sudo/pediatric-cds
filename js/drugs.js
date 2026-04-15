const drugs = [
  {name:"Paracetamol",dose:15,freq:4,max:60,mg5:120},
  {name:"Amoxicillin",dose:25,freq:3,max:1000,mg5:125},
  {name:"Ibuprofen",dose:10,freq:3,max:40,mg5:100}
];

function initDrugs(){
  const select = document.getElementById("drugSelect");
  drugs.forEach(d=>{
    let opt = document.createElement("option");
    opt.value = d.name;
    opt.textContent = d.name;
    select.appendChild(opt);
  });
}
