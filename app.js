let playgame = prompt("Hi there! Would you like to play?");

if (playgame === "yes") {
  let q1 = prompt(
    "You're in the jungle. Do you want to ride a 🐯'tiger' or 🐘'elephant' ?"
  );
  if (q1 === "tiger") {
    alert("Tigers ate you. You died... 🚫 GAME OVER! You got Zero.");
  } else {
    alert("You're smart! They are very friendly. Keep going!");
    let q2 = prompt(
      "Then, elephants take you into the river, Do you want to eat 🐙'jellyfish' or 🐟'fish'?"
    );
    if (q2 === "jellyfish") {
      alert(
        "They're too toxic for you. You died... 🚫 GAME OVER! You got 1 out of 3."
      );
    } else {
      alert("Brilliant!!! Fish is good for you. Keep going!");
      let q3 = prompt(
        " Finally, you meet with 👸 hunters. Do you want to 'follow' them or 'stay' alone?"
      );
      if (q3 === "follow") {
        alert(
          "You fell into their deadly traps. They ate you... 🚫 GAME OVER! You got 2 out of 3."
        );
      } else {
        alert(
          "CONGRATULATIONS, You're alive!!! 🏆 WON!!! You got 3️ out of 3."
        );
      }
    }
  }
} else {
  alert("😥 See You Next Time!👋");
}
