function selectPlayer(playerName) {
    const playerNeymar = document.getElementById(playerName);
    const playerNeymarName = playerNeymar.innerText;
    const selected = document.getElementById("replace-2");
    selected.innerText = playerNeymarName;
}


document.getElementById("select-neymar").addEventListener("click", function () {
    selectPlayer("neymar");
})
document.getElementById("select-bappe").addEventListener("click", function () {
    selectPlayer("bappe");
})

document.getElementById("select-messi").addEventListener("click", function () {
    selectPlayer("messi");
})
document.getElementById("select-ramos").addEventListener("click", function () {
    selectPlayer("ramos");
})
document.getElementById("select-draxler").addEventListener("click", function () {
    selectPlayer("draxler");
})
document.getElementById("select-marquinos").addEventListener("click", function () {
    selectPlayer("marquinos");
})
document.getElementById("select-veratti").addEventListener("click", function () {
    selectPlayer("veratti");
})
document.getElementById("select-icardi").addEventListener("click", function () {
    selectPlayer("icardi");
})
document.getElementById("select-hakimi").addEventListener("click", function () {
    selectPlayer("hakimi");
})

