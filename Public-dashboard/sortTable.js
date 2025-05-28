function parseValue(value, index) {
    if (index === 1) {
        let numbers = value.match(/\d+/g);
        return numbers ? (parseInt(numbers[0]) + parseInt(numbers[numbers.length - 1])) / 2 : 0;
    }
    if (index === 4) {
        return parseFloat(value.replace(/[^\d.]/g, ''));
    }
    if ([2, 3, 6].includes(index)) {
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
