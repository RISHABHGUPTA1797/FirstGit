// Write your code below:
var mainHeading = document.getElementById("main-heading");
      mainHeading.innerHTML = "Fruit World";
      mainHeading.style.color = "orange";

      // Change header background color and add bottom border
      var header = document.getElementById("header");
      header.style.backgroundColor = "green";
      header.style.borderBottom = "2px solid orange";

      // Change "Fruits In Basket" font color
      var basketHeading = document.getElementById("basket-heading");
      basketHeading.style.color = "green";

      // Introduce a paragraph inside the "thanks" div
      var thanksDiv = document.getElementById("thanks");
      var paragraph = document.createElement("p");
      paragraph.textContent = "Please visit us again";
      thanksDiv.appendChild(paragraph);