const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

document.getElementById("upper").addEventListener("click", function() {

  let textArea = document.getElementById("exampleFormControlTextarea1");
  let text = textArea.value;
  
  let upperCaseText = text.toUpperCase();
  
  textArea.value = upperCaseText;
  
});

document.getElementById("lower").addEventListener("click", function() {
  let textArea = document.getElementById("exampleFormControlTextarea1");
  let text = textArea.value;
  
  let lowerCaseText = text.toLowerCase();
  
  textArea.value = lowerCaseText;
  
});

document.getElementById("clear").addEventListener("click", function() {
  let textArea = document.getElementById("exampleFormControlTextarea1");
  let text = textArea.value;
  
  let clearText = '';
  
  textArea.value = clearText;
  
});

document.getElementById("download").addEventListener("click", function() {
  let textArea = document.getElementById("exampleFormControlTextarea1");
  let text = textArea.value;
  let blob = new Blob([text], { type: "text/plain" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);

  a.download = "text.txt";

  a.click();
  
});
document.getElementById("print").addEventListener("click", function() {
  let textArea = document.getElementById("exampleFormControlTextarea1");
  let text = textArea.value;
  let printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Print</title></head><body>');
  printWindow.document.write('<pre>' + text + '</pre>');
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
});

document.getElementById("copy").addEventListener("click", function() {
  let textArea = document.getElementById("exampleFormControlTextarea1");
  let text = textArea.value;
  let tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  
});

function countWords() {
 
  let textArea = document.getElementById("exampleFormControlTextarea1");
  let text = textArea.value.trim();
  let words = text.split(/\s+/);

  return words.length;
}

function countCharacters() {
  
  let textArea = document.getElementById("exampleFormControlTextarea1");
  let text = textArea.value;
  return text.length;
}
let wordCount = countWords();
let charCount = countCharacters();

console.log("Number of words:", wordCount);
console.log("Number of characters:", charCount);

document.getElementById("exampleFormControlTextarea1").addEventListener("input", function() {
  let wordCount = countWords();
  let charCount = countCharacters();
  document.getElementById("wordCount").textContent = wordCount;
  document.getElementById("charCount").textContent = charCount;
});
function updatePreview() {
  let textArea = document.getElementById("exampleFormControlTextarea1");
  let text = textArea.value;
  let previewDiv = document.getElementById("preview");
  previewDiv.textContent = text;
}
function myFunction(action) {
  var x = document.getElementById("snackbar");
  var message = "";

  switch (action) {
    case 'upper':
      message = "Text updated to Upper Case";
      break;
    case 'lower':
      message = "Text updated to Lower Case";
      break;
    case 'clear':
      message = "Text Cleared";
      break;
    case 'download':
      message = "Text Downloaded";
      break;
    case 'print':
      message = "Text Printed";
      break;
    case 'copy':
      message = "Text Copied";
      break;
    default:
      message = "Action performed";
  }

  x.textContent = message;
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
