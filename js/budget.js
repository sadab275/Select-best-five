document.getElementById("calculatePlayer").addEventListener("click", function () {
    const perPlayerAmount = document.getElementById("perPlayerAmount");
    const perPlayerAmountString = perPlayerAmount.value;
    const perPlayerAmountCost = parseInt(perPlayerAmountString);
    const playerExpense = document.getElementById("intotalPlayerExpense");
    playerExpense.innerText = perPlayerAmountCost * 5;
})

