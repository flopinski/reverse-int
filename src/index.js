module.exports = function reverse (n) {
  let result = Math.abs(n) 
  return (result.toString().split("").reverse().join(""));
}