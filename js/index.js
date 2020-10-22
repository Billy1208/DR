function openNav() {
  document.getElementById("Sidenav").style.width = "200px";
  document.getElementById("dot3").style.right = "145px";
}
  
function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  document.getElementById("dot3").style.right = "-50px";
}
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
      
  slider.each(function(){
    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });
  
    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};
  


function seeMoreTak() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("maz");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "المزيد";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "اقرأ اقل";
    moreText.style.display = "inline";
  }
} 
function seeMoreblod() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("maz1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "المزيد";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "اقرأ اقل";
    moreText.style.display = "inline";
  }
} 
function seeMorelev() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("maz2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "المزيد";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "اقرأ اقل";
    moreText.style.display = "inline";
  }
} 
function seeMoreblod2() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("maz3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "المزيد";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "اقرأ اقل";
    moreText.style.display = "inline";
  }
} 

function seeMoreberiod() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("maz4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "المزيد";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "اقرأ اقل";
    moreText.style.display = "inline";
  }
} 
function seeMore8oda() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("maz5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "المزيد";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "اقرأ اقل";
    moreText.style.display = "inline";
  }
} 
function seeMoreburn() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("maz6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "المزيد";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "اقرأ اقل";
    moreText.style.display = "inline";
  }
} 

function submit() {
  var x = document.getElementById("male").checked;
  var y = document.getElementById("female").checked;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var age = document.getElementById("age").value;
  if (x === true) {
    var bmr = (13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362;
    bmr = ~~bmr;
    var bmi = (weight /((height / 100) * (height / 100)));
    bmi = ~~bmi;
    document.getElementById("bmr-id").style.display = "none";

    document.getElementById("calories").style.display = "inline";
    document.getElementById("data2").style.display = "inline";
    document.getElementById("calories").innerHTML = ("حصتك اليومية من السعرات الحرارية : " + bmr + " سعر");
    document.getElementById("bmi-lap").style.display = "inline";
    document.getElementById("data3").style.display = "inline";
    document.getElementById("bmi-lap").innerHTML = ("موشر السمنة : " + bmi);
    if (bmi >= 30) {
      document.getElementById("cond").style.display = "inline";
      document.getElementById("data4").style.display = "inline";
      document.getElementById("cond").innerHTML = ("الوضع الصحي : سمنة ");
    }
    else if ((bmi >= 25) & (bmi < 30)){
      document.getElementById("cond").style.display = "inline";
      document.getElementById("data4").style.display = "inline";
      document.getElementById("cond").innerHTML = ("الوضع الصحي : زيادة في الوزن");
    }
    else if ((bmi >= 18.5)&(bmi < 25)){
      document.getElementById("cond").style.display = "inline";
      document.getElementById("data4").style.display = "inline";
      document.getElementById("cond").innerHTML = ("الوضع الصحي : طبيعي");
    }
    else {
      document.getElementById("cond").style.display = "inline";
      document.getElementById("data4").style.display = "inline";
      document.getElementById("cond").innerHTML = ("الوضع الصحي : نحافة");
    };
    document.getElementById("data1").style.display = "inline";
    document.getElementById("bmr-bt2").style.display = "inline";
  }
  else if (x === false) {
    if (y === true) {
      var bmr = (9.247 * weight) + (3.098 * height) - (4.330 * age) + 447.593;
      document.getElementById("bmr-id").style.display = "none";
    }else {
      document.getElementById("erorr").style.display = "inline";
      document.getElementById("data1").style.display = "inline";
      document.getElementById("bmr-id").style.display = "none";
      document.getElementById("bmr-bt2").style.display = "inline";

    }

  };
  
  
};