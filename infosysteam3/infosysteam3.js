function fun1()
{

                document.getElementById("blocks").style.display="block";
                document.getElementById("yes").style.backgroundColor="violet";
                 document.getElementById("no").style.backgroundColor="white";
                 move();

            }
    function fun2()
    {

                    document.getElementById("blocks").style.display="none";
                    document.getElementById("no").style.backgroundColor="violet";
                    document.getElementById("yes").style.backgroundColor="white";
                   

                }


                function validate(){

                    document.getElementById("kk").style.display="block" ;
                    document.getElementById("g").style.backgroundColor="violet";
                    document.getElementById("h").style.backgroundColor="white";
                    move();
                   

                }
                function validate1(){

                  document.getElementById("kkk").style.display="block";
                  document.getElementById("r").style.backgroundColor="violet";
                  document.getElementById("b").style.backgroundColor="white";
                  move();

                }
                function validate2(){

                   document.getElementById("kkkk").style.display="block";
                   document.getElementById("c").style.backgroundColor="violet";
                   document.getElementById("d").style.backgroundColor="white";
                   move();

               }
               function validate3(){

                   document.getElementById("kkkkk").style.display="block";
                   document.getElementById("e").style.backgroundColor="violet";
                    document.getElementById("f").style.backgroundColor="white";
                    move();
                }


                function validate4(){

                document.getElementById("kk").style.display="none";
                document.getElementById("g").style.backgroundColor="white";
                document.getElementById("h").style.backgroundColor="violet";



               }
                function validate5(){

              document.getElementById("kkk").style.display="none";
              document.getElementById("r").style.backgroundColor="white";
              document.getElementById("b").style.backgroundColor="violet";
             }
             function validate6(){

              document.getElementById("kkkk").style.display="none";
               document.getElementById("c").style.backgroundColor="white";
              document.getElementById("d").style.backgroundColor="violet";
            }
             function validate7(){

            document.getElementById("kkkkk").style.display="none";
             document.getElementById("e").style.backgroundColor="white";
            document.getElementById("f").style.backgroundColor="violet";
             }





                function validate8(){

                    document.getElementById("aa").style.display="block" ;
                    document.getElementById("i").style.backgroundColor="violet";
                    document.getElementById("j").style.backgroundColor="white";
                   move();

                }
                function validate10(){

                  document.getElementById("aaa").style.display="block";
                  document.getElementById("q").style.backgroundColor="violet";
                  document.getElementById("l").style.backgroundColor="white";
                  move();

                }
                function validate12(){

                   document.getElementById("aaaa").style.display="block";
                   document.getElementById("m").style.backgroundColor="violet";
                   document.getElementById("n").style.backgroundColor="white";
                   move();

               }
               function validate14(){

                   document.getElementById("aaaaa").style.display="block";
                   document.getElementById("o").style.backgroundColor="violet";
                    document.getElementById("p").style.backgroundColor="white";
                    move();

                }


                function validate9(){

                document.getElementById("aa").style.display="none";
                document.getElementById("i").style.backgroundColor="white";
                document.getElementById("j").style.backgroundColor="violet";


               }
                function validate11(){

              document.getElementById("aaa").style.display="none";
              document.getElementById("q").style.backgroundColor="white";
              document.getElementById("l").style.backgroundColor="violet";
             }
             function validate13(){

              document.getElementById("aaaa").style.display="none";
               document.getElementById("m").style.backgroundColor="white";
              document.getElementById("n").style.backgroundColor="violet";
            }
             function validate15(){

            document.getElementById("aaaaa").style.display="none";
             document.getElementById("o").style.backgroundColor="white";
            document.getElementById("p").style.backgroundColor="violet";
             }


var width=46;
var questions=46;
var msg=" of 97 answered";

function move(){
    var elem=document.getElementById("myBar");
    var id= setInterval(frame,10);
    function frame(){
        width=width+1;
        elem.style.value=width +'%';
        clearInterval(id);
    }
    questions=questions+1;
    var txt1= questions+msg;
    document.getElementById("progress").innerHTML ="<b>"+txt1+"</b>";

}

function dateOfBirthValdiate () {
 
  let dateOfBirth = document.getElementById("in1");
  var dateOfBirthErr = document.getElementById("dateOfBirthErr1");
  const dateFormat = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;

  if (dateOfBirth.value == "") {
      dateOfBirth.style.border = "1px solid red";
      dateOfBirthErr.innerHTML = "* is required";
      document.getElementById("next").addEventListener("click",function(event){
        event.preventDefault()
     });
  } else if (dateOfBirth.value.match(dateFormat)) {
      dateOfBirth.style.border = "1px solid #ccc";
      dateOfBirthErr.innerHTML = "*";
  } else {
      dateOfBirth.style.border = "2px solid red";
      dateOfBirthErr.innerHTML = "invalid date";


  }

  let dateOfBirth2 = document.getElementById("in2");
  var dateOfBirthErr2 = document.getElementById("dateOfBirthErr2");
  const dateFormat2 = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;

  if (dateOfBirth2.value == "") {
      dateOfBirth2.style.border = "1px solid red";
      dateOfBirthErr2.innerHTML = "* is required";
      document.getElementById("next").addEventListener("click",function(event){
        event.preventDefault()
     });
  } else if (dateOfBirth2.value.match(dateFormat)) {
      dateOfBirth2.style.border = "1px solid #ccc";
      dateOfBirthErr2.innerHTML = "*";
  } else {
      dateOfBirth2.style.border = "2px solid red";
      dateOfBirthErr2.innerHTML = "invalid date";


  }

  let dateOfBirth3 = document.getElementById("in3");
  var dateOfBirthErr3 = document.getElementById("dateOfBirthErr3");
  const dateFormat3 = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;

  if (dateOfBirth3.value == "") {
      dateOfBirth3.style.border = "1px solid red";
      dateOfBirthErr3.innerHTML = "* is required";
      document.getElementById("next").addEventListener("click",function(event){
        event.preventDefault()
     });
  } else if (dateOfBirth3.value.match(dateFormat)) {
      dateOfBirth3.style.border = "1px solid #ccc";
      dateOfBirthErr3.innerHTML = "*";
  } else {
      dateOfBirth3.style.border = "2px solid red";
      dateOfBirthErr3.innerHTML = "invalid date";


  }

  let dateOfBirth4 = document.getElementById("in4");
  var dateOfBirthErr4 = document.getElementById("dateOfBirthErr4");
  const dateFormat4 = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;

  if (dateOfBirth4.value == "") {
      dateOfBirth4.style.border = "1px solid red";
      dateOfBirthErr4.innerHTML = "* is required";
      document.getElementById("next").addEventListener("click",function(event){
        event.preventDefault()
     });
  } else if (dateOfBirth4.value.match(dateFormat)) {
      dateOfBirth4.style.border = "1px solid #ccc";
      dateOfBirthErr4.innerHTML = "*";
  } else {
      dateOfBirth4.style.border = "2px solid red";
      dateOfBirthErr4.innerHTML = "invalid date";


  }

  let dateOfBirth5 = document.getElementById("in5");
  var dateOfBirthErr5 = document.getElementById("dateOfBirthErr5");
  const dateFormat5 = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;

  if (dateOfBirth5.value == "") {
      dateOfBirth5.style.border = "1px solid red";
      dateOfBirthErr5.innerHTML = "* is required";
      document.getElementById("next").addEventListener("click",function(event){
        event.preventDefault()
     });
  } else if (dateOfBirth5.value.match(dateFormat)) {
      dateOfBirth5.style.border = "1px solid #ccc";
      dateOfBirthErr5.innerHTML = "*";
  } else {
      dateOfBirth5.style.border = "2px solid red";
      dateOfBirthErr5.innerHTML = "invalid date";


  }

  let dateOfBirth6 = document.getElementById("in6");
  var dateOfBirthErr6 = document.getElementById("dateOfBirthErr6");
  const dateFormat6 = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;

  if (dateOfBirth6.value == "") {
      dateOfBirth6.style.border = "1px solid red";
      dateOfBirthErr6.innerHTML = "* is required";
      document.getElementById("next").addEventListener("click",function(event){
        event.preventDefault()
     });
  } else if (dateOfBirth6.value.match(dateFormat)) {
      dateOfBirth6.style.border = "1px solid #ccc";
      dateOfBirthErr6.innerHTML = "*";
  } else {
      dateOfBirth6.style.border = "2px solid red";
      dateOfBirthErr6.innerHTML = "invalid date";


  }

  
  let dateOfBirth7 = document.getElementById("in7");
  var dateOfBirthErr7 = document.getElementById("dateOfBirthErr7");
  const dateFormat7 = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;

  if (dateOfBirth7.value == "") {
      dateOfBirth7.style.border = "1px solid red";
      dateOfBirthErr7.innerHTML = "* is required";
      document.getElementById("next").addEventListener("click",function(event){
        event.preventDefault()
     });
  } else if (dateOfBirth7.value.match(dateFormat)) {
      dateOfBirth7.style.border = "1px solid #ccc";
      dateOfBirthErr7.innerHTML = "*";
  } else {
      dateOfBirth7.style.border = "2px solid red";
      dateOfBirthErr7.innerHTML = "invalid date";


  }

  
  let dateOfBirth8 = document.getElementById("in8");
  var dateOfBirthErr8 = document.getElementById("dateOfBirthErr8");
  const dateFormat8 = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;

  if (dateOfBirth8.value == "") {
      dateOfBirth8.style.border = "1px solid red";
      dateOfBirthErr8.innerHTML = "* is required";
      document.getElementById("next").addEventListener("click",function(event){
        event.preventDefault()
     });
  }else if (dateOfBirth8.value.match(dateFormat)) {
      dateOfBirth8.style.border = "1px solid #ccc";
      dateOfBirthErr8.innerHTML = "*";  
  } else {
      dateOfBirth8.style.border = "2px solid red";
      dateOfBirthErr8.innerHTML = "invalid date";


  }
}



