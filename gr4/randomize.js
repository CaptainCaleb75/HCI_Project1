const boxes = document.getElementsByClassName("mystery");
const box_links = document.getElementsByClassName("mystery-link");
const dialogue_div = document.getElementById("dialogue");
const game_instruction = document.getElementById("instruction");
let original_game_instruction = "";

window.addEventListener('load', () => {
    var already_assigned_win = false;
    const RAND_NUM = Math.floor(Math.random() * box_links.length);
    for(let i = 0; i < box_links.length; ++i){
        if(i == RAND_NUM && !already_assigned_win){
            box_links[i].setAttribute('href', 'win.html');
            already_assigned_win = true;
        } else {
            box_links[i].setAttribute('href', 'lose.html');
        }
        box_links[i].addEventListener('click', (e) => {
            e.preventDefault();
         });
    }
    original_game_instruction = game_instruction.textContent;
});

function chooseAnother() {
    game_instruction.textContent = original_game_instruction;
    for(let i = 0; i < boxes.length; ++i){
        boxes[i].hidden = false;
    }
    dialogue_div.replaceChildren();
}

function confirm(elem){
    for(let i = 0; i < boxes.length; ++i){
        boxes[i].hidden = true;
    }

    game_instruction.textContent = "Are you sure you want to choose BOX " + elem.getAttribute('id')[1] + "?";

    const yes_link = document.createElement('a');
    const yes = document.createElement('button');
    const no = document.createElement('button');

    const parent = elem.parentElement;
    yes_link.href = parent.getAttribute('href');
    yes.textContent = "Yes";
    yes_link.appendChild(yes);
    dialogue_div.appendChild(yes_link);

    no.addEventListener('click', () => chooseAnother());
    no.id = "no";
    no.textContent = "No";
    dialogue_div.appendChild(no);
}