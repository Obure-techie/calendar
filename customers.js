// document.addEventListener('DOMContentLoaded', function () {
//     const tableBody = document.querySelector('#customer-table tbody');

//     async function fetchCustomers() {
//         try {
//             const response = await fetch('https://offering.pockethost.io/api/collections/Water/records');
//             if (response.ok) {
//                 const data = await response.json();
//                 tableBody.innerHTML = ''; // Clear existing rows 1st before refetching from my pockethost 
//                 data.items.forEach(customer => {
//                     const row = document.createElement('tr');

//                     const nameCell = document.createElement('td');
//                     nameCell.textContent = customer.name;
//                     row.appendChild(nameCell);

//                     const emailCell = document.createElement('td');
//                     emailCell.textContent = customer.email;
//                     row.appendChild(emailCell);

//                     const phoneCell = document.createElement('td');
//                     phoneCell.textContent = customer.phone;
//                     row.appendChild(phoneCell);

//                     const addressCell = document.createElement('td');
//                     addressCell.textContent = customer.address;
//                     row.appendChild(addressCell);

//                     tableBody.appendChild(row);
//                 });
//             } else {
//                 const error = await response.json();
//                 console.error('Error:', error);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }

//     // Fetch customers every 1.5 seconds
//     fetchCustomers();
//     setInterval(fetchCustomers, 1500);
// });





document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('#customer-table tbody');

    async function fetchCustomers() {
        try {
            const response = await fetch('https://offering.pockethost.io/api/collections/Water/records');
            if (response.ok) {
                const data = await response.json();
                tableBody.innerHTML = ''; // Clear existing rows first before refetching from pockethost 
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

                    const actionsCell = document.createElement('td');

                    const updateButton = document.createElement('button');
                    updateButton.textContent = 'Update';
                    updateButton.addEventListener('click', () => updateCustomer(customer.id));
                    actionsCell.appendChild(updateButton);

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.addEventListener('click', () => deleteCustomer(customer.id));
                    actionsCell.appendChild(deleteButton);

                    row.appendChild(actionsCell);
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

    async function updateCustomer(id) {
        const name = prompt("Enter new name:");
        const email = prompt("Enter new email:");
        const phone = prompt("Enter new phone:");
        const address = prompt("Enter new address:");

        if (name && email && phone && address) {
            try {
                const response = await fetch(`https://offering.pockethost.io/api/collections/Water/records/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, phone, address })
                });
                if (response.ok) {
                    fetchCustomers(); 
                } else {
                    const error = await response.json();
                    console.error('Error:', error);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert('All fields are required for update!');
        }
    }

    async function deleteCustomer(id) {
        if (confirm("Are you sure you want to delete this customer?")) {
            try {
                const response = await fetch(`https://offering.pockethost.io/api/collections/Water/records/${id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    fetchCustomers(); 
                } else {
                    const error = await response.json();
                    console.error('Error:', error);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    // Fetch customers every 1.5 seconds
    fetchCustomers();
    setInterval(fetchCustomers, 1500);
});

