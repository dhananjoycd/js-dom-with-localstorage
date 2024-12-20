let form = document.getElementById("form");
form.style.backgroundColor = "#9df9ef";
form.style.padding = "10px";
form.style.display = "flex";
form.style.justifyContent = "space-around";
form.style.alignItems = "center";

// main function to build the apllication

let savedProductInfo = JSON.parse(localStorage.getItem("saveInfo")) || [];
let productShow = document.getElementById("list");

const saveInfo = () => {
  let keyData = document.getElementById("input-key");
  let keyValue = document.getElementById("input-value");

  // Create the new object
  let inputedData = {
    phoneName: keyData.value,
    phonePrice: keyValue.value,
  };
  // Push the new data into the array
  savedProductInfo.push(inputedData);
  // Save the updated array back to local storage
  localStorage.setItem("saveInfo", JSON.stringify(savedProductInfo));
  // Clear the input fields
  keyData.value = "";
  keyValue.value = "";

  // Alert the user
  alert("Product info saved successfully!");

  // reload the page
  location.reload();
};

const displayInfo = () => {
  for (let product of savedProductInfo) {
    const productDiv = document.createElement("div");
    // Apply inline CSS for styling
    productDiv.style.border = "1px solid #ccc";
    productDiv.style.margin = "10px 0";
    productDiv.style.padding = "10px";
    productDiv.style.borderRadius = "5px";
    productDiv.style.backgroundColor = "#f9f9f9";
    productDiv.style.fontFamily = "Arial, sans-serif";

    productDiv.innerHTML = `Here the phone is <mark> - ${product.phoneName}   </mark> and Price: <mark> ${product.phonePrice} </mark>`;
    productShow.appendChild(productDiv);
  }
};

// Update the display dynamically
displayInfo();
