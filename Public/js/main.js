// Funciton connection json
fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // test output
        // your loop here
    })
    .catch(error => console.error('Error loading JSON:', error));



// bootstrap connection
async function getRecords() {
    // connecttion json
    const response = await fetch('./data/data.json');
    const data = await response.json();
    console.log(data);

    // cards section
    document.querySelector('#unresolved-data').textContent = data.unresolved;
    document.querySelector('#overdue-data').textContent = data.overdue;
    document.querySelector('#open-data').textContent = data.open;
    document.querySelector('#onHold-data').textContent = data.onHold;

    // stats column besides graphic
    document.querySelector('#resolved-stat').textContent = data.resolved;
    document.querySelector('#received-stat').textContent = data.received;
    document.querySelector('#first-response-stat').textContent = data.avgFirstResponse;
    document.querySelector('#avg-response-stat').textContent = data.avgResponse;
    document.querySelector('#sla-stat').textContent = data.resolutionSLA;

    // Section Unresolved Tickets
    document.querySelector('#waiting-feature').textContent = data.waitingFeature;
    document.querySelector('#awaiting-response').textContent = data.awaitingResponse;
    document.querySelector('#awaiting-fix').textContent = data.awaitingFix;
    document.querySelector('#pending').textContent = data.pending;
}


//   for running the code
getRecords();