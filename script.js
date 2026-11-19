// ===== Data =====
let userName = "";
let monthlyBudget = 0;
let expenseName = "";
let expenseAmount = 0;
let remainingBalance = 0;
const currency = "KES";

// ===== Functions =====
function calculateRemainingBalance(budget, expenses) {
  return budget - expenses;
}

function checkBudgetStatus(balance) {
  if (balance < 0) return "You are over budget!";
  if (balance === 0) return "You have used your entire budget.";
  return "You are within budget.";
}

// ===== User Input =====
userName = prompt("What is your name?");
monthlyBudget = Number(prompt("Enter your monthly budget:"));
expenseName = prompt("Enter an expense name (e.g. Rent):");
expenseAmount = Number(prompt("Enter the amount for " + expenseName + ":"));

// ===== Calculation =====
remainingBalance = calculateRemainingBalance(monthlyBudget, expenseAmount);

// ===== Output =====
console.log("===== SpendWise Summary =====");
console.log("Name: " + userName);
console.log("Monthly Budget: " + currency + " " + monthlyBudget);
console.log("Expense (" + expenseName + "): " + currency + " " + expenseAmount);
console.log("Remaining Balance: " + currency + " " + remainingBalance);
console.log("Status: " + checkBudgetStatus(remainingBalance));