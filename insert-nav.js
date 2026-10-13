fetch('navbar.html')
    .then(r => r.text())
    .then(d => {
        document.getElementById("navbar-holder").innerHTML = d;
    })
    .catch(err => console.error("HTML loading error: ", err))