(function($) {

  var equation = "";
  var lastKey = "";

  function evaluate(str) {
    var elements = str.split(" ");
    console.log(elements);
    var answer;
    var x;
    var y;
    var operator;
    var thisAnswer;
    // Evaluate division and multiplication
    for (var i = 1; i < elements.length; i = i + 2) { // Loop through operators
      operator = elements[i];
      x = elements[i-1]*1;
      y = elements[i+1]*1;
      thisAnswer = undefined;
      if (operator == "/") {
        thisAnswer = x/y;
      } else if (operator == "*") {
        thisAnswer = x*y;
      }
      if (thisAnswer != undefined) {
        elements.splice(i-1, 3, thisAnswer);
        console.log(elements);
      }
    }
    // Evaluate addition and subtraction
    for (var j = 1; j < elements.length; j = j + 2) { // Loop through operators
      operator = elements[j];
      x = elements[j-1]*1;
      y = elements[j+1]*1;
      thisAnswer = undefined;
      if (operator == "+") {
        thisAnswer = x + y;
      } else if (operator = "-") {
        thisAnswer = x - y;
      }
      if (thisAnswer != undefined) {
        elements.splice(j-1, 3, thisAnswer);
        console.log(elements);
      }
    }
    if (elements.length > 1) {
        var a = elements[0]*1;
        var b = elements[2]*1;
        var op = elements[1];
        switch(op) {
          case "/":
            answer = a/b;
            break;
          case "*":
            answer = a*b;
            break;
          case "+":
            answer = a+b;
            break;
          case "-":
            answer = a-b;
            break;
          default:
            break;
        }
    } else {
      answer = elements[0];
    }
    console.log(answer);
    $(".answer").html(answer);
  }

  function operandErrorCheck(eq) {
    if (eq.charAt(eq.length-1) == " ") {
      alert("Error: two operands in a row");
      return true;
    } else if (eq == "") {
      alert("Error: cannot start equation with operand");
      return true;
    } else {
      return false;
    }
  }

  $(".button").live('click', function(){
    var add = $(this).attr("id");
    switch(add) {
      case "11": // Delete all
        equation = "";
        break;
      case "12": // Delete last
        if (lastKey == "13" || lastKey == "14" || lastKey == "15" || lastKey == "16" || equation.charAt(equation.length-1) == " ") {
          equation = equation.slice(0, equation.length-3);
        } else {
          equation = equation.slice(0, equation.length-1);
        }
        break;
      case "13": // Division
        if (operandErrorCheck(equation) === false) {
          equation = equation + " / ";
        }
        break;
      case "14": // Multiplication
        if (operandErrorCheck(equation) === false) {
          equation = equation + " * ";
        }
        break;
      case "15": // Subtraction
        if (operandErrorCheck(equation) === false) {
          equation = equation + " - ";
        }
        break;
      case "16": // Addition
        if (operandErrorCheck(equation) === false) {
          equation = equation + " + ";
        }
        break;
      case "17": // Equals
        evaluate(equation);
        equation = "";
        break;
      default: // Any number
        equation = equation + add;
        break;
    }
    if (add != "17") { // Add number or operand to the equation
      console.log(equation);
      if (add != "11" && equation.length > 0) {
        $(".answer").html(equation);
      } else { // Post answer
        $(".answer").html("0");
      }
      lastKey = add; // Save last key
    }

  });

})(jQuery);
