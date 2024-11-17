/ Function to fetch data from XML and populate the table
function fetchData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.xml');
  xhr.onload = function() {
    if (xhr.status === 200) {
      const xmlDoc = xhr.responseXML;
      const tableBody = document.getElementById('tableBody');
      const rows = xmlDoc.getElementsByTagName('row');

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const name = row.getElementsByTagName('name')[0].textContent;
        const age = row.getElementsByTagName('age')[0].textContent;
        const city = row.getElementsByTagName('city')[0].textContent;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${name}</td>
          <td>${age}</td>
          <td>${city}</td>
        `;
        tableBody.appendChild(newRow);
      }
    }
  };
  xhr.send();
}

// Function to make a cell editable
function makeCellEditable(cell) {
  const input = document.createElement('input');
  input.value = cell.textContent;
  cell.textContent = '';
  cell.appendChild(input);
  input.focus();

  input.addEventListener('blur',   
 () => {
    cell.textContent = input.value;   

    // Update the XML data here
  });
}

// Initial call to fetch data
fetchData();
