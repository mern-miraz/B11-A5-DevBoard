document.getElementById("color_changes").addEventListener("click", function(){
    let colors = ["red", "blue", "green", "yellow", "purple", "#F4F7FF"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
})