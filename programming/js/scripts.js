document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("radio-form");

    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get user responses
        const whyInterested = getSelectedValue('n/a');
        const codingSkills = getSelectedValue('n/a');
        const interestedInGames = getSelectedValue('.answer1');
        const interestInBackendOrDataScience = getSelectedValue('.answer3');
        const interestInWebDevelopment = getSelectedValue('.answer5');

        // Determine the recommendation
        let recommendation = "neither";

        if (whyInterested && codingSkills && interestInBackendOrDataScience) {
            if (interestedInGames === "yes1") {
                recommendation = "cSharp";
            } else if (interestInWebDevelopment === "yes3") {
                recommendation = "javaScript";
            } else {
                recommendation = "python";
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
        });
    }
});
