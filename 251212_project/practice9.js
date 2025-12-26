function maskEmail(email) {
    const firstThree = email.substring(0,3);
    const emailPart = email.split("@");
    return (firstThree + "..." + '@' + emailPart[1]);
}

console.log(maskEmail("javascript@gmail.com"));

