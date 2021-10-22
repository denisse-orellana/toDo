const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const deleteAllBtn = document.querySelector('.footer button');

inputBox.onkeydown = () => {
    let userData = inputBox.value; // getting user entered value

    if (userData.trim() != 0) { // if user values aren't only spaces
        addBtn.classList.add('active'); // active the add button
    } else {
        addBtn.classList.remove('active'); // unactive the add button
    }
}

// if user click on the add button
addBtn.onclick = () => {
    let userData = inputBox.value; 
    let getLocalStorage = localStorage.getItem('New Todo') // getting local storage

    if (getLocalStorage == null) {
        listArray = []; // creating blank array
    } else {
        listArray = JSON.parse(getLocalStorage);
    }

    listArray.push(userData);  // pushing or adding user data
    localStorage.setItem('New Todo', JSON.stringify(listArray)); // transforming js object into a json string
    showTasks();    // calling showTask function
    addBtn.classList.remove('active'); // unactive the add button
}

// function to add task list inside ul
function showTasks() {
    let getLocalStorage = localStorage.getItem('New Todo'); // getting local storage

    if (getLocalStorage == null) {   // is localStorage is null
        listArray = []; // creating blank array
    } else {
        listArray = JSON.parse(getLocalStorage);   // transforming json string into a js object
    }

    const pendingNumb = document.querySelector('.pendingNumb');
    pendingNumb.textContent = listArray.length;     // passing the length value in pendingNumb

    if (listArray.length > 0) { // if array length is greater than 0
        deleteAllBtn.classList.add('active'); // active the clearall button
    } else {
        deleteAllBtn.classList.remove('active'); // unactive the clearall button
    }

    let newLiTag = '';
    listArray.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick='deleteTask(${index})';><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;  // adding new li tag 
    inputBox.value = ""; // once task added leave the input blank
}

// delete task function
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem('New Todo');
    listArray = JSON.parse(getLocalStorage);
    listArray.splice(index, 1);     // delete or remove the particular indexed li
    // after remove the li again update the local storage
    localStorage.setItem('New Todo', JSON.stringify(listArray)); // transforming js object into a json string
    showTasks();    // calling showTask function
}

// delete all task functions
deleteAllBtn.onclick = () => {
    listArray = []; // empty an listArray
    // after delete all task again update the local storage
    localStorage.setItem('New Todo', JSON.stringify(listArray)); // transforming js object into a json string
    showTasks(); // calling showTasks function
}