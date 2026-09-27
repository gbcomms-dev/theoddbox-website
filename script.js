// The Oddbox — minimal interactivity
document.addEventListener("DOMContentLoaded", function () {
  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form placeholder handling
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("name");
      var email = document.getElementById("email");

      if (!name.value.trim() || !email.value.trim()) {
        if (note) note.textContent = "Please add your name and email so we can reply.";
        return;
      }

      if (note) {
        note.textContent =
          "Thanks, " + name.value.trim().split(" ")[0] +
          "! This form isn't wired to an inbox yet — email us directly for now.";
      }
      form.reset();
    });
  }
});
