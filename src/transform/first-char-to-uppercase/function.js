const wordUppercase = function (x) {
  return x.toLowerCase().replace(x.charAt(0), (c) => c.toUpperCase());
};
/**
 * 对字符串进行处理，处理后的字符串首字母是大写，其他字母都是小写
 * 如果传入隔断符，会将隔断符从字符串中删除，并将隔断符后的首字母大写
 * 最终合并为完整的字符串
 * @param origin 原始字符串
 * @param delimiter 隔断符，常见的有 "-"," _", "|" 等
 */
const firstCharToUppercase = function (origin, delimiter) {
  if (typeof origin !== 'string') {
    return '-1';
  }
  let wordList = [];
  if (delimiter) {
    wordList = origin.split(delimiter);
    if (wordList.length > 1) {
      for (let i = 1, len = wordList.length; i < len; i++) {
        wordList[i] = wordUppercase(wordList[i]);
      }
      return wordList.join('');
    }
  }
  return wordUppercase(origin);
};

export default firstCharToUppercase;
