function fetchIPOs()
{fetch('/ipos')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById("ipoTableBody");
    data.forEach(ipo => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${ipo.company}</td>
        <td>${ipo.priceBand}</td>
        <td>${ipo.open}</td>
        <td>${ipo.close}</td>
        <td>${ipo.issueSize}</td>
        <td>${ipo.issueType}</td>
        <td>${ipo.listingDate}</td>
        <td><span class="status ${ipo.status.replace(/\s+/g, '')}">${ipo.status}</span></td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(err => console.error("Error loading IPOs:", err));
}
// Call the function when the page is fully loaded
document.addEventListener("DOMContentLoaded", fetchIPOs);

function parseValue(value, index) {
    if (index === 1) { //Price Band
        let numbers = value.match(/\d+/g);
        return numbers ? (parseInt(numbers[0]) + parseInt(numbers[numbers.length - 1])) / 2 : 0;
    }
    if (index === 4) { //Issue Size
        return parseFloat(value.replace(/[^\d.]/g, ''));
    }
    if ([2, 3, 6].includes(index)) { //open, close, listing date
        if (value.toLowerCase().includes("to be announced")) return null;
        return new Date(value);
    }
    if (index === 0) { // Company name A-Z
        return value.toLowerCase();
    }
    return value.toString().toLowerCase();
}

function sortTableDropdown(select, index) {
    const order = select.value;
    if (!order) return;

    const table = document.getElementById("ipoTable");
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
        const valA = parseValue(a.cells[index].innerText.trim(), index);
        const valB = parseValue(b.cells[index].innerText.trim(), index);
        if (valA === null && valB === null) return 0;
        if (valA === null) return order === "asc" ? 1 : -1;
        if (valB === null) return order === "asc" ? -1 : 1;
        if (valA < valB) return order === "asc" ? -1 : 1;
        if (valA > valB) return order === "asc" ? 1 : -1;

        return 0;
    });

    rows.forEach(row => tbody.appendChild(row));
}

function filterByStatus() {
    const selectedStatus = document.getElementById("statusFilter").value.toLowerCase();
    const table = document.getElementById("ipoTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const statusCell = rows[i].getElementsByTagName("td")[7];
        if (statusCell) {
            const statusText = statusCell.innerText.toLowerCase();
            const shouldShow = selectedStatus === "all" || statusText === selectedStatus;
            rows[i].style.display = shouldShow ? "" : "none";
        }
    }
}

