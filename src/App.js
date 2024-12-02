import React, { useEffect, useState } from 'react';

function App() {
    const [superAdmins, setSuperAdmins] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('/api/super-admins')
            .then((response) => response.json())
            .then((data) => setSuperAdmins(data));

        fetch('/api/customers')
            .then((response) => response.json())
            .then((data) => setCustomers(data));
    }, []);

    return (
        <div>
            <h1>Super Admins</h1>
            <ul>
                {superAdmins.map((admin) => (
                    <li key={admin.id}>{admin.name}</li>
                ))}
            </ul>

            <h1>Customers</h1>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>{customer.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
