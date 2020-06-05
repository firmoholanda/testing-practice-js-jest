const decypher = (text, shift) => {
  text.toLowerCase();
  const actualShift = shift % 26;
  let uncyphered = '';

  for (var i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    if(code >= 97 && code <= 122) {
      code = code - actualShift;
      if(code < 97){
        code += 26;
      }
    }
    uncyphered = uncyphered+String.fromCharCode(code);
  }
  return uncyphered;
};
module.exports = decypher;
