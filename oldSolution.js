const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

//If-else statement to check temperature
if (temperature > 80) { 
    console.log("Watering on");
}
else {
    console.log("Watering off");
}

//If-else statement to check time of day
if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("Lights on");
}
else {
    console.log("Lights off");
}

// While loop to check the soil moisture level
while (soilMoisture <= 40) {
    console.log(soilMoisture);
    soilMoisture += 5;
}