// document.addEventListener('DOMContentLoaded', async function () {
//     const tableBody = document.querySelector('#customer-table tbody');

//     try {
//         const response = await fetch('https://offering.pockethost.io/api/collections/Water/records');
//         if (response.ok) {
//             const data = await response.json();
//             data.items.forEach(customer => {
//                 const row = document.createElement('tr');

//                 const nameCell = document.createElement('td');
//                 nameCell.textContent = customer.name;
//                 row.appendChild(nameCell);

//                 const emailCell = document.createElement('td');
//                 emailCell.textContent = customer.email;
//                 row.appendChild(emailCell);

//                 const phoneCell = document.createElement('td');
//                 phoneCell.textContent = customer.phone;
//                 row.appendChild(phoneCell);

//                 const addressCell = document.createElement('td');
//                 addressCell.textContent = customer.address;
//                 row.appendChild(addressCell);

//                 tableBody.appendChild(row);
//             });
//         } else {
//             const error = await response.json();
//             console.error('Error:', error);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// });



document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('#customer-table tbody');

    async function fetchCustomers() {
        try {
            const response = await fetch('https://offering.pockethost.io/api/collections/Water/records');
            if (response.ok) {
                const data = await response.json();
                tableBody.innerHTML = ''; // Clear existing rows
                data.items.forEach(customer => {
                    const row = document.createElement('tr');

                    const nameCell = document.createElement('td');
                    nameCell.textContent = customer.name;
                    row.appendChild(nameCell);

                    const emailCell = document.createElement('td');
                    emailCell.textContent = customer.email;
                    row.appendChild(emailCell);

                    const phoneCell = document.createElement('td');
                    phoneCell.textContent = customer.phone;
                    row.appendChild(phoneCell);

                    const addressCell = document.createElement('td');
                    addressCell.textContent = customer.address;
                    row.appendChild(addressCell);

                    tableBody.appendChild(row);
                });
            } else {
                const error = await response.json();
                console.error('Error:', error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Fetch customers every 1.5 seconds
    fetchCustomers();
    setInterval(fetchCustomers, 1500);
});

