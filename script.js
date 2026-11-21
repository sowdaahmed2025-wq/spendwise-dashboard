// ===== Data =====
const currency = "KES";
let budget = 0;
let expenses = [];   // array of objects: { name, amount, category }

// ===== Grab elements from the page =====
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const budgetDisplay = document.getElementById("budget-display");
const totalSpent = document.getElementById("total-spent");
const remainingDisplay = document.getElementById("remaining");
const statusMessage = document.getElementById("status-message");
const clearBtn = document.getElementById("clear-btn");

// ===== Functions =====
function calculateTotal(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {   // loop through the array
    total += list[i].amount;
  }
  return total;
}

function calculateBalance(budgetAmount, total) {
  return budgetAmount - total;
}

function getStatus(budgetAmount, total) {
  // conditionals decide the feedback
  if (budgetAmount === 0) {
    return { text: "Set a budget to get started.", type: "" };
  }
  const percentUsed = (total / budgetAmount) * 100;

  if (percentUsed > 100) {
    return { text: "You are over budget!", type: "danger" };
  } else if (percentUsed >= 80) {
    return { text: "Warning: you have used " + Math.round(percentUsed) + "% of your budget.", type: "warning" };
  } else {
    return { text: "You are within budget. Used " + Math.round(percentUsed) + "%.", type: "good" };
  }
}

function renderExpenses() {
  expenseList.innerHTML = "";   // clear the list first

  if (expenses.length === 0) {
    expenseList.innerHTML = "<li>No expenses yet.</li>";
    return;
  }

  // loop to display each expense on the page
  for (let i = 0; i < expenses.length; i++) {
    const item = document.createElement("li");
    item.textContent = expenses[i].name + " (" + expenses[i].category + ") - " +
      currency + " " + expenses[i].amount;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      expenses.splice(i, 1);   // remove from array
      updateDashboard();
    });

    item.appendChild(deleteBtn);
    expenseList.appendChild(item);
  }
}

function updateDashboard() {
  const total = calculateTotal(expenses);
  const balance = calculateBalance(budget, total);
  const status = getStatus(budget, total);

  budgetDisplay.textContent = currency + " " + budget;
  totalSpent.textContent = currency + " " + total;
  remainingDisplay.textContent = currency + " " + balance;
  statusMessage.textContent = status.text;
  statusMessage.className = status.type;

  renderExpenses();

  // also log to the console
  console.log("Budget:", budget, "| Spent:", total, "| Remaining:", balance);
}

// ===== Events =====
budgetForm.addEventListener("submit", function (event) {
  event.preventDefault();   // stop the page from reloading
  const value = Number(budgetInput.value);

  if (value <= 0 || isNaN(value)) {
    statusMessage.textContent = "Please enter a budget greater than 0.";
    statusMessage.className = "danger";
    return;
  }

  budget = value;
  budgetInput.value = "";
  updateDashboard();
});

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = expenseName.value.trim();
  const amount = Number(expenseAmount.value);

  if (name === "" || amount <= 0 || isNaN(amount)) {
    statusMessage.textContent = "Enter an expense name and an amount greater than 0.";
    statusMessage.className = "danger";
    return;
  }

  if (budget === 0) {
    statusMessage.textContent = "Please set a budget first.";
    statusMessage.className = "warning";
    return;
  }

  expenses.push({ name: name, amount: amount, category: expenseCategory.value });

  expenseName.value = "";
  expenseAmount.value = "";
  updateDashboard();
});

clearBtn.addEventListener("click", function () {
  expenses = [];
  updateDashboard();
});

// ===== Start =====
updateDashboard();