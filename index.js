
/* ADD BUDGET */

const budgetButton = document.querySelector('#budget-button');
const budgetTable = document.querySelector('#budget-table');

budgetButton.addEventListener('click', (e) => {
   // 1. Get the CURRENT values from the inputs inside the click event
   const budgetEntered = document.querySelector("#budget-entered").value;
   const totalBudgetSummary = document.querySelector("#total-budget-summary");
   totalBudgetSummary.append(budgetEntered);
});

/* ADD PURCHASE */

const addPurchaseButton = document.querySelector("#add-purchases-button");
const purchasesTable = document.querySelector("#purchases-table > tbody");

addPurchaseButton.addEventListener('click', (e) => {
    // 1. Get the CURRENT values from the inputs inside the click event
    let purchase = document.querySelector("#purchase").value;
    let amount = document.querySelector("#amount").value;
    let date = document.querySelector("#date").value;
    let category = document.querySelector("#category").value;

// ------------------------------------------------- // 

  /**
  * Create an HTML element from the HTML text value
  * @param {string} html The HTML to create element
  * @returns {HTMLElement}
  */

    function createHTMLElement (html) { // pass in html code from bootstrap (or whatever html you want to create)
     const template = document.createElement('template');
     template.innerHTML = html;
     return template.content.firstElementChild;

   };
    let budgetLeft = document.querySelector("#budget-entered").value;
    let balance = 0;
    let rowPurchases = createHTMLElement(
        `<tr>
            <td>${purchase}</td>
            <td>$${amount}</td>
            <td>${date}</td>
            <td>${category}</td>
            <td>${budgetLeft - amount}</td>
        </tr>`
    );

/* PURCHASE ADDED TO DOM */
    purchasesTable.append(rowPurchases);

/* EXPENSES CALCULATED, PUT INTO SUMMARY TABLE */

    let totalExpenses = document.querySelector("#total-expenses");
    let balanceDyanmic = document.querySelector("#balance-in-table").value;
    totalExpenses = balanceDyanmic - amount;
});

 
    const totalExpensesSummary = document.querySelector("#total-expenses-summary");
    
    // to calculate the total expenses I have to use for of and make an array to store the sum of expenses to subtract from the entered budget.

    let listOfExpenses = [];

    function sumOfExpenses(amount) {
        listOfExpenses.push(amount.value);
    console.log("These are all of the expenses: " + listOfExpenses);
    }
    
   sumOfExpenses();

/* BALANCE IS CALCULATED AND ADDED TO BALANCE COLUMN AND BUDGET LEFT COLUMN */


/* PIE CHART */

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});


   


   

