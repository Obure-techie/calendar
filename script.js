document.getElementById('customer-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const customerData = {
        name: name,
        email: email,
        phone: phone,
        address: address
    };
  

    try {
        const response = await fetch('https://offering.pockethost.io/api/collections/Water/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerData)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Customer added successfully!');
            document.getElementById('customer-form').reset();
        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to add customer. Please try again.');
    }
});
