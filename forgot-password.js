const forgotForm =
    document.getElementById("forgotForm");


forgotForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message");


        if (email === "") {

            message.textContent =
                "Please enter your email.";

            message.style.color = "red";

            return;

        }


        /*
         * This is the frontend stage.
         *
         * Later this request will be connected
         * to your Node.js backend.
         */

        message.textContent =
            "Checking your account...";

        message.style.color = "#4776e6";


        // Temporary demonstration

        setTimeout(() => {

            message.textContent =
                "If this email is registered, a password reset link will be sent.";

            message.style.color = "green";

        }, 1000);

    }
);