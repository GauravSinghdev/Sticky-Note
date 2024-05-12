const btn1 = document.querySelector(".btn");

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


btn1.addEventListener("click", () => {

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
    d.innerHTML = `<p class="float:right">${day}</p>
                    <p class="date">${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</p>
                    <p class="note-p">${txt}</p>`

    d.style.backgroundColor = generateColor();

    document.querySelector(".notes").appendChild(d);

    document.querySelector(".txt").value = "";
})