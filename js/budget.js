document.getElementById("calculatePlayer").addEventListener("click", function () {
    const perPlayerAmount = document.getElementById("perPlayerAmount");
    const perPlayerAmountString = perPlayerAmount.value;
    const perPlayerAmountCost = parseInt(perPlayerAmountString);
    const playerExpense = document.getElementById("intotalPlayerExpense");
    const playerCostTotal = perPlayerAmountCost * 5;
    playerExpense.innerText = playerCostTotal;
})
document.getElementById("calculateTotal").addEventListener("click", function () {
    const manager = document.getElementById("manager-amount");
    const managerString = manager.value;
    const managerAmount = parseInt(managerString);

    const coach = document.getElementById("coach-amount");
    const coachString = coach.value;
    const coachAmount = parseInt(coachString);

    const totalExpense = playerCostTotal + managerAmount + coachAmount;

    const totalCost = document.getElementById("total-expense");
    totalCost.innerText = totalExpense;
})
