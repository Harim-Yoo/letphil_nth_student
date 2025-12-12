// CONDITIONALS HOMEWORK – ACCESS CHECKER
// -----------------------------------------------------
// GOAL: Use conditionals to decide if a user can access an event based
//       on age, ticket, and membership.

const userAge = 38;
const hasTicket = true;
const isMember = false;

if (userAge>=18) {
    console.log("Age check passed");
} else {
    console.log("Age check failed");
}

if (hasTicket === true || isMember === true) {
    console.log("Entry permitted based on ticket or membership");
} else {
    console.log("No ticket or membership, entry denied");
}

if (userAge>=18 && (hasTicket === true || isMember === true)) {
    console.log("Access granted. Enjoy the event!");
} else {
    console.log("Access denied. Please check age and ticket/membership");
}

// STEP 6: Now combine both ideas:
//         Use an if / else statement that checks:
//         - userAge >= 18
//         - AND (hasTicket === true || isMember === true)
//         all together using && and ||.

// STEP 7: If both conditions are true, log:
//         "Access granted. Enjoy the event!"

// STEP 8: Otherwise, log:
//         "Access denied. Please check age and ticket/membership."

// STEP 9: Try changing the values of userAge, hasTicket, and isMember
//         to see how the messages change in the console.
