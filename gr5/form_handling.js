const form_reqs = document.getElementsByClassName("f_req");
const email_field = document.getElementById("form_email");
const pass_field = document.getElementById("form_pass");
const signup_err = document.getElementById("f_err");
const login_form = document.getElementById("f_login");

let conditions = [false, false, false, false, false, false];
const CONDITIONS_SIZE = 6;

email_field.addEventListener('input', (e) => {
    if(signup_err.textContent != "") signup_err.textContent = "";

    const current_text = form_reqs[0].textContent;
    const email_regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    const valid = email_regex.test(e.target.value.trim());
    if(!valid && !current_text.includes("\u274C") && !form_reqs[0].textContent.includes("\u2705")){
        form_reqs[0].textContent += "\u274C";
        conditions[0] = false;
    } else if (valid){
        if(form_reqs[0].textContent.includes("\u274C")) form_reqs[0].textContent = form_reqs[0].textContent.replace("\u274C", "\u2705");
        else if (!form_reqs[0].textContent.includes("\u2705")) form_reqs[0].textContent += "\u2705";
        conditions[0] = true;
    } else {
        form_reqs[0].textContent = form_reqs[0].textContent.replace("\u2705", "\u274C");
        conditions[0] = false;
    }
});

pass_field.addEventListener('input', (e) => {
    if(signup_err.textContent != "") signup_err.textContent = "";

    const char_len_req = form_reqs[1];
    const char_spec_req = form_reqs[2];
    const char_upper_req = form_reqs[3];
    const char_lower_req = form_reqs[4];
    const num_req = form_reqs[5];

    const current_len_text = char_len_req.textContent;
    if(e.target.value.length < 16 && !current_len_text.includes("\u274C")){
        if(!current_len_text.includes("\u2705")) char_len_req.textContent += "\u274C";
        else char_len_req.textContent = char_len_req.textContent.replace("\u2705", "\u274C");
        conditions[1] = false;
    }
    if (e.target.value.length >= 16){
        if(!current_len_text.includes("\u274C") && !current_len_text.includes("\u2705")) char_len_req.textContent += "\u2705";
        else char_len_req.textContent = char_len_req.textContent.replace("\u274C", "\u2705");
        conditions[1] = true;
    }

    const current_spec_text = char_spec_req.textContent;
    const spec_regex = /[^a-zA-Z0-9 ]/;
    if(!spec_regex.test(e.target.value) && !current_spec_text.includes("\u274C")){
        if(!current_spec_text.includes("\u2705")) char_spec_req.textContent += "\u274C";
        else char_spec_req.textContent = char_spec_req.textContent.replace("\u2705", "\u274C");
        conditions[2] = false;
    }
    if (spec_regex.test(e.target.value)){
        if(!current_spec_text.includes("\u274C") && !current_spec_text.includes("\u2705")) char_spec_req.textContent += "\u2705";
        else char_spec_req.textContent = char_spec_req.textContent.replace("\u274C", "\u2705");
        conditions[2] = true;
    }

    const current_upper_text = char_upper_req.textContent;
    const upper_regex = /[A-Z]/;
    if(!upper_regex.test(e.target.value) && !current_upper_text.includes("\u274C")){
        if(!current_upper_text.includes("\u2705")) char_upper_req.textContent += "\u274C";
        else char_upper_req.textContent = char_upper_req.textContent.replace("\u2705", "\u274C");
        conditions[3] = false;
    }
    if (upper_regex.test(e.target.value)){
        if(!current_upper_text.includes("\u274C") && !current_upper_text.includes("\u2705")) char_upper_req.textContent += "\u2705";
        else char_upper_req.textContent = char_upper_req.textContent.replace("\u274C", "\u2705");
        conditions[3] = true;
    }

    const current_lower_text = char_lower_req.textContent;
    const lower_regex = /[a-z]/;
    if(!lower_regex.test(e.target.value) && !current_lower_text.includes("\u274C")){
        if(!current_lower_text.includes("\u2705")) char_lower_req.textContent += "\u274C";
        else char_lower_req.textContent = char_lower_req.textContent.replace("\u2705", "\u274C");
        conditions[4] = false;
    }
    if (lower_regex.test(e.target.value)){
        if(!current_lower_text.includes("\u274C") && !current_lower_text.includes("\u2705")) char_lower_req.textContent += "\u2705";
        else char_lower_req.textContent = char_lower_req.textContent.replace("\u274C", "\u2705");
        conditions[4] = true;
    }

    const current_num_text = num_req.textContent;
    const num_regex = /[1-9]/;
    if(!num_regex.test(e.target.value) && !current_num_text.includes("\u274C")){
        if(!current_num_text.includes("\u2705")) num_req.textContent += "\u274C";
        else num_req.textContent = num_req.textContent.replace("\u2705", "\u274C");
        conditions[5] = false;
    }
    if (num_regex.test(e.target.value)){
        if(!current_num_text.includes("\u274C") && !current_num_text.includes("\u2705")) num_req.textContent += "\u2705";
        else num_req.textContent = num_req.textContent.replace("\u274C", "\u2705");
        conditions[5] = true;
    }
});

f_login.addEventListener('submit', (e) => {
    var success = true;
    for(var i = 0; i < CONDITIONS_SIZE; ++i){
        if(!conditions[i]) success = false;
    }
    if(success){
        window.location.href = "success.html";
    } else {
        e.preventDefault();
        signup_err.textContent = "Signup failed. Check above for email and password requirements.";
        for(let i = 0; i < form_reqs.length; ++i){
            if(!form_reqs[i].textContent.includes("\u274C") && !conditions[i]) form_reqs[i].textContent += "\u274C";
        }
    }
});