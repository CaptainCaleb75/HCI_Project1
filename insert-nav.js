fetch('/HCI_Project1/navbar.html')
    .then(r => r.text())
    .then(d => {
        const isolation = document.getElementById("navbar-holder").attachShadow({mode: 'open'});
        isolation.innerHTML = `<link rel="stylesheet" href="/HCI_Project1/nav.css">` + d;
    })
    .catch(err => console.error("HTML loading error: ", err))
