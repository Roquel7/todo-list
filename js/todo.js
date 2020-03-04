//Creating a list from the input and adding a closing 'x' symbol next to it.
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("list").value;
    let listing = document.createTextNode(inputValue);
    li.appendChild(listing);
    if (inputValue === '') {
      alert("Please add an item.");
    } else {
      document.getElementById("listItems").appendChild(li);
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
  }
  //making the 'x' to delete the list
  let close = document.getElementsByClassName('close');
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = 'none';
    }
  }

  let list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);