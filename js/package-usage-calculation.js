const display = document.querySelector(".display");
const plastic = document.querySelector(".calculate");

document.querySelector(".calculate").addEventListener("click", calculate);

function calculate() {
  const days = 365;
  const month = 12;
  const plasticBags = +document.getElementById("pastic-bags").value;
  const plasticBottles = +document.getElementById("plastic-bottles").value;
  const plasticAppliances = +document.getElementById("plastic-appliances")
    .value;
  const houseHoldPackage = +document.getElementById(
    "household-chemicals-package"
  ).value;
  const plasticBottlesLarge = +document.getElementById("large-pastic-bags")
    .value;
  const medicineBottles = +document.getElementById("medicine-bottles").value;

  display.value =
    (plasticBags + plasticBottles + plasticAppliances) * days +
    (houseHoldPackage + plasticBottlesLarge + medicineBottles) * month;
}
