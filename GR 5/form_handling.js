const form_reqs = document.getElementsByClassName("f_req");
const email_field = document.getElementById("form_email");
const pass_field = document.getElementById("form_pass");

email_field.addEventListener('input', () => {
    const current_text = form_reqs[0].textContent;
    if(!email_field.checkValidity() && !current_text.includes("\u274C") && !form_reqs[0].textContent.includes("\u2705")){
        form_reqs[0].textContent += "\u274C";
    } else if (email_field.checkValidity()){
        if(form_reqs[0].textContent.includes("\u274C")) form_reqs[0].textContent = form_reqs[0].textContent.replace("\u274C", "\u2705");
        else if (!form_reqs[0].textContent.includes("\u2705")) form_reqs[0].textContent += "\u2705";
    } else {
        form_reqs[0].textContent = form_reqs[0].textContent.replace("\u2705", "\u274C");
    }
});

pass_field.addEventListener('input', () => {

});
