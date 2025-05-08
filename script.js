// 1. Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function() {
    document.getElementById("dynamic-text").textContent = "The text has changed";
});

// 2. Modify CSS styles dynamically
document.getElementById("change-color-btn").addEventListener("click", function() {
    document.getElementById("color-box").style.color = "white";
    document.getElementById("color-box").style.backgroundColor = "blue";
    document.getElementById("color-box").style.padding = "10px";
  });
  
  // 3. Add or remove an element
  const container = document.getElementById("element-container");
  
  document.getElementById("remove-btn").addEventListener("click", function() {
    const element = document.getElementById("removable-element");
    if (element) {
      container.removeChild(element);
    }
  });
  
  document.getElementById("add-btn").addEventListener("click", function() {
    if (!document.getElementById("removable-element")) {
      const newElement = document.createElement("p");
      newElement.id = "removable-element";
      newElement.textContent = "Click the button to remove me!";
      container.appendChild(newElement);
    }
  });
  