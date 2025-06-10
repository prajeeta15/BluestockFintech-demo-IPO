document.getElementById("logoInput").addEventListener("change", function (event) {
  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById("companyLogo").src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Toggle icon color (optional)
    const btn = document.getElementById("darkToggle");
    if (document.body.classList.contains("dark-mode")) {
      btn.classList.remove("btn-outline-secondary");
      btn.classList.add("btn-light");
    } else {
      btn.classList.add("btn-outline-secondary");
      btn.classList.remove("btn-light");
    }

    // Persist preference
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  }

  // Load theme on page load
  window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      document.getElementById("darkToggle").classList.replace("btn-outline-secondary", "btn-light");
    }
  };

