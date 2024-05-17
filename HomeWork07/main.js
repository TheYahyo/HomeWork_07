
function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => data);
}


function displayUsers(users) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    ['ID', 'Name', 'Username', 'Email', 'City', 'Phone'].forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    users.forEach(user => {
        const row = document.createElement('tr');
        ['id', 'name', 'username', 'email', 'address.city', 'phone'].forEach(field => {
            const cell = document.createElement('td');
            cell.textContent = field.split('.').reduce((obj, key) => obj[key], user);
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    document.body.appendChild(table);
}


fetchUsers()
    .then(users => displayUsers(users));

    