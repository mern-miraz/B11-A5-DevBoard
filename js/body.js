document.getElementById("task_btn_1").addEventListener("click", function(){
    let innerText = document.getElementById("task_assign_Increment").innerText;
    let increment = parseInt(innerText) + 1;   
    document.getElementById("task_assign_Increment").innerText = increment;

    let taskMark = document.getElementById("task_assign_Decrement").innerText;
    let decrement = parseInt(taskMark) - 1;
    document.getElementById("task_assign_Decrement").innerText = decrement;

    document.getElementById("clear_history").innerText;

    let taskTitle = document.getElementById("task_title_1").innerText;

    // create a new paragraph with current time and append this 
    let date = new Date();
    let time = date.toLocaleTimeString();
    let paragraph = document.createElement("p");
    paragraph.innerText = "You have Complete The Task " + taskTitle + " at " + time;
    document.getElementById("clear_history").appendChild(paragraph);

    // now I want to disable and opacity button after click
    document.getElementById("task_btn_1").disabled = true;
    document.getElementById("task_btn_1").style.opacity = 0.5;

    alert("Board Updated Successfully!");
})


document.getElementById("task_btn_2").addEventListener("click", function(){
    let innerText = document.getElementById("task_assign_Increment").innerText;
    let increment = parseInt(innerText) + 1;   
    document.getElementById("task_assign_Increment").innerText = increment;

    let taskMark = document.getElementById("task_assign_Decrement").innerText;
    let decrement = parseInt(taskMark) - 1;
    document.getElementById("task_assign_Decrement").innerText = decrement;

    document.getElementById("clear_history").innerText;

    let taskTitle = document.getElementById("task_title_2").innerText;

    // create a new paragraph with current time and append this 
    let date = new Date();
    let time = date.toLocaleTimeString();
    let paragraph = document.createElement("p");
    paragraph.innerText = "You have Complete The Task " + taskTitle + " at " + time;
    document.getElementById("clear_history").appendChild(paragraph);

    // now I want to disable and opacity button after click
    document.getElementById("task_btn_2").disabled = true;
    document.getElementById("task_btn_2").style.opacity = 0.5;

    alert("Board Updated Successfully!");
})



document.getElementById("task_btn_3").addEventListener("click", function(){
    let innerText = document.getElementById("task_assign_Increment").innerText;
    let increment = parseInt(innerText) + 1;   
    document.getElementById("task_assign_Increment").innerText = increment;

    let taskMark = document.getElementById("task_assign_Decrement").innerText;
    let decrement = parseInt(taskMark) - 1;
    document.getElementById("task_assign_Decrement").innerText = decrement;

    document.getElementById("clear_history").innerText;

    let taskTitle = document.getElementById("task_title_3").innerText;

    // create a new paragraph with current time and append this 
    let date = new Date();
    let time = date.toLocaleTimeString();
    let paragraph = document.createElement("p");
    paragraph.innerText = "You have Complete The Task " + taskTitle + " at " + time;
    document.getElementById("clear_history").appendChild(paragraph);

    // now I want to disable and opacity button after click
    document.getElementById("task_btn_3").disabled = true;
    document.getElementById("task_btn_3").style.opacity = 0.5;

    alert("Board Updated Successfully!");
})




document.getElementById("task_btn_4").addEventListener("click", function(){
    let innerText = document.getElementById("task_assign_Increment").innerText;
    let increment = parseInt(innerText) + 1;   
    document.getElementById("task_assign_Increment").innerText = increment;

    let taskMark = document.getElementById("task_assign_Decrement").innerText;
    let decrement = parseInt(taskMark) - 1;
    document.getElementById("task_assign_Decrement").innerText = decrement;

    document.getElementById("clear_history").innerText;

    let taskTitle = document.getElementById("task_title_4").innerText;

    // create a new paragraph with current time and append this 
    let date = new Date();
    let time = date.toLocaleTimeString();
    let paragraph = document.createElement("p");
    paragraph.innerText = "You have Complete The Task " + taskTitle + " at " + time;
    document.getElementById("clear_history").appendChild(paragraph);

    // now I want to disable and opacity button after click
    document.getElementById("task_btn_4").disabled = true;
    document.getElementById("task_btn_4").style.opacity = 0.5;

    alert("Board Updated Successfully!");
})





document.getElementById("task_btn_5").addEventListener("click", function(){
    let innerText = document.getElementById("task_assign_Increment").innerText;
    let increment = parseInt(innerText) + 1;   
    document.getElementById("task_assign_Increment").innerText = increment;

    let taskMark = document.getElementById("task_assign_Decrement").innerText;
    let decrement = parseInt(taskMark) - 1;
    document.getElementById("task_assign_Decrement").innerText = decrement;

    document.getElementById("clear_history").innerText;

    let taskTitle = document.getElementById("task_title_5").innerText;

    // create a new paragraph with current time and append this 
    let date = new Date();
    let time = date.toLocaleTimeString();
    let paragraph = document.createElement("p");
    paragraph.innerText = "You have Complete The Task " + taskTitle + " at " + time;
    document.getElementById("clear_history").appendChild(paragraph);

    // now I want to disable and opacity button after click
    document.getElementById("task_btn_5").disabled = true;
    document.getElementById("task_btn_5").style.opacity = 0.5;

    alert("Board Updated Successfully!");
})






document.getElementById("task_btn_6").addEventListener("click", function(){
    let innerText = document.getElementById("task_assign_Increment").innerText;
    let increment = parseInt(innerText) + 1;   
    document.getElementById("task_assign_Increment").innerText = increment;

    let taskMark = document.getElementById("task_assign_Decrement").innerText;
    let decrement = parseInt(taskMark) - 1;
    document.getElementById("task_assign_Decrement").innerText = decrement;

    document.getElementById("clear_history").innerText;

    let taskTitle = document.getElementById("task_title_6").innerText;

    // create a new paragraph with current time and append this 
    let date = new Date();
    let time = date.toLocaleTimeString();
    let paragraph = document.createElement("p");
    paragraph.innerText = "You have Complete The Task " + taskTitle + " at " + time;
    document.getElementById("clear_history").appendChild(paragraph);

    // now I want to disable and opacity button after click
    document.getElementById("task_btn_6").disabled = true;
    document.getElementById("task_btn_6").style.opacity = 0.5;

    alert("Board Updated Successfully!");
})

document.getElementById("clear_history_1").addEventListener("click", function(){
    document.getElementById("clear_history").innerText = "";
})

