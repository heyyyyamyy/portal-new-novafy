function search_animal() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('animals');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}

function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function myFunction1() {
    var checkBox1 = document.getElementById("myCheck1");
    var text1 = document.getElementById("text1");
    if (checkBox1.checked == true){
      text1.style.display = "block";
    } else {
       text1.style.display = "none";
    }
  }


  function myFunction2() {
    var checkBox2 = document.getElementById("myCheck2");
    var text2 = document.getElementById("text2");
    if (checkBox2.checked == true){
      text2.style.display = "block";
    } else {
       text2.style.display = "none";
    }
  }

  function myFunction3() {
    var checkBox3 = document.getElementById("myCheck3");
    var text3 = document.getElementById("text3");
    if (checkBox3.checked == true){
      text3.style.display = "block";
    } else {
       text3.style.display = "none";
    }
  }

  function myFunction4() {
    var checkBox4 = document.getElementById("myCheck4");
    var text4 = document.getElementById("text4");
    if (checkBox4.checked == true){
      text4.style.display = "block";
    } else {
       text4.style.display = "none";
    }
  }

  function myFunction5() {
    var checkBox5 = document.getElementById("myCheck5");
    var text5 = document.getElementById("text5");
    if (checkBox5.checked == true){
      text5.style.display = "block";
    } else {
       text5.style.display = "none";
    }
  }

  function myFunction6() {
    var checkBox6 = document.getElementById("myCheck6");
    var text6 = document.getElementById("text6");
    if (checkBox6.checked == true){
      text6.style.display = "block";
    } else {
       text6.style.display = "none";
    }
  }

  function myFunction7() {
    var checkBox7 = document.getElementById("myCheck7");
    var text7 = document.getElementById("text7");
    if (checkBox7.checked == true){
      text7.style.display = "block";
    } else {
       text7.style.display = "none";
    }
  }

  function myFunction8() {
    var checkBox8 = document.getElementById("myCheck8");
    var text8 = document.getElementById("text8");
    if (checkBox8.checked == true){
      text8.style.display = "block";
    } else {
       text8.style.display = "none";
    }
  }

  function myFunction9() {
    var checkBox9 = document.getElementById("myCheck9");
    var text9 = document.getElementById("text9");
    if (checkBox9.checked == true){
      text9.style.display = "block";
    } else {
       text9.style.display = "none";
    }
  }
