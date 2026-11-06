const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("message");


        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

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


            // Save login information

            localStorage.setItem(
                "mausamToken",
                data.token
            );


            localStorage.setItem(
                "mausamUsername",
                data.username
            );


            message.textContent =
                "Login successful! 🌦️";

            message.style.color = "green";


            // Go to Mausam homepage

            setTimeout(() => {

                window.location.href =
                    "index.html";

            }, 1000);


        } catch (error) {

            console.log(error);

            message.textContent =
                "Cannot connect to Mausam server.";

            message.style.color = "red";

        }

    }
);


function togglePassword() {

    const password =
        document.getElementById("password");


    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}


function continueAsGuest() {

    localStorage.setItem(
        "mausamGuest",
        "true"
    );
    const userType = document.getElementById("userType").value;
    localStorage.setItem("mausamUserType", userType);

    window.location.href =
        "home.html";

}