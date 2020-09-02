// argumements and parameters

const speak = function(name = "John", time = "night"){
    console.log(`Good ${time} ${name}`);
};
speak(); // Good night John
speak("Silviu", "morning"); // Good morning Silviu