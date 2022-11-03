// Add your code here

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      })
    .then((res) => {
        return res.json()
    })
    .then((jsonResponse) => {
        let name = document.createElement('p')
        let email = document.createElement('p')
        let id = document.createElement('p')
        name.textContent = jsonResponse.name
        email.textContent = jsonResponse.email
        id.textContent = jsonResponse.id
        document.getElementById("txt").appendChild(name)
        document.getElementById("txt").appendChild(email)
        document.getElementById("txt").appendChild(id)
    })
    .catch(function (error) {
        let err = document.createElement('p')
        err.textContent = error.message
        document.getElementById("txt").appendChild(err)
    })
}
submitData("Aya", "ayamarmash@gmail.com")
