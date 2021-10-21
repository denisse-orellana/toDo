const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');

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
}

