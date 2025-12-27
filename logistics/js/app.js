const rows = [
    { id: "ST-10492", route: "Chicago → Detroit", status: "In Transit", carrier: "FastLine", updated: "2m ago" },
    { id: "ST-10488", route: "Dallas → Houston", status: "Delivered", carrier: "RoadFox", updated: "21m ago" },
    { id: "ST-10477", route: "Seattle → Portland", status: "Delayed", carrier: "NorthHaul", updated: "8m ago" },
    { id: "ST-10471", route: "Miami → Orlando", status: "In Transit", carrier: "SunRoute", updated: "12m ago" },
    { id: "ST-10466", route: "NYC → Boston", status: "Delivered", carrier: "MetroShip", updated: "1h ago" }
  ];
  
  function badge(status){
    if (status === "Delivered") return `<span class="badge good">Delivered</span>`;
    if (status === "Delayed") return `<span class="badge bad">Delayed</span>`;
    return `<span class="badge warn">In Transit</span>`;
  }
  
  function render(filter=""){
    const tbody = document.getElementById("tbody");
    const f = filter.trim().toLowerCase();
    const filtered = rows.filter(r =>
      (r.id+r.route+r.status+r.carrier+r.updated).toLowerCase().includes(f)
    );
  
    tbody.innerHTML = filtered.map(r => `
      <tr>
        <td>${r.id}</td>
        <td>${r.route}</td>
        <td>${badge(r.status)}</td>
        <td>${r.carrier}</td>
        <td>${r.updated}</td>
      </tr>
    `).join("");
  
    // KPIs (demo)
    document.getElementById("kpiTransit").textContent = rows.filter(r=>r.status==="In Transit").length + 15;
    document.getElementById("kpiDelivered").textContent = rows.filter(r=>r.status==="Delivered").length + 40;
    document.getElementById("kpiDelayed").textContent = rows.filter(r=>r.status==="Delayed").length + 2;
  }
  
  render();
  
  document.getElementById("search").addEventListener("input", (e) => render(e.target.value));
  document.getElementById("refreshBtn").addEventListener("click", () => {
    alert("Demo: would refresh data from API in a real system.");
  });