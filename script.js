document.addEventListener("DOMContentLoaded", function () {
    let city = [
        "თბილისი",
        "ბათუმი",
        "ბაკურიანი",
        "ურეკი",
        "ყვარელი",
        "ფოთი",
        "მარტვილი",
    ];

    const addButton = document.getElementById("addButton");
    const replaceButton = document.getElementById("replaceButton");
    const input_element = document.getElementById("input_element");
    const cityList = document.getElementById("cityList");

    // Function to render the city list
    function renderCityList() {
        cityList.innerHTML = ""; // Clear the current list
        city.forEach(function (cityItem, index) {
            const li = document.createElement("li"); // Create a new list item
            li.textContent = `${index + 1}. ${cityItem}`; // Display index and city name
            cityList.appendChild(li); // Append the list item to the cityList
        });
    }

    // Initial rendering of the city list
    renderCityList();

    // Add city functionality
    addButton.addEventListener("click", function () {
        let input_value = input_element.value.trim(); // Get the input value and trim spaces

        // Validate input length
        if (input_value.length > 40) {
            alert("მეტია 40-ზე");  // More than 40 characters
        } else if (input_value.length < 2) {
            alert("ნაკლებია 2 ზე");  // Less than 2 characters
        } else {
            city.push(input_value); // Add the new city to the array
            input_element.value = ""; // Clear the input field
            renderCityList(); // Re-render the list
        }
    });

    // Replace city list functionality
    replaceButton.addEventListener("click", function () {
        // Define the new set of cities
        city = [
            "გორი",
            "თელავი",
            "რუსთავი",
            "გურჯაანი",
            "ლაგოდეხი",
            "საგარეჯო",
            "სიღნაღი",
        ];

        // Re-render the list to show the new cities
        renderCityList();
    });
});






