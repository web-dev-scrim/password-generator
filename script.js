const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function generatePasswords() {
  let firstPassword = document.getElementById("first-password");
  let secondPassword = document.getElementById("second-password");
  let passwordLength = parseInt(
    document.getElementById("password-length").value
  );
  let includeNumbers = document.getElementById("include-numbers").checked;
  let includeSymbols = document.getElementById("include-special").checked;

  firstPassword.textContent = generatePassword(
    passwordLength,
    includeNumbers,
    includeSymbols
  );

  secondPassword.textContent = generatePassword(
    passwordLength,
    includeNumbers,
    includeSymbols
  );

  firstPassword.hidden = false;
  secondPassword.hidden = false;
}

function generatePassword(length, includeNumbers, includeSymbols) {
  let characterPool = [...letters];
  if (includeNumbers) characterPool.push(...numbers);
  if (includeSymbols) characterPool.push(...symbols);

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }
  return password;
}

function copyText(element) {
  navigator.clipboard
    .writeText(element.innerText)
    .then(() => {
      const msg = document.getElementById("copyMessage");
      msg.style.display = "block";
      // Hide after 2 seconds
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

// Attach functions to window object for inline event handlers
window.generatePasswords = generatePasswords;
window.copyText = copyText;
