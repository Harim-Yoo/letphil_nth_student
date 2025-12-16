// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

// STEP 3: Log the total number of contacts.

// STEP 4: Log the name of the first contact.

// STEP 5: Update one contact’s isFavorite value.

// STEP 6: Add (push) a new contact object.

// STEP 7: Log the updated contacts array.

const contacts = [
    {
        name: "James",
        phone: 1112223333,
        isFavorite: true
    },
    {
        name: "Mary",
        phone: 9998887777,
        isFavorite: false
    }
]

console.log(contacts.length);
console.log(contacts[0].name);
contacts[0].isFavorite = false;
contacts.push({
    name:"Daniel",
    phone:3334445555,
    isFavorite: true
});
console.log(contacts);