const btn1 = document.querySelector(".btn");
const txt = document.querySelector(".txt");

const generateColor = () => {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let color = "#";
    for(let i=0;i<6;i++)
    {
        color += arr[Math.floor(Math.random() * arr.length)];
    }

    if(color === "#C3FF93") return "#FFFFFF";

    return color;
}



const action = () => {

    console.log("Clicked");
    const txt = document.querySelector(".txt").value;

    if(txt === "")
    {
        alert("Note is empty!"); 
        return;
    }
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    const day = days[date.getDay()];

    const d = document.createElement("div");

    d.className = "note";
    d.innerHTML = `<div class="new-div">
                    <p class="float:right">${day}</p>
                    <p class="date">${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</p>
                    <p class="note-p">${txt}</p>
                    </div>`

    d.style.backgroundColor = generateColor();

    document.querySelector(".notes").appendChild(d);

    document.querySelector(".txt").value = "";
}

btn1.addEventListener("click", action);

txt.addEventListener("keydown", (event) => {
    // Check if the pressed key is 'Enter'
    if (event.key === "Enter" || event.keyCode === 13) {
        action(); // Call your function
    }
});
