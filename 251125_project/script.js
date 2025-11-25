// function showText() {
    
//     const existingText = document.getElementById("quote");
//     if (existingText) {
//         return;
//     }
    
//     const newText = document.createElement("p");
//     newText.textContent = "The theology represented by Kuyper and Bavinck is not grounded on the bible.";
//     document.body.appendChild(newText);
//     newText.style.textAlign = 'center';
//     newText.id = "quote";
//     newText.style.backgroundColor = "gray";
    
//     document.body.appendChild(newText);
// }

// // Append the paragraph once when the document is clicked.
// document.addEventListener('click', showText);

// newText.addEventListener('click', function(){
//         document.body.removeChild(newText);
// });



function showText() {
    if (document.getElementById('answer')) {
        return;
    }
    const newText = document.createElement('p');
    newText.textContent = "Bible roots for Edwards and Whitefield.";
    newText.id = 'answer';
    newText.style.backgroundColor = 'lightgray';
    document.body.appendChild(newText);
    
    newText.addEventListener('click', function() {
        document.body.removeChild(newText);
    });
}

const btn = document.querySelector('button');
btn.addEventListener('click',showText);

