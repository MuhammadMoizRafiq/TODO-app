// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase,ref,set, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbK5p-wB7MLgeYcw5eMt2FXxLdzFNagCI",
  authDomain: "to-do-app-1af8f.firebaseapp.com",
  projectId: "to-do-app-1af8f",
  storageBucket: "to-do-app-1af8f.appspot.com",
  messagingSenderId: "199331177991",
  appId: "1:199331177991:web:0c63ace91799ec7a70aca2",
  measurementId: "G-FWM8BTF727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

window.saveValue = function  (){ 
    var obj={
    value:inp.value
    }
    obj.id = Math.random().toString().slice(2)
    const regRef = ref (db,`reg/${obj.id}/`)
    set(regRef,obj)
    };












var main = document.getElementById('main')
var inp =document.getElementById('inp')
window.add = function (){
    


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
    // inp.value="";
    saveValue();
}
window.editToDo=function (element){
    var newValue = prompt('Enter Value')
    element.parentNode.firstChild.nodeValue = newValue
}


window.delBtn=function (element){
element.parentNode.remove();
}

window.deleteAll=function (){
    main.innerHTML=""
}

