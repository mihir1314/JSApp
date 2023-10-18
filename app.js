function proposeToKhushi() {
    var girlName = "Khushi";
    var proposalMessage = "Hey " + girlName + ", I have a question for you. Will you be my girlfriend?";
    console.log(proposalMessage);

    // Waiting for a response
    setTimeout(function() {
        var response = prompt("What do you think, Khushi? (Yes/No)");
        if (response && response.toLowerCase() === "yes") {
            console.log("That's fantastic! I'm really happy!");
        } else if (response && response.toLowerCase() === "no") {
            console.log("I understand. Thanks for your honesty.");
        } else {
            console.log("I didn't get that. Let's talk in person.");
        }
    }, 2000); // Wait for 2 seconds before asking for a response
}

// Call the function to propose to Khushi
proposeToKhushi();
