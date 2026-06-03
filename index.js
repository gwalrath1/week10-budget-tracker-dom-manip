
/* ADD BUDGET */

let purchasesTable = document.querySelector("#purchases-table > tbody");
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

addPurchaseButton.addEventListener('click', (e) => {
    // 1. Get the CURRENT values from the inputs inside the click event
    let purchase = document.querySelector("#purchase").value;
    let amount = document.querySelector("#amount").value;
    let date = document.querySelector("#date").value;

    
    let categoryRadioBtns = document.querySelectorAll('input[name="categories"]');
    

    let selectedCategory;
    for (let categoryRadioBtn of categoryRadioBtns) {
      if(categoryRadioBtn.checked) {
        selectedCategory = categoryRadioBtn.value;
        break;
      }
    }

    console.log(`you selected ${selectedCategory}`);
    console.log(amount);
    console.log(date);
    console.log(purchase);

    

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
    let totalBudget = document.querySelector("#budget-entered").value;
    
    
    


    let rowPurchases = createHTMLElement(
        `<tr>
            <td>${purchase}</td>
            <td>$${amount}</td>
            <td>${date}</td>
            <td>${selectedCategory}</td>
            <td>${totalBudget - amount}</td>
            <td>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                  </svg>
                </button>
            </td>
        </tr>`
    );

/* PURCHASE ADDED TO DOM */
    purchasesTable.append(rowPurchases);

/* CALCULATE EXPENSES */

    let transactionsArray = [];

    for (let i = 0; i < transactionsArray.length; i++) {
      transactionsArray.push(amount);
      let expensesTotal = 0;
      expensesTotal = expensesTotal + transactionsArray[i];
      console.log("Your total number of expenses is " + expensesTotal);
    }

    
});



/* PIE CHART */

var xValues = ["Home/Utilities", "Transportation", "Groceries", "Insurance", "Restaurants, Shopping, Entertainment"];
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
      text: ""
    }
  }
});


   


   

