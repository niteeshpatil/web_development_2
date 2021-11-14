const franc = require("franc");
const lengs = require("langs");
const colors = require("colors");
const input = process.argv[2];
const langcode = franc(input);
// const langcode = franc("ಅವರ ಮಧುರ ಪ್ರೇಮ ಕಥೆ ಬಾತ್ರಾ ಹುತಾತ್ಮರಾದಾಗ ಮದುವೆಯೇ ಬೇಡ ಎಂದಿದ್ದ ಗೆಳತಿ ಯೋಧ")
if (langcode === 'und') {
    console.log("sorry could not find lang please proved more text");
}
else {
    const language = lengs.where("3", langcode);
    console.log(`our best gess is ${language.name.rainbow}`);
}



