//<-------------------------------------Javascript----------------------------->
// //assign HTML elements to variables
// let list = document.getElementById('list');
// let btn = document.getElementById('todoBtn');
// let input = document.getElementById('add');

// //click event listener for add button. Adds new
// //items to lists based on input text box
// btn.addEventListener('click', ()=>{
//     let newli = document.createElement("li");
//     newli.innerText = input.value;
//     //newli.setAttribute('id', input.value); //sets the id of new list items. Not Used
//     if(input.value == ""){
//         alert("Enter a task");
//     } else {
//        list.appendChild(newli);

//         //clears the text input box after adding it to the list
//         setTimeout(()=>{
//             input.value = '';
//         }, 100); 
//     };
    
// });

// //allows for pressing ENTER key while typing in text box
// //to add items to the list
// input.addEventListener('keyup', (e)=>{
//     if(e.keyCode == 13){
//         btn.click();
//     };
// });

// //checks if the clicked item is a LI(list) item. If it is then
// //strike through the item.
// list.addEventListener('click', (e)=>{
//     if(e.target && e.target.nodeName == "LI"){
//         e.target.style = "text-decoration: line-through";
        
//         //removes the clicked item 1 sec after it was striked
//         setTimeout(()=>{
//            e.target.remove(); 
//         }, 1000);
//     };
// });

//<-----------------------jQuery----------------------------------->
//assign HTML elements to variables
let list = $('#list');
let btn = $('#todoBtn');
let input = $('#add');

//click event for add button. Adds new
//items to lists based on input text box
btn.click( ()=>{
    if(input.val() == ""){
        alert("Enter a task");
    } else {
        list.append('<li>' + input.val() + '</li>');
    };
    //clears the text input box after adding it to the list
    setTimeout( ()=>{
        input.val('');
    }, 100);
});

//allows for pressing ENTER key while typing in text box
//to add items to the list
input.keyup( (e)=>{
    if(e.keyCode == 13){
        btn.click();
    };
});

//checks if the clicked item is a LI(list) item. If it is then
//strike through the item.
list.click( (e)=>{
    if(e.target && e.target.nodeName == "LI"){
        e.target.style = "text-decoration: line-through";       
        //removes the clicked item 1 sec after it was striked
        setTimeout(()=>{
            e.target.remove(); 
        }, 1000);
    };
})