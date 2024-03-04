let form = document.getElementById("contact")
console.log("connected contactjs");
let req = {}


form.addEventListener("change", (e) => {
    req[e.target.name] = e.target.value
    console.log(req);

})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    contact("contact-us", req)
})

const contact = async (url, options) => {
    let res = await fetch(`https://sam-accountant.onrender.com/api/${url}/`, {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(d => d.json())

    console.log(res);

    if (res) {
        alert("Sizga tez orada bog'laniladi!")
    }
}