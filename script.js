//First option
let items = JSON.parse(localStorage.getItem("todo-list")) || [];

function addTodo() {
  let inputBox = document.querySelector("#todo-input");
  let item = inputBox.value;
  if (item === "")
    return (document.getElementById("list").innerHTML =
      "Write something first");

  items.push({
    value: item,
  });

  localStorage.setItem("todo-list", JSON.stringify(items));

  listItems();

  inputBox.value = "";
}

function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function listItems() {
  let list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<li>";
    list += items[i].value + " ";
    list += "<span onclick='deleteItem(" + i + ")'><button class='remove'>Remove</button></span></li>";
  }
  document.querySelector("#todo-list").innerHTML = list;
}

(function () {
  listItems();
})();



//Second option
// document.querySelector('#push').onclick = function(){
//   if(document.querySelector('#newtask input').value.length == 0){
//       alert("Kindly Enter Task Name!!!!")
//   }

//   else{
//       document.querySelector('#tasks').innerHTML += `
//           <div class="task">
//               <span id="taskname">
//                   ${document.querySelector('#newtask input').value}
//               </span>
//               <button class="delete">
//                   <i class="far fa-trash-alt"></i>
//               </button>
//           </div>
//       `;

//       //deleting elements
//       let currentTasks = document.querySelectorAll(".delete");

//       for(var i=0; i<currentTasks.length; i++){
//           currentTasks[i].onclick = function(){
//               this.parentNode.remove();
//           }
//       }
//   }
// }
