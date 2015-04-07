function justify (str, len) {
  var words = str.split(' ');
  var lines = calculateLineLengths(words, len);
  lines = spaceWords(lines, len);
  return lines.join('\n');
}

function calculateLineLengths (words, len) {
  var lines = [];
  var i = 0, length = -1;

  words.forEach(function (word) {
    if ((length + word.length + 1) > len) {
      i++;
      length = -1;
    }

    lines[i] = lines[i] || [];

    length += word.length + 1;
    lines[i].push(word);
  });

  return lines;
}

function spaceWords (lines, len) {
  return lines.map(function (words, i) {
    if (i === lines.length - 1) {
      return words.join(' ');
    }

    var length = 0;
    words.forEach(function (word) {
      length += word.length;
    });
      
    var remainder = len - length
      , i = 0
    ;
    if (words.length > 1) {
      while (remainder) {
        words[i] += ' ';
        i = (i + 1) % (words.length - 1) === 0 ? 0 : i + 1;
        remainder--;
      }
    }
    return words.join('');
  });
}