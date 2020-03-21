const inputList = document.getElementById('list');
const inputBtn = document.getElementById('submitList');
//Creating a list from the input and adding a closing 'x' symbol next to it.


let addingToList = [];



submitList.onclick = function() {


  const key = inputList.value;

    let li = document.createElement("li");
    let inputValue = document.getElementById("list").value;
    let listing = document.createTextNode(inputValue);
    li.appendChild(listing);
    if (inputValue === '') {
      alert("Please add an item.");
    } else {
      document.getElementById("listItems").appendChild(li);
      addingToList.push(key);
    }

    document.getElementById("list").value = "";
    
    let item = document.createElement("SPAN");
    let text = document.createTextNode(" \u00D7");
    item.className = "close";
    item.appendChild(text);
    li.appendChild(item);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }

    // addingToList.push(key);
    console.log(addingToList);

    storeList(addingToList);

}




//making the 'x' to delete the list
let close = document.getElementsByClassName('close');
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
      let div = this.parentElement;
    div.style.display = 'none';
  }
}

//it will check the clicked item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


retrievingList()


function storeList(key) {
    localStorage.setItem('items', JSON.stringify(key));
  }
    
function retrievingList() {
  saveItems = localStorage.getItem('items' );
  listItems.innerHTML = `<li>${saveItems}</li>`;


  let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);

  let close = document.getElementsByClassName('close');
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
      let div = this.parentElement;
    div.style.display = 'none';
  }
}
}

}

