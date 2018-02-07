$(document).ready(function() {
  $("form#triangleInput").submit(function(event) {
    event.preventDefault();
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
      $("#typeOfTriangle").text("Not a triangle");
    } else if (sideA === sideB && sideA === sideC && sideB === sideC) {
      $("#typeOfTriangle").text("This is an Equilateral: All sides are equal.");
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      $("#typeOfTriangle").text("This is an Isosceles: Exactly 2 sides are equal.");
    } else if (sideA != sideB && sideA != sideC && sideB != sideC) {
      $("#typeOfTriangle").text("This is a Scalene: No sides are equal.");
    } else {
      console.log("else");
    }
  });
});
