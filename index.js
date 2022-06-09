
//1.  API url
const url = "https://jsonplaceholder.typicode.com/users";

// 2. Fetch users from the API url
function fetchUsers(){
 // 2.1 Make use of the browser fetch API
 fetch(url).then((Response) => Response.json()).then(data => {
  // 2.2 Passing the user data to the renderUsers function
  renderUsers(data);
 });
}

// 3. Render the Users in the DOM
function renderUsers(usersData) {
 // console.log(usersData);
 const ul = document.getElementById("user-list-wrap");
 // console.log(ul);

 // 3.1 Render an li tag for each of the user
 usersData.forEach((user, index) => {
  // console.log(user, index +1);
  const li = document.createElement("li");
  li.innerHTML = `
  <span>${index + 1}.</span>
  <span>${user.name}</span>
  <span>-</span>
  <span class="username">${user.username}</span>
  `;
  // 3.2 Append the current user li tag to the UL tag
  ul.appendChild(li);

 })
}
 // 4. Add a search function to the DOM
 function searchUsersByUsername() {
  const input = document.getElementById("search");
  const ul = document.getElementById("user-list-wrap");
  const inputValue = input.value.toUpperCase();
  const usersList = ul.querySelectorAll("li");     //array of all the li tags

  // Loop thru all the users and render the ones that match d search
  for(let index = 0; index < usersList.length; index++) {
    const usernameSpanTag = usersList[index].querySelector(".username");
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) >-1;

    if (isMatch) {
     usersList[index].style.display = "block";
    } else {
     usersList[index].style.display = "none";
    }
  }
 }


fetchUsers();