// read from the localStorage saved as a string - to see if there are anything saved on the users coomputer
let acctString = localStorage.getItem("accounts")
let accountList = acctString ? JSON.parse(acctString) : [];5 6i // converts string into the correct data type in this case object

const form = document.getElementById("dForm"); // get the HTML form from q3ge2Mendoza.html

// event handler on the submit button instead of onsubmit on the button itself
if (form) {
form.addEventListener("submit", function(e) { // assign an event handler of submit to the form
    e.preventDefault(); // prevent page reload because forms gets submitted

    if (confirm("Sure You Want To Save Your Work?")) {   
        // use a predefined class to create an object of data
        const data = new FormData(form);

        // Convert to object
        const obj = Object.fromEntries(data.entries()); // get all the data from the form
        accountList.push(obj);
        // place the object inside the accountList
        // accountList is an object containing other objects with username as the key
        localStorage.setItem("accounts", JSON.stringify(accountList));
        alert("Sign-up saved.");
        form.reset();
    }
  });

// event handler for the reset button instead of onreset on the button itself
form.addEventListener("reset", function(e) { // 
  // Ask for confirmation before clearing
  if (!confirm("Sure you want to clear your data?")) {
    e.preventDefault(); // cancel the reset if user clicks "Cancel"
  }
});
