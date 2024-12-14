const numInput=document.getElementById('numberInput');
const errMsg=document.getElementById('errorMsg');
const calculateButton=document.getElementById('calculateBtn');
const resetButtton=document.getElementById('resetBtn');

const tableBody=document.getElementById('table-body');

 function resetErrorStyles() {
    numInput.classList.remove("border-red-700");
    errMsg.classList.add("hidden");

}
function isValidInput(){
resetErrorStyles();
if(!numInput.value){
    numInput.classList.add("border-red-700");
    errMsg.classList.remove("hidden");
    errMsg.textContent="plz enter a valid number";
    return false;
}
if(numInput.value<0){
    numInput.classList.add("border-red-700");
    errMsg.classList.remove("hidden");
    errMsg.textContent="plz enter a number that is more than 0";
    return false;
}
return true;
}





calculateButton.addEventListener("click",function(){
    if(!isValidInput){
        return;
    }
    const number=parseInt(numInput.value);
    cleanTable();
    generateTable(number);
   });

   function cleanTable(){
    tableBody.innerHTML='';
   }

   function generateTable(number){
    for (let rowNo=1; rowNo<=10 ; rowNo++){
    const tableRow=generateRow(number,rowNo);
    tableBody.appendChild(tableRow); 
    } 
   }
   function generateRow(number,rowNo){
     const cells=[];
    for( let i=1; i<=5; i++){
    const rowCells=document.createElement("td");
    cells.push(rowCells);
    }
   
   cells[0].innerText=number;
   cells[1].innerText="x";
   cells[2].innerText=rowNo;
   cells[3].innerText="=";
   cells[4].innerText=number * rowNo;

   const tableRow=document.createElement("tr");
   for( let i=0; i<cells.length; i++){
   tableRow.appendChild(cells[i]);
   }
   return tableRow;
}

   resetButtton.addEventListener("click",function(){
    numInput.value="";
    cleanTable();
    resetErrorStyles();

   });
