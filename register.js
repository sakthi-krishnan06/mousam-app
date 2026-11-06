const registerForm =
    document.getElementById("registerForm");


registerForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const username =
            document.getElementById("username").value;

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("message");


        // Check passwords

        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match.";

            message.style.color = "red";

            return;

        }


        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/register",
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        username: username,

                        email: email,

                        password: password

                    })

                }
            );


            const data =
                await response.json();


            if (!response.ok) {

                message.textContent =
                    data.message;

                message.style.color = "red";

                return;

            }


            message.textContent =
                "Account created successfully!";

            message.style.color = "green";


            setTimeout(() => {

                window.location.href =
                    "login.html";

            }, 1500);


        } catch (error) {

            console.log(error);

            message.textContent =
                "Cannot connect to server.";

            message.style.color = "red";

        }

    }
);