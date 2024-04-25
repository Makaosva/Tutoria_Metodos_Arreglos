document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  //alert("titulo: " + title + " Autor: " + author);

  if (title == "" || author == "") {
    alert("Complete todos los campos");
    return;
  }

  const bookList = document.querySelector("#book-list");
  const li = document.createElement("li");
  //li.textContent = `${title} escrito por: ${author}`;
  li.innerHTML = `<span>${title} escrito por: ${author}</span>
  <input type="checkbox">`;
  //li.appendChild(createToggleButton());
  //li.appendChild(deleteToggleButton());

  bookList.appendChild(li);

  updateStats();

  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
});

function updateStats() {
  const totalBooks = document.querySelectorAll("#book-list li").length;
  const readBooks = document.querySelectorAll("#book-list .completed").length;
  const pendingBooks = document.querySelectorAll(
    "#book-list input[type='checkbox'}:checked"
  ).length;
  //alert(totalBooks);
  document.querySelector("#total-books").textContent = totalBooks;
  document.querySelector("#read-books").textContent = readBooks;
  document.querySelector("#pending-books").textContent = pendingBooks;
}

function createToggleButton() {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Leido";
  toggleButton.onclick = (e) => {
    e.target.parentNode.classList.toggle("completed");
  };
}

function deleteToggleButton() {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.classList.add("delete");
  deleteButton.onclick = (e) => {
    e.target.parentNode.remove();
    updateStats();
  };
  return deleteButton;
}
