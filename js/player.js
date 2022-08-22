let counter = 0;
function selectPlayer(playerName, val) {
    const pName = document.getElementById(val);
    const show = pName.innerText;
    // const selected = document.getElementById("replace-2");
    // selected.innerText = playerNeymarName;
    var ol = document.getElementById("replace-2");
    var items = ol.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
        if (items[i].innerText === "Empty") {
            items[i].innerText = show;
            counter++;
            break;
        }
    }
}

function getId(clicked, val) {
    if (counter == 5) {
        alert("No empty slot");
        return;
    }
    document.getElementById(clicked).classList.add("disable");
    document.getElementById(clicked).disabled = true;
    // console.log(clicked);

    // console.log(val);
    selectPlayer(clicked, val);
}


// document.getElementById("select").addEventListener("click", function () {
    // let value = document.getElementById("select").value;

// })
