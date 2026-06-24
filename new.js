function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    // Clear previous messages
    result.innerHTML = "";
    error.innerHTML = "";

    // Validation
    if (!dobInput) {
        error.innerHTML = "⚠ Please select your Date of Birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
        days += previousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        Your Age is:
        <br><br>
        ${years} Years,
        ${months} Months,
        ${days} Days
    `;
}