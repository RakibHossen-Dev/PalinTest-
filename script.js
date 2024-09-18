document.getElementById("check-btn").addEventListener("click", function () {
  const originalInput = document.getElementById("text-input").value;
  let cleanedInput = originalInput.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanedInput.split("").reverse().join("");
  const sameValue = cleanedInput === reversedStr;
  const results = document.getElementById("result");

  if (cleanedInput === "") {
    alert("Please input a value");
    return;
  }

  if (sameValue) {
    results.innerText = originalInput + " is a palindrome!";
  } else {
    results.innerText = originalInput + " is not a palindrome.";
  }
});
