// Funciton connection json
fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // test output
    // your loop here
  })
  .catch(error => console.error('Error loading JSON:', error));

  