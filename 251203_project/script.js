const fetchBtn = document.getElementById('fetch-btn');
const serverResponse = document.getElementById('server-response');

fetchBtn.addEventListener('click', () => {
    fetch('/api/greeting')
        .then(response => response.json())
        .then(data => {
            console.log("Data received", data);
            serverResponse.innerHTML = `
                <strong>Message:</strong> ${data.text} <br>
                <strong>Time:</strong> ${data.timestamp}
            `
        })
        .catch(error => {
            serverResponse.innerText = "Failed to connect to server";
        });
})