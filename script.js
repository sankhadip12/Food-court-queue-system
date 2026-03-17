let token = 0;

// Full Menu Data
const menu = {
    breakfast: {
        veg: ["Idli", "Dosa", "Puri", "Upma", "Tea"],
        nonveg: ["Egg Omelette", "Egg Roll"]
    },
    lunch: {
        veg: ["Veg Biryani", "Paneer Curry", "Dal Rice", "Roti"],
        nonveg: ["Chicken Biryani", "Egg Curry", "Fish Curry"]
    },
    dinner: {
        veg: ["Chapati", "Veg Curry", "Fried Rice"],
        nonveg: ["Chicken Curry", "Noodles", "Egg Fried Rice"]
    }
};

// Load menu on start
window.onload = function () {
    updateMenu();
};

function updateMenu() {
    let meal = document.getElementById("meal").value;
    let type = document.getElementById("type").value;

    let foodSelect = document.getElementById("food");
    let display = document.getElementById("menuDisplay");

    foodSelect.innerHTML = "";
    display.innerHTML = "";

    menu[meal][type].forEach(item => {

        // Dropdown
        let option = document.createElement("option");
        option.text = item;
        foodSelect.add(option);

        // Display screen
        let li = document.createElement("li");
        li.textContent = item + " - Available";
        display.appendChild(li);
    });
}

function generateToken() {
    token++;

    let food = document.getElementById("food").value;

    document.getElementById("token").innerHTML =
        "Token Number: " + token;

    document.getElementById("status").innerHTML =
        "Preparing " + food + "...";

    setTimeout(() => {
        document.getElementById("status").innerHTML =
            "Ready! Collect your food 🍽";
    }, 4000);
}
