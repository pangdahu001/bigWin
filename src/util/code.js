var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
// var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
var codeLength = 6 //单个code长度

var generateRandomNum = function (min, max) {
  if (max === undefined || min === undefined) {
    console.log('必须传入max和min')
    return false
  }
  let num = Math.floor(Math.random() * (max - min + 1) + min)
  return num
}

var generateCode = function (len) {
  len = len || 32
  var maxPos = chars.length
  // console.log(maxPos)
  var code = ''
  for (var i = 0; i < len; i++) {
    //0~61的整数
    var randomNum = generateRandomNum(0, maxPos - 1)
    var char = chars.charAt(randomNum)
    // console.log(char);
    code += char
  }
  return code
}

const inviteCode = () => generateCode(codeLength)

function getUrlKey (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg) //获取url中"?"符后的字符串并正则匹配
  var context = ''
  if (r != null) context = r[2]
  reg = null /*  */
  r = null
  return context == null || context == '' || context == 'undefined'
    ? ''
    : context
}

export { inviteCode, getUrlKey }
