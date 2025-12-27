console.log("CareNow Clinic portal loaded ✅");

document.getElementById("bookBtn")?.addEventListener("click", () => {
  alert("Demo: booking flow would open here (no backend yet).");
});

document.getElementById("checkinForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("msg");
  if (msg) msg.textContent = "✅ Check-in submitted (demo).";
  e.target.reset();
});