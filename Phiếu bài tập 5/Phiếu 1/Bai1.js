var selectDay = document.getElementById("day");
var selectMonth = document.getElementById("month");
var selectYear = document.getElementById("year");

for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectDay.appendChild(option);
}
for (var i = 1; i <= 12; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectMonth.appendChild(option);
}
for (var i = 1990; i <= 2021; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
}