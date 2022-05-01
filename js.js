$(document).ready(function() {
  // $("#sec2").hide();
  $("#btn").click(function() {
    $("#btn2").css("opacity", "1");

    function myFunction1() {
      var x = "It takes 1 step to get to 6174";
      document.getElementById("show").innerHTML = x;
    }
    function myFunction2() {
      var x = "It takes 2 steps to get to 6174";
      document.getElementById("show").innerHTML = x;
    }
    function myFunction3() {
      var x = "It takes 3 steps to get to 6174";
      document.getElementById("show").innerHTML = x;
    }
    function myFunction4() {
      var x = "It takes 4 steps to get to 6174";
      document.getElementById("show").innerHTML = x;
    }
    function myFunction5() {
      var x = "It takes 5 steps to get to 6174";
      document.getElementById("show").innerHTML = x;
    }
    function myFunction6() {
      var x = "It takes 6 steps to get to 6174";
      document.getElementById("show").innerHTML = x;
    }
    function myFunction7() {
      var x = "It takes 7 steps to get to 6174";
      document.getElementById("show").innerHTML = x;
    }

    //       function myFunction() {
    // var x = "It takes 3 steps to get to 6174";
    //         var y = n;
    //          document.getElementById("show").innerHTML = x;
    //         document.getElementById("sap").innerHTML = y;
    // }
    var resultant = [];
    var arr = [];
    var bla = $("#oone").val();
    var bla2 = $("#ttwo").val();
    var bla3 = $("#tthree").val();
    var bla4 = $("#ffour").val();

    arr.push(bla);
    arr.push(bla2);
    arr.push(bla3);
    arr.push(bla4);

    var arrNumbers = arr.map(function(x) {
      return parseInt(x, 10);
    });
    // console.log(arrNumbers);
    var n = arrNumbers.join("");

    if (n == 0000) {
      alert("Please give a valid input");
    } else {
      var desc = arrNumbers.sort((a, b) => b - a).join("");
      var asc = arrNumbers.sort((a, b) => a - b).join("");
      var result = desc - asc;
      document.getElementById("spa1").innerHTML = desc;
      document.getElementById("spa2").innerHTML = asc;
      document.getElementById("spa3").innerHTML = result;
      document.getElementById("sap").innerHTML = n;
      document.getElementById("sap2").innerHTML = 1;
      document.getElementById("spa4").innerHTML = "-";
      document.getElementById("spa5").innerHTML = "=";

      resultant.push(result);
      // console.log(resultant);

      //   var i;
      //   for (i = 0; i < resultant.length; i++) {
      //       resul += resultant[i];
      //   }

      if (result != 6174) {
        var result2 = [...(result + "")].map(n => +n);
        var desc2 = result2.sort((a, b) => b - a).join("");

        var asc2 = result2.sort((a, b) => a - b).join("");
        var result3 = desc2 - asc2;

        document.getElementById("spa1").innerHTML = desc;
        document.getElementById("spa2").innerHTML = asc;
        document.getElementById("spa3").innerHTML = result;
        document.getElementById("spa4").innerHTML = "-";
        document.getElementById("spa5").innerHTML = "=";

        document.getElementById("spa11").innerHTML = desc2;
        document.getElementById("spa12").innerHTML = asc2;
        document.getElementById("spa13").innerHTML = result3;
        document.getElementById("sap").innerHTML = n;
        document.getElementById("sap2").innerHTML = 2;
        document.getElementById("spa14").innerHTML = "-";
        document.getElementById("spa15").innerHTML = "=";

        if (result3 != 6174) {
          var result4 = [...(result3 + "")].map(n => +n);
          var desc3 = result4.sort((a, b) => b - a).join("");

          var asc3 = result4.sort((a, b) => a - b).join("");
          var result5 = desc3 - asc3;

          document.getElementById("spa1").innerHTML = desc;
          document.getElementById("spa2").innerHTML = asc;
          document.getElementById("spa3").innerHTML = result;
          document.getElementById("spa4").innerHTML = "-";
          document.getElementById("spa5").innerHTML = "=";

          document.getElementById("spa11").innerHTML = desc2;
          document.getElementById("spa12").innerHTML = asc2;
          document.getElementById("spa13").innerHTML = result3;
          document.getElementById("spa14").innerHTML = "-";
          document.getElementById("spa15").innerHTML = "=";

          document.getElementById("spa21").innerHTML = desc3;
          document.getElementById("spa22").innerHTML = asc3;
          document.getElementById("spa23").innerHTML = result5;
          document.getElementById("sap").innerHTML = n;
          document.getElementById("sap2").innerHTML = 3;
          document.getElementById("spa24").innerHTML = "-";
          document.getElementById("spa25").innerHTML = "=";

          if (result5 != 6174) {
            var result6 = [...(result5 + "")].map(n => +n);
            var desc4 = result6.sort((a, b) => b - a).join("");

            var asc4 = result6.sort((a, b) => a - b).join("");
            var result7 = desc4 - asc4;

            document.getElementById("spa1").innerHTML = desc;
            document.getElementById("spa2").innerHTML = asc;
            document.getElementById("spa3").innerHTML = result;
            document.getElementById("spa4").innerHTML = "-";
            document.getElementById("spa5").innerHTML = "=";

            document.getElementById("spa11").innerHTML = desc2;
            document.getElementById("spa12").innerHTML = asc2;
            document.getElementById("spa13").innerHTML = result3;
            document.getElementById("spa14").innerHTML = "-";
            document.getElementById("spa15").innerHTML = "=";

            document.getElementById("spa21").innerHTML = desc3;
            document.getElementById("spa22").innerHTML = asc3;
            document.getElementById("spa23").innerHTML = result5;
            document.getElementById("spa24").innerHTML = "-";
            document.getElementById("spa25").innerHTML = "=";

            document.getElementById("spa31").innerHTML = desc4;
            document.getElementById("spa32").innerHTML = asc4;
            document.getElementById("spa33").innerHTML = result7;
            document.getElementById("sap").innerHTML = n;
            document.getElementById("sap2").innerHTML = 4;
            document.getElementById("spa34").innerHTML = "-";
            document.getElementById("spa35").innerHTML = "=";
            resultant.push(result);

            if (result7 != 6174) {
              var result8 = [...(result7 + "")].map(n => +n);
              var desc5 = result8.sort((a, b) => b - a).join("");

              var asc5 = result8.sort((a, b) => a - b).join("");
              var result9 = desc5 - asc5;

              document.getElementById("spa1").innerHTML = desc;
              document.getElementById("spa2").innerHTML = asc;
              document.getElementById("spa3").innerHTML = result;
              document.getElementById("spa4").innerHTML = "-";
              document.getElementById("spa5").innerHTML = "=";

              document.getElementById("spa11").innerHTML = desc2;
              document.getElementById("spa12").innerHTML = asc2;
              document.getElementById("spa13").innerHTML = result3;
              document.getElementById("spa14").innerHTML = "-";
              document.getElementById("spa15").innerHTML = "=";

              document.getElementById("spa21").innerHTML = desc3;
              document.getElementById("spa22").innerHTML = asc3;
              document.getElementById("spa23").innerHTML = result5;
              document.getElementById("spa24").innerHTML = "-";
              document.getElementById("spa25").innerHTML = "=";

              document.getElementById("spa31").innerHTML = desc4;
              document.getElementById("spa32").innerHTML = asc4;
              document.getElementById("spa33").innerHTML = result7;
              document.getElementById("spa34").innerHTML = "-";
              document.getElementById("spa35").innerHTML = "=";

              document.getElementById("spa41").innerHTML = desc5;
              document.getElementById("spa42").innerHTML = asc5;
              document.getElementById("spa43").innerHTML = result9;
              document.getElementById("sap").innerHTML = n;
              document.getElementById("sap2").innerHTML = 5;
              document.getElementById("spa44").innerHTML = "-";
              document.getElementById("spa45").innerHTML = "=";

              if (result9 != 6174) {
                var result10 = [...(result9 + "")].map(n => +n);
                var desc6 = result10.sort((a, b) => b - a).join("");

                var asc6 = result10.sort((a, b) => a - b).join("");
                var result11 = desc6 - asc6;
                document.getElementById("spa1").innerHTML = desc;
                document.getElementById("spa2").innerHTML = asc;
                document.getElementById("spa3").innerHTML = result;
                document.getElementById("spa4").innerHTML = "-";
                document.getElementById("spa5").innerHTML = "=";

                document.getElementById("spa11").innerHTML = desc2;
                document.getElementById("spa12").innerHTML = asc2;
                document.getElementById("spa13").innerHTML = result3;
                document.getElementById("spa14").innerHTML = "-";
                document.getElementById("spa15").innerHTML = "=";

                document.getElementById("spa21").innerHTML = desc3;
                document.getElementById("spa22").innerHTML = asc3;
                document.getElementById("spa23").innerHTML = result5;
                document.getElementById("spa24").innerHTML = "-";
                document.getElementById("spa25").innerHTML = "=";

                document.getElementById("spa31").innerHTML = desc4;
                document.getElementById("spa32").innerHTML = asc4;
                document.getElementById("spa33").innerHTML = result7;
                document.getElementById("spa34").innerHTML = "-";
                document.getElementById("spa35").innerHTML = "=";

                document.getElementById("spa41").innerHTML = desc5;
                document.getElementById("spa42").innerHTML = asc5;
                document.getElementById("spa43").innerHTML = result9;
                document.getElementById("spa44").innerHTML = "-";
                document.getElementById("spa45").innerHTML = "=";

                document.getElementById("spa41").innerHTML = desc6;
                document.getElementById("spa42").innerHTML = asc6;
                document.getElementById("spa43").innerHTML = result11;
                document.getElementById("sap").innerHTML = n;
                document.getElementById("sap2").innerHTML = 6;
                document.getElementById("spa54").innerHTML = "-";
                document.getElementById("spa55").innerHTML = "=";

                if (result11 != 6174) {
                  var result12 = [...(result11 + "")].map(n => +n);
                  var desc7 = result12.sort((a, b) => b - a).join("");

                  var asc7 = result12.sort((a, b) => a - b).join("");
                  var result13 = desc7 - asc7;

                  document.getElementById("spa1").innerHTML = desc;
                  document.getElementById("spa2").innerHTML = asc;
                  document.getElementById("spa3").innerHTML = result;
                  document.getElementById("spa4").innerHTML = "-";
                  document.getElementById("spa5").innerHTML = "=";

                  document.getElementById("spa11").innerHTML = desc2;
                  document.getElementById("spa12").innerHTML = asc2;
                  document.getElementById("spa13").innerHTML = result3;
                  document.getElementById("spa14").innerHTML = "-";
                  document.getElementById("spa15").innerHTML = "=";

                  document.getElementById("spa21").innerHTML = desc3;
                  document.getElementById("spa22").innerHTML = asc3;
                  document.getElementById("spa23").innerHTML = result5;
                  document.getElementById("spa24").innerHTML = "-";
                  document.getElementById("spa25").innerHTML = "=";

                  document.getElementById("spa31").innerHTML = desc4;
                  document.getElementById("spa32").innerHTML = asc4;
                  document.getElementById("spa33").innerHTML = result7;
                  document.getElementById("spa34").innerHTML = "-";
                  document.getElementById("spa35").innerHTML = "=";

                  document.getElementById("spa41").innerHTML = desc5;
                  document.getElementById("spa42").innerHTML = asc5;
                  document.getElementById("spa43").innerHTML = result9;
                  document.getElementById("spa44").innerHTML = "-";
                  document.getElementById("spa45").innerHTML = "=";

                  document.getElementById("spa51").innerHTML = desc6;
                  document.getElementById("spa52").innerHTML = asc6;
                  document.getElementById("spa53").innerHTML = result11;
                  document.getElementById("spa54").innerHTML = "-";
                  document.getElementById("spa55").innerHTML = "=";

                  document.getElementById("spa61").innerHTML = desc7;
                  document.getElementById("spa62").innerHTML = asc7;
                  document.getElementById("spa63").innerHTML = result13;
                  document.getElementById("sap").innerHTML = n;
                  document.getElementById("sap2").innerHTML = 7;
                  document.getElementById("spa64").innerHTML = "-";
                  document.getElementById("spa65").innerHTML = "=";

                  if (result13 != 6174) {
                    var result14 = [...(result13 + "")].map(n => +n);
                    var desc8 = result14.sort((a, b) => b - a).join("");

                    var asc8 = result14.sort((a, b) => a - b).join("");
                    var result15 = desc8 - asc8;

                    document.getElementById("spa1").innerHTML = desc;
                    document.getElementById("spa2").innerHTML = asc;
                    document.getElementById("spa3").innerHTML = result;
                    document.getElementById("spa4").innerHTML = "-";
                    document.getElementById("spa5").innerHTML = "=";

                    document.getElementById("spa11").innerHTML = desc2;
                    document.getElementById("spa12").innerHTML = asc2;
                    document.getElementById("spa13").innerHTML = result3;
                    document.getElementById("spa14").innerHTML = "-";
                    document.getElementById("spa15").innerHTML = "=";

                    document.getElementById("spa21").innerHTML = desc3;
                    document.getElementById("spa22").innerHTML = asc3;
                    document.getElementById("spa23").innerHTML = result5;
                    document.getElementById("spa24").innerHTML = "-";
                    document.getElementById("spa15").innerHTML = "=";

                    document.getElementById("spa31").innerHTML = desc4;
                    document.getElementById("spa32").innerHTML = asc4;
                    document.getElementById("spa33").innerHTML = result7;
                    document.getElementById("spa34").innerHTML = "-";
                    document.getElementById("spa35").innerHTML = "=";

                    document.getElementById("spa41").innerHTML = desc5;
                    document.getElementById("spa42").innerHTML = asc5;
                    document.getElementById("spa43").innerHTML = result9;
                    document.getElementById("spa44").innerHTML = "-";
                    document.getElementById("spa45").innerHTML = "=";

                    document.getElementById("spa51").innerHTML = desc6;
                    document.getElementById("spa52").innerHTML = asc6;
                    document.getElementById("spa53").innerHTML = result11;
                    document.getElementById("spa54").innerHTML = "-";
                    document.getElementById("spa55").innerHTML = "=";

                    document.getElementById("spa51").innerHTML = desc7;
                    document.getElementById("spa52").innerHTML = asc7;
                    document.getElementById("spa53").innerHTML = result13;
                    document.getElementById("sap").innerHTML = n;
                    document.getElementById("sap2").innerHTML = 7;
                    document.getElementById("spa54").innerHTML = "-";
                    document.getElementById("spa55").innerHTML = "=";

                    document.getElementById("spa51").innerHTML = desc8;
                    document.getElementById("spa52").innerHTML = asc8;
                    document.getElementById("spa53").innerHTML = result15;
                    document.getElementById("sap").innerHTML = n;
                    document.getElementById("sap2").innerHTML = 8;
                    document.getElementById("spa54").innerHTML = "-";
                    document.getElementById("spa55").innerHTML = "=";
                  } else {
                    myFunction7();
                  }
                } else {
                  myFunction6();
                }
              } else {
                myFunction5();
              }
            } else {
              myFunction4();
            }
          } else {
            myFunction3();
          }
        } else {
          myFunction2();
        }
      } else {
        myFunction1();
      }
    }
  });
});

//    $("#up").click(function () {
//      $("#form").closest('form').find("input[type=number], number").val("");

//   });
