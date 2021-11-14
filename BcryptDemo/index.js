const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {

    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedpw) => {
    const resalt = await bcrypt.compare(pw, hashedpw)
    if (resalt) {
        console.log("loged in Succefuly");
    }
    else {
        console.log('incorrect');
    }
}
// hashPassword('monkey')
login('monkey', '$2b$12$iGlyO4KcRb273z/1uwPJVe6V0nnWIry3DCdg4NXKjgE9PRdJ/seYm');
