function scuberGreetingForFeet(someValue) {
  // Write your code here!
  if (someValue <= 400) {
    return "This one is on me!";
  } 
  else if (400 < someValue) {
    if (someValue <= 2000) {
      return "That will be twenty bucks.";
    }
    else if (someValue > 2000) {
      if (someValue > 2500) {
        return "No can do.";
      }
      return "I will gladly take your thirty bucks.";
    } 
    }
  } 

function ternaryCheckCity(city) {
  // Write your code here!
let result = city === "NYC" ? "Ok, sounds good." : "No go."
return result;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
        case "not as generous":
          return "Thank you.";
    default:
      return "Bye.";
  }
}

