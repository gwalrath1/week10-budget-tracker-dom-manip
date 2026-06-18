const transactions = [];
const listOfIncome = [];

class BudgetTracker {
  constructor() {
    this.transactions = this.loadTransactions();
    this.form = document.querySelector("#formContainer");
    this.transactionsList = document.querySelector("#transactionsList");
    this.balanceElement = document.querySelector("#balance");
    this.addPurchaseBtn = document.querySelector("#add-purchases-button");
    this.income = document.querySelector("#total-income");

    this.initEventListeners();
    this.renderTransactions();
    this.updateBalance();
    this.calculateIncome();
  }

  loadTransactions() {
    return JSON.parse(localStorage.getItem("transactions")) || []; // stores data even after browser closes. Also how is this an array???
  }

  saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(this.transactions))
  }

  initEventListeners() {
    this.addPurchaseBtn.addEventListener("click", (e) => {
      e.preventDefault(); // prevents page from being reloaded, aka losing all of the data stored.
      this.addTransactions();
    })

  }

  clearForm() {
    document.querySelector("#name").value = "";
    document.querySelector("#amount").value = "";

  }

  addTransactions() {
    const name = document.querySelector("#name").value.trim(); // .trim() removes extra whitespace, so if a user puts extra spaces before or after what they typed, trim will get rid of it.
    const amount = parseFloat(document.querySelector("#amount").value); // parseFloat allows for decimals
    const date = document.querySelector("#date").value;
    const categoryRadioBtns = document.querySelectorAll('input[name="categories"]');

    let selectedCategory;
    for (let categoryRadioBtn of categoryRadioBtns) {
      if (categoryRadioBtn.checked) {
        selectedCategory = categoryRadioBtn.value;
        break;
      }
    }

    const type = document.querySelector("#type").value; // user selection for a <select> tag?

    // CHANGE BELOW SO IT'S NOT A WINDOW ALERT

    if(!name || isNaN(amount)) { // checks if user has put a valid description and amount.
      console.log("error!")
      alert("Please provide a valid description and amount");
      return;
    }

    const transaction = {
      id: Date.now(),
      name, 
      amount: type === 'expense' ? -amount: amount, // remember question? if yes, _____ : if no, ________. It's a shortened if/else.
      date,
      selectedCategory,
      type
    }
    this.transactions.push(transaction); // pushes transaction to our transactions array.
    this.saveTransactions();
    this.renderTransactions();
    this.updateBalance(); // why are we using this keyword? I guess if we call a method inside one of our methods, we have to use "this"?
    this.calculateIncome();

    
  }

  updateBalance() {

    // using reduce and not forEach since we are adding values to our transactions array

    const balance = this.transactions.reduce(
      (total, transaction) => total + transaction.amount, 0
    );

    console.log(balance);
    
    this.balanceElement.textContent = `$${balance.toFixed(2)}`;
    this.balanceElement.style.color = balance >= 0 ? "#2ecc71" : "#e74c3c"; // changes balance to green or red depending on if pos or neg

  }

  // NEW CODE I ADDED, NEED HELP
  calculateIncome() { 
    
    const totalIncome = 0;
    

    if(transaction.type === 'income') {
      totalIncome += transaction.amount;
      console.log(totalIncome);
      
    } else {
      console.log("calculateIncome not working")
    }
    
  }
  //

  renderTransactions() {
    this.transactionsList.innerHTML = '';
    this.transactions
      .slice()
      .sort((a, b) => b.id - a.id)
      .forEach((transaction) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
                <tr>
                  <td scope="col">${transaction.name}</td>
                  <td scope="col">$${Math.abs(transaction.amount).toFixed(2)}</td>
                  <td scope="col">${transaction.date}</td>
                  <td scope="col">${transaction.selectedCategory}</td>
                  <td scope="col">${transaction.type}</td>
                  <td scope="col">
                      <button class="delete-btn" data-id="${transaction.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path
                              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg>
                      </button>
                  </td>
                </tr>
                `;


                
        this.transactionsList.appendChild(newRow);
      });
    this.attachDeleteEventListeners();
  }
  

  attachDeleteEventListeners() { // delete button event listeners
    this.transactionsList.querySelectorAll(".delete-btn").forEach(button => {
      button.addEventListener("click", () => {
        this.deleteTransaction(Number(button.dataset.id)) // accessing the data-id for each button which is the id: Date.now() thing. And it has to be converted into a number. Why? Idfk. Could prob also use parseInt
      })
    })
  }

  deleteTransaction(id) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );

    this.saveTransactions();
    this.renderTransactions();
    this.updateBalance();
  }

}

const budgetTracker = new BudgetTracker();