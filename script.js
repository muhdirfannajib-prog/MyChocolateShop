
function calculateTotal(price, quantity) {

    let total = price * quantity;

    if (quantity >= 5) {

        total = total - (total * 0.05);

    } else {

        total = total;
    }

    return total;
}


function getPaymentMessage(payment) {

    let message;

    switch (payment) {

        case "Cash":
            message = "Please prepare cash payment.";
            break;

        case "Online Banking":
            message = "Please complete online banking payment.";
            break;

        case "E-Wallet":
            message = "Please prepare E-Wallet payment.";
            break;

        default:
            message = "Payment method not selected.";
    }

    return message;
}


function placeOrder(event) {

    event.preventDefault();

    let name = document.getElementById("customer").value;

    let email = document.getElementById("email").value;

    let price = Number(document.getElementById("chocolate").value);

    let quantity = Number(document.getElementById("quantity").value);

    let payment = document.getElementById("payment").value;


    if (quantity < 1 || quantity > 100 ||
        !Number.isInteger(quantity)) {

        document.getElementById("result").textContent =
            "Please enter quantity between 1 and 100.";

        return;
    }


    let total = calculateTotal(price, quantity);

    let paymentMessage = getPaymentMessage(payment);

    let result = document.getElementById("result");

    result.textContent =
        "ORDER SUCCESSFUL!\n\n" +
        "Customer Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Quantity: " + quantity + "\n" +
        "Total Price: RM" + total.toFixed(2) + "\n\n" +
        paymentMessage;

}


let orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", placeOrder);


    document.getElementById("quantity").addEventListener("input", function() {

        let quantity = Number(this.value);

        if (quantity > 100) {

            this.setCustomValidity("Maximum quantity is 100.");

        } else {

            this.setCustomValidity("");
        }

    });


    orderForm.addEventListener("reset", function() {

        document.getElementById("result").textContent = "";

    });

}


function toggleMusic() {

    let music = document.getElementById("bg-music");

    let musicToggle = document.getElementById("music-toggle");

    if (!music) {
        return;
    }

    if (music.paused) {

        music.play();

        musicToggle.textContent = "🔊 Music: On";

    } else {

        music.pause();

        musicToggle.textContent = "🔇 Music: Off";

    }

}


let music = document.getElementById("bg-music");

if (music) {

    music.volume = 0.3;

    music.play().then(() => {

        document.getElementById("music-toggle").textContent =
            "🔊 Music: On";

    }).catch(() => {

        document.getElementById("music-toggle").textContent =
            "🔇 Music: Off";

    });

}
