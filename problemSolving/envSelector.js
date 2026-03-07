// let env = "staging";
// 
// if (env === "qa") {
//   console.log("QA Environment selected");
// } else if (env === "staging") {
//   console.log("Staging Environment selected");
// } else if (env === "prod") {
//   console.log("Production Environment selected");
// } else {
//   console.log("Invalid Environment");
// }


let env = "staging";

switch (env) {
  case "qa":
    console.log("https://qa.example.com");
    break;

  case "staging":
    console.log("https://staging.example.com");
    break;

  case "prod":
    console.log("https://example.com");
    break;

  default:
    console.log("Invalid Environment");
}