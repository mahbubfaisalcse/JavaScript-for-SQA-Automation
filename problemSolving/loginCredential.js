// function userName(user) {
//     if (!user) {
//         return "Username required!";
//     } else{
//         return "Valid user name";
//     }
// }
// 
// function password(pass) {
//     if (pass.length < 6) {
//         return "Week password!";
//     } else {
//         return "Valid password";
//     }
// }
// 
// console.log(userName(""));
// console.log(password("123456"));
// console.log(userName("admin")); 

function validateLogin(username, password) {
  if (!username) {
    return "Username required";
  } else if (password.length < 6) {
    return "Weak password";
  } else {
    return "Valid";
  }
}

console.log(validateLogin("", "123456"));      // Username required
console.log(validateLogin("admin", "123"));    // Weak password
console.log(validateLogin("admin", "123456")); // Valid