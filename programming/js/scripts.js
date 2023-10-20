document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("radio-form");

    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get user responses
        const why = getSelectedValue('n/a'); // Add this line
        const skills = getSelectedValue('nothing');
        const interestGames = getSelectedValue('.answer1');
        const interestBack = getSelectedValue('.answer3');
        const interestDevelopment = getSelectedValue('.answer5');

        // Determine the recommendation
        let recommendation = "neither";

        if (why && skills && interestBack && interestGames) {
            if (interestGames === "yes1" && interestBack === "no2" && interestDevelopment === "no3") {
                recommendation = "cSharp";
            } else if (interestGames === "no1" && interestBack === "yes2" && interestDevelopment === "no3") {
                recommendation = "javaScript";
            } else if (interestGames === "no1" && interestBack === "no2" && interestDevelopment === "yes3") {
                recommendation = "javaScript";
            } else {
                recommendation = "neither";
            }
        }

        // Show the recommendation div and hide others
        hideAllRecommendations();
        document.getElementById(recommendation).classList.remove("hidden");
    });

    function getSelectedValue(name) {
        const radios = document.querySelectorAll(`input[type="radio"][name="${name}"]`);
        for (const radio of radios) {
            if (radio.checked) {
                return radio.value;
            }
        }
        return null;
    }

    function hideAllRecommendations() {
        const recommendations = document.querySelectorAll(".recommendation");
        recommendations.forEach((rec) => {
            rec.classList.add("hidden");

            addEventListener
        });
    }
});
