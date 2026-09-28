function compute() {
    var principalElement = document.getElementById("principal");
    var rateElement = document.getElementById("rate");
    var yearsElement = document.getElementById("years");
    var resultElement = document.getElementById("result");

    // Prevent TypeErrors by ensuring HTML elements actually exist before pulling values
    if (!principalElement || !rateElement || !yearsElement || !resultElement) {
        console.error("One or more elements could not be found.");
        return;
    }

    // Convert string input values properly to numbers before use in calculations
    var principal = parseFloat(principalElement.value);
    var rate = parseFloat(rateElement.value);
    var years = parseInt(yearsElement.value);

    // Form Validation
    if (isNaN(principal) || principal <= 0) {
        alert("Enter a positive number");
        principalElement.focus();
        return;
    }

    // Calculate the interest and the future year
    var interest = (principal * years * rate) / 100;
    var currentYear = new Date().getFullYear();
    var futureYear = currentYear + years;

    // Display the final result
    resultElement.innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "%</mark>.<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/>" +
        "in the year <mark>" + futureYear + "</mark>";
}

function updateRate() {
    var rateElement = document.getElementById("rate");
    var rateValElement = document.getElementById("rate_val");
    
    // Prevent TypeErrors by ensuring elements exist
    if (rateElement && rateValElement) {
        rateValElement.innerText = rateElement.value + "%";
    }
}
