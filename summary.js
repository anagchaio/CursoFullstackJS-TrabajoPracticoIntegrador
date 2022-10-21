function calculateTotal() {

    let username = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let quantity = document.getElementById("quantity").value;
    let category = document.getElementById("category").value;

    let total = 0;


    switch (category) {
        case "general":
            total += quantity * 200;
            break;
        case "student":
            total += quantity * 0.2 * 200;
            break;
        case "trainee":
            total += quantity * 0.5 * 200;
            break;
        case "junior":
            total += quantity * 0.85 * 200;
            break;
    }

    document.getElementById("name").value = username;
    document.getElementById("lastname").value = lastname;
    document.getElementById("email").value = email;
    document.getElementById("quantity").value = quantity;
    document.getElementById("category").value = category;
    document.getElementById("total").value = "Total a Pagar: $ " + parseInt(total);
}

function cleanForm() {
    document.getElementById("costForm").reset();
}