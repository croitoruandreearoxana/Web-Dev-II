const btnHome = document.getElementById("btn-home");
const btnShopping = document.getElementById("btn-shopping");
const tipDisplay = document.getElementById("tip-display");

const tipsData = {
  home: {
    title: "Home & Energy Checklist",
    text: "Lower your water heater temperature to 49°C, clean refrigerator coils twice a year, and install weather stripping on draughty exterior doors."
  },
  shopping: {
    title: "Groceries & Goods Strategy",
    text: "Bring fabric mesh produce bags, choose loose unwrapped fruit, shop from bulk gravity bins, and refuse duplicate receipts."
  }
};

btnHome.addEventListener("click", () => {
  btnHome.classList.add("active");
  btnShopping.classList.remove("active");
  tipDisplay.innerHTML = `<h3>${tipsData.home.title}</h3><p>${tipsData.home.text}</p>`;
});

btnShopping.addEventListener("click", () => {
  btnShopping.classList.add("active");
  btnHome.classList.remove("active");
  tipDisplay.innerHTML = `<h3>${tipsData.shopping.title}</h3><p>${tipsData.shopping.text}</p>`;
});

const pledgeForm = document.getElementById("pledge-form");
const nameInput = document.getElementById("user-name");
const actionSelect = document.getElementById("user-action");
const confirmationBox = document.getElementById("confirmation-box");
const confirmationText = document.getElementById("confirmation-text");

pledgeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameVal = nameInput.value.trim();
  const actionVal = actionSelect.value;

  if (!nameVal || !actionVal) {
    confirmationBox.classList.remove("hidden");
    confirmationBox.style.backgroundColor = "#b91c1c";
    confirmationText.textContent = "Please complete all fields before confirming your commitment.";
    return;
  }

  confirmationBox.classList.remove("hidden");
  confirmationBox.style.backgroundColor = "#14532d";
  confirmationText.textContent = `Pledge recorded! Thank you, ${nameVal}, for committing to: ${actionVal}.`;

  pledgeForm.reset();
});