// Funciton connection json
fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // test output
        // your loop here
    })
    .catch(error => console.error('Error loading JSON:', error));



//   cards section
async function getRecords() {
    const response = await fetch('./data/data.json');
    const data = await response.json();
    console.log(data);

    document.querySelector('#unresolved-count').textContent = data.unresolved;
    document.querySelector('#overdue-count').textContent = data.overdue;
    document.querySelector('#open-count').textContent = data.open;
    document.querySelector('#onHold-count').textContent = data.onHold;
}

getRecords();