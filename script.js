
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  // Display saved user details
  const username = localStorage.getItem("mausamUsername");
  const userType = localStorage.getItem("mausamUserType") || "guest";

  $("profileName").textContent = username || "Weather Explorer";

  const profileNames = {
    student: "Student",
    farmer: "Farmer",
    commuter: "Commuter",
    fitness: "Fitness User",
    traveler: "Traveler / Event Planner",
    guest: "Guest"
  };

  $("profileType").textContent = profileNames[userType] || "Personal weather";

  // Personalised weather advice (demo)
  const advice = {
    student: ["Study smart today 📚", "Check the forecast before travelling to college. Carry water and plan your commute if rain is expected."],
    farmer: ["Plan your farm activities 🌱", "Check local rainfall forecasts before irrigation, spraying or field work."],
    commuter: ["Travel prepared 🚗", "Check the latest rain and traffic updates before leaving. Keep an umbrella handy if rain is expected."],
    fitness: ["Keep moving safely 🏃", "Choose cooler hours for outdoor exercise, stay hydrated and check the UV index."],
    traveler: ["Make your plans weather-ready ✈️", "Check forecasts for your destination and keep a backup plan for outdoor events."],
    guest: ["Make the most of your day ✨", "Check the forecast before heading out and stay hydrated."]
  };

  const selectedAdvice = advice[userType] || advice.guest;
  $("adviceTitle").textContent = selectedAdvice[0];
  $("adviceText").textContent = selectedAdvice[1];

  // Current date
  $("todayDate").textContent = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).toUpperCase();

  // Dark / light mode
  const themeButton = $("themeToggle");
  const savedTheme = localStorage.getItem("mausamTheme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  function updateThemeButton() {
    themeButton.textContent = document.body.classList.contains("dark")
      ? "☀️ Light mode"
      : "🌙 Dark mode";
  }

  updateThemeButton();

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark")
      ? "dark"
      : "light";

    localStorage.setItem("mausamTheme", theme);
    updateThemeButton();
  });

  // Demo city search — updates the displayed city only
  $("cityForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const city = $("cityInput").value.trim();

    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    $("cityLabel").textContent = city;
    $("cityInput").value = "";

    alert("City updated! Connect a weather API to load actual weather for " + city + ".");
  });

  // Logout
  $("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("mausamUsername");
    localStorage.removeItem("mausamUserType");
    localStorage.removeItem("token");

    window.location.href = "index.html";
  });
});
