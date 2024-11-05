function predictMalaria() {
    // Collect answers from form
    const form = document.getElementById("symptom-form");
    const formData = new FormData(form);
    let score = 0;

    // Symptom conditions
    if (formData.get("fever") === "yes") score++;
    if (formData.get("chills") === "yes") score++;
    if (formData.get("headache") === "yes") score++;
    if (formData.get("nausea") === "yes") score++;

    // Simple prediction logic
    let result = "";
    if (score >= 3) {
        result = "High chance of malaria. Please consult a healthcare provider.";
    } else if (score === 2) {
        result = "Moderate chance of malaria. Consider seeing a healthcare provider.";
    } else {
        result = "Low chance of malaria based on the symptoms provided.";
    }

    // Display result
    document.getElementById("result").textContent = result;

    // Log to database (optional; see Step 4 for setup)
    logToDatabase(formData, result);
}

function logToDatabase(formData, result) {
    // This is where you could send data to Firebase or another backend database
    // Example Firebase integration:
    /*
    firebase.database().ref("malaria-predictions").push({
        fever: formData.get("fever"),
        chills: formData.get("chills"),
        headache: formData.get("headache"),
        nausea: formData.get("nausea"),
        prediction: result,
        timestamp: new Date().toISOString()
    });
    */
}
