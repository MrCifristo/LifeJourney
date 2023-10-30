document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'TU_API_KEY'; 
    const baseId = 'apphA4dkXJZdMjb68';
    const tableName = 'shrFk9dYyfIZTO4aA'; 

    const apiUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

    fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const datosElement = document.getElementById('datos');

        data.records.forEach(record => {
            const listItem = document.createElement('li');
            listItem.textContent = record.fields.Nombre; 
            datosElement.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error:', error));
});
