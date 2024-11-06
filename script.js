document.getElementById('loadData').addEventListener('click', () => {
    fetch('https://randomuser.me/api/?results=4')
        .then(response => response.json())
        .then(data => {
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = ''; // Очищуємо вміст перед додаванням нових користувачів
            data.results.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');
                userCard.innerHTML = `
                    <img src="${user.picture.large}" alt="User Picture">
                    <p><strong>Name:</strong> ${user.name.title} ${user.name.first} ${user.name.last}</p>
                    <p><strong>Country:</strong> ${user.location.country}</p>
                    <p><strong>Postcode:</strong> ${user.location.postcode}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                `;
                outputDiv.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error:', error));
});