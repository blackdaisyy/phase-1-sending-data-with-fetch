// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json()) // Parse the JSON response body
    .then((user) => {
      // user will have the returned object with an id, e.g. {name: "foo", email: "bar", id: 5}
      const idElement = document.createElement("p");
      idElement.textContent = `User ID: ${user.id}`;
      document.body.appendChild(idElement);
    })
    .catch((error) => {
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
}

