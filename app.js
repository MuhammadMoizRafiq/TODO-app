var main = document.getElementById('main')
var inp =document.getElementById('inp')
function add(){
    console.log(inp.value)

    var li = document.createElement("li")
    var liText = document.createTextNode(inp.value)
    li.appendChild(liText);
    // para.setAttribute("class","abc");


    var editBtn =document.createElement("BUTTON");
    var editBtnText=document.createTextNode("EDIT")
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute('onclick','editToDo(this)')

    li.appendChild(editBtn)

    var delBtn = document.createElement("BUTTON")
    var delBtnText =document.createTextNode("Delete")
    delBtn.appendChild(delBtnText)
    delBtn.setAttribute("onclick","delBtn(this)")
    li.appendChild(delBtn)
    main.appendChild(li);
    inp.value="";
}
function editToDo(element){
    var newValue = prompt('Enter Value')
    element.parentNode.firstChild.nodeValue = newValue
}


function delBtn(element){
element.parentNode.remove();
}

function deleteAll(){
    main.innerHTML=""
}

