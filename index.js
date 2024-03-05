//Current line
var CurrentId = undefined;

var inputValues = [];

const letters = [
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
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];
const inputPrompts = [
  "How many symbols would you like?",
  "How many numbers would you like?",
];

//Click Run
$(document).ready(function () {
  $("#run-button").click(function () {
    inputValues = [];
    $("#Content").empty();
    NewLine("Welcome to the PyPassword Generator!", false);
    NewLine("How many letters would you like in your password?", true);
  });
});

//Enter button
$(document).on("keydown", function (e) {
  var x = event.which || event.keyCode;
  if (x === 13 || x == 13) {
    var consoleLine = $("#" + CurrentId + " input").val();
    inputValues.push({ id: CurrentId, val: consoleLine });

    if (inputValues.length > inputPrompts.length) {
      let password_list = [];
      for (let i = 0; i < Number(inputValues[0].val); i++) {
        console.log(i);
        password_list.push(letters[Math.floor(Math.random() * letters.length)]);
      }

      for (let i = 0; i < Number(inputValues[1].val); i++) {
        password_list.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
      for (let i = 0; i < Number(inputValues[2].val); i++) {
        password_list.push(numbers[Math.floor(Math.random() * numbers.length)]);
      }
      NewLine("[" + password_list + "]", false);
      const shuffledPasswordList = shuffleArray(password_list);
      NewLine("[" + shuffledPasswordList + "]", false);

      let password = "";
      for (const char in shuffledPasswordList) {
        password += shuffledPasswordList[char];
      }
      NewLine("Your password is: " + password, false);

      $(".console-carrot").remove();
      return;
    }
    $(".console-carrot").remove();
    NewLine(inputPrompts[inputValues.length - 1], true);
  }
});
$(document).on("keydown", function (e) {
  var x = event.which || event.keyCode;
  var line = $("#" + CurrentId + " input");
  var length = line.val().length;
  if (x != 8) {
    line.attr("size", 1 + length);
  } else {
    line.attr("size", length * 0.95);
  }
  if (length === 0) {
    $("#" + CurrentId + " input").attr("size", "1");
  }
});
$(document).on("click", function (e) {
  $("#" + CurrentId + " input").focus();
});

//New line
function NewLine(text, isPrompt) {
  $(".console-carrot").remove();
  if (CurrentId !== undefined) {
    $("#" + CurrentId + " input").prop("disabled", true);
  }
  CurrentId = "consoleInput-" + GenerateId();

  if (isPrompt) {
    $("#Content").append("<div>" + text + "</div>");
    $("#Content").append(
      '<div id="' +
        CurrentId +
        '">' +
        '<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" class="terminal-input" /><div class="console-carrot"></div></div>'
    );
    $("#" + CurrentId + " input").focus();
    $("#" + CurrentId + " input").attr("size", "1");
  } else {
    $("#Content").append('<div id="' + CurrentId + '">' + text + "</div>");
  }
}

function GenerateId() {
  return Math.random().toString(16).slice(2);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// import random
// letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

// print("Welcome to the PyPassword Generator!")
// nr_letters = int(input("How many letters would you like in your password?\n"))
// nr_symbols = int(input(f"How many symbols would you like?\n"))
// nr_numbers = int(input(f"How many numbers would you like?\n"))

// #Hard Level
// password_list = []

// for char in range(1, nr_letters + 1):
//   password_list.append(random.choice(letters))

// for char in range(1, nr_symbols + 1):
//   password_list += random.choice(symbols)

// for char in range(1, nr_numbers + 1):
//   password_list += random.choice(numbers)

// print(password_list)
// random.shuffle(password_list)
// print(password_list)

// password = ""
// for char in password_list:
//   password += char
