function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}


checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

function isPalidrom(string) {
  string = string.toLowerCase();
  string = string.replaceAll(' ', '');

  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }

  return string === reversed;
}


isPalidrom('топот'); // true
isPalidrom('ДовОд'); // true
isPalidrom('Кекс'); // false
