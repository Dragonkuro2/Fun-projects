function HTMLrender() {
  data = getData();
  let html = '';
  for(let i=0; i < data.length; i++){
    let tasks = data[i];
    html += `<div>${tasks.task}</div><div>${tasks.date}</div><button class="js-delete-button"
      onclick = "deleteItem(${i})"
    >Delete</button>`
  }

  document.querySelector(".js-data").innerHTML = html;

  document.querySelector(".js-input-task").value = "";
  document.querySelector(".js-date-task").value = "";
}


function getData(){
  const data = JSON.parse(localStorage.getItem('data')) || [];
  return(data);
}

function saveData(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

function addItem() {
  let data = getData();
  let dataObject = {
    task: `${document.querySelector(".js-input-task").value}`,
    date: `${document.querySelector(".js-date-task").value}`
  };
  data.push(dataObject);
  saveData(data);
  HTMLrender();
}

function deleteItem(index){
  data = getData();
  data.splice(index, 1);
  saveData(data);
  HTMLrender();
}

HTMLrender();