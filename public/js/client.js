// const axios = require('axios').default

async function openTab() {
    let url = document.getElementById("url-in").value
    let data = {user: "user", url: url };
    let res = await axios.post("http://localhost:4000/url", data)
    console.log(res)
    window.open(url, '__blank')
}

