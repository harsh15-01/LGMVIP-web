let inputItems = document.getElementById('inputItems');
let addItems = document.getElementById('addItems');
let showItems = document.getElementById('showItems');
let completedItems = document.getElementById('completedItems');
let clearItems = document.getElementById('clear');
addItems.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputItems.value;
    showItems.appendChild(paragraph);
    inputItems.value="";
    paragraph.addEventListener('drag',function(){
        showItems.removeChild(paragraph);
        completedItems.appendChild(paragraph);
    })
})
function clearcontent(elementID1,elementID2){
    document.getElementById(elementID1).innerHTML="";
    document.getElementById(elementID2).innerHTML="";
}
