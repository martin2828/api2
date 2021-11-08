const $add = document.getElementById("add");

const getUser = async () => {
    const information = await fetch("https://jsonplaceholder.typicode.com/users")
    const getJson = await information.json();
    getJson.forEach((user) => {
        $add.innerHTML += `<tr><th>${user.name}</th><td>${user.email}</td><td>${user.address.suite}</td><td>${user.phone}</td><tr>`
    })
}

getUser();