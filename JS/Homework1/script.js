const data = [
    { region: 'US', model: 'A', sales: 150 },
    { region: 'US', model: 'B', sales: 120 },
    { region: 'US', model: 'C', sales: 350 },
    { region: 'EU', model: 'A', sales: 200 },
    { region: 'EU', model: 'B', sales: 100 },
    { region: 'EU', model: 'C', sales: 250 },
    { region: 'CA', model: 'A', sales: 200 },
    { region: 'CA', model: 'B', sales: 100 },
    { region: 'CA', model: 'C', sales: 230 },
    { region: 'CA', model: 'D', sales: 400 },
];

function displayTableData(data) {
    const regionData = data.reduce((acc, { region, model, sales }) => {
        acc[region] = acc[region] || { sum: 0, details: [] };
        acc[region].sum += sales;
        acc[region].details.push({ model, sales });
        return acc;
    }, {});

    const tableContent = Object.entries(regionData)
        .map(([region, { sum, details }]) =>
            `<tr><td>${region}</td><td>Sum</td><td>${sum}</td></tr>` +
            details.map(({ model, sales }) => `<tr><td>${region}</td><td>${model}</td><td>${sales}</td></tr>`).join('')
        )
        .join('');

    document.getElementById('salesTableBody').innerHTML = tableContent;
}

displayTableData(data);
