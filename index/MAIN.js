//svg icons for addition
let editSVG = ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" style="enable-background: new 0 0 100 100;"> <path class="fill" data-name="Path 535" class="cls-1" d="M3,17.2V21H6.8l11-11.1L14,6.1ZM20.7,7a.967.967,0,0,0,0-1.4L18.4,3.3a.967.967,0,0,0-1.4,0L15.2,5.1,19,8.9C18.9,8.9,20.7,7,20.7,7Z" transform="translate(-3 -3)"/></svg>'
let removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="enable-background:new 0 0 100 100"><path d="M0 0h24v24H0V0z" fill="none"/><path class="fill" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>'
let completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="enable-background: new 0 0 100 100;"><path d="M0 0h24v24H0V0z" fill="none"/><path class="fill" d="M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z"/></svg>'

//lets make the add button work. to add in the input,text which is the value
document.getElementById("add").addEventListener("click", function(){
    let value = document.getElementById("item").value;
    if (value){
        additemtodolist(value); //this if the value exist already,add it else blank space?
        document.getElementById("item").value ='';
    }
});

//lets make the additemtodolist thingy function as a function by creating variables yes?
function additemtodolist(text){
    let list = document.getElementById("todo");
    let item = document.getElementsByClassName("text-line");
    let textvalue = document.createTextNode("text");
    item.innerText = text;

    item.appendChild(textvalue);
    list.appendChild(item);



    // 
    
    // let input = document.createElement("input");
    // input.value = text;

    // item.appendChild(list)

    // 


//we want to add the buttons now yes?

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    let edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = editSVG;

    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = removeSVG;

    let complete = document.createElement("button");
    complete.classList.add("complete");
    complete.innerHTML = completeSVG;


    buttons.appendChild(edit);
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);







}

