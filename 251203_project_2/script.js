const messageInput = document.getElementById('msg-input');
const sendBtn = document.getElementById('send-btn');
const fetchBtn = document.getElementById('fetch-btn');
const serverResponse = document.getElementById('server-response');

sendBtn.addEventListener('click', () => {
    const sendText = messageInput.value;
    if (!sendText.trim()) {
        return false;
    }
    fetch('/api/messages',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: sendText, date: new Date() })
        }
    ) // Hey, server, this is the part I fetch your api post part, and send the following part. Get this
        .then(response => response.json()) // server sent me data in the look of JSON, but oh, it's a string. I will jsonify because it was a string
        .then(data => { console.log("Message saved", data) });  // I will call response.json() as data, and I will console log this.
    messageInput.value = "";
})

fetchBtn.addEventListener('click', () => {
    fetch('/api/messages')
        .then(res => res.json())
        .then(data => {
            serverResponse.innerHTML = "";
            data.forEach(d => {
                const p = document.createElement('p');
                p.textContent = `${d.text} at ${d.date}`;
                serverResponse.appendChild(p);
            })   
        });

});