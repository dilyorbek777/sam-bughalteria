let form = document.getElementById("signup")

let req = {}

form.addEventListener("change", (e) => {
    req[e.target.name] = e.target.value
    console.log(req);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = fetchData('register', req)
    console.log(data);
})
// https://sam-accountant.onrender.com/api/register

const fetchData = async (url, options) => {
    let res = await fetch(`https://sam-accountant.onrender.com/api/${url}/`, {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(d => d.json())
    console.log(res);
    return res
}