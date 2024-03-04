let form = document.getElementById("signin")

let req = {}

form.addEventListener("change", (e) => {
    req[e.target.name] = e.target.value
    console.log(req);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = fetchData('login', req)
    let s = JSON.stringify(data)
    localStorage.setItem("userdata", s)
    console.log(data);
})
// https://sam-accountant.onrender.com/api/register


let data = localStorage.getItem("user-data")
if (data === null) {
    console.log("null");
}
else {
    let dtst = JSON.parse(data)
    console.log(dtst);
    if (dtst.token) {
        location.assign("/dashboard")
    }
}


const fetchData = async (url, options) => {
    let res = await fetch(`https://sam-accountant.onrender.com/api/${url}/`, {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(d => d.json())
    if (res.error) {
        alert("Xatolik 404. Keyinroq urinib ko'ring")

    }
    console.log(res);


    localStorage.setItem("user-data", JSON.stringify(res))

    return res
}