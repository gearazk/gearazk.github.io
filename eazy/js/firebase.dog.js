
var config = {
  apiKey: "AIzaSyAJy639ke1_aIhbyGQcrgaLncgviN_KEpg",
  authDomain: "kaola-3aa52.firebaseapp.com",
  databaseURL: "https://kaola-3aa52.firebaseio.com",
  projectId: "kaola-3aa52",
  storageBucket: "",
  messagingSenderId: "867387160730"
};
app = firebase.initializeApp(config);

var formulario = firebase.database().ref('buy');

$("#btn-order").on("click", function (e) {
  var name = $("#name").val().trim();
  var phone = $("#phone").val().trim();
  var address = $("#address").val().trim();
  var prod_1 = $("#product_1").val().trim();
  var prod_2 = $("#product_2").val().trim();
  if (name === '') {
    swal('Xin nhập thông tin đầy đủ');
    return;
  }
  if (phone === ''){
    swal('Xin nhập thông tin đầy đủ');
    return;
  }
  if (address === ''){
    swal('Xin nhập thông tin đầy đủ');
    return;
  }
  if (prod_1 === '' && prod_2 === ''){
    swal('Xin nhập món hàng chọn');
    return;
  }
  
  formulario.push({
    name: name,
    phone: phone,
    address: address,
    prod_1: prod_1,
    prod_2: prod_2,
    time: firebase.database.ServerValue.TIMESTAMP
  }, function (error) {
    $('#buy_popup').modal('hide');
    
    if (error) {
      console.log(error);
      swal({
        title: 'Error',
        text: 'Xin thử lại lần sau',
        type: 'warning',
        confirmButtonText: 'OK',
      }).then(function(result){
        location.reload();
      });
    } else {
      $('#buy-success').modal()
      // swal({
      //     title: 'Thành công',
      //     text: 'Đặt thành công.',
      //     type: 'success',
      //     confirmButtonText: 'OK',
      // }).then(function(result){
      //     location.reload();
      // });
    }
  });
  
});
var formulario1 = firebase.database().ref('signup');


$("#btn-signup-submit").on("click", function (e) {
  var name = $("#su-name").val().trim();
  var phone = $("#su-phone").val().trim();
  var address = $("#su-address").val().trim();
  var email = $("#su-email").val().trim();
  if (name === '') {
    swal('Xin nhập thông tin đầy đủ');
    return;
  }
  if (phone === ''){
    swal('Xin nhập thông tin đầy đủ');
    return;
  }
  if (address === ''){
    swal('Xin nhập thông tin đầy đủ');
    return;
  }
  if (email === '' ){
    swal('Xin nhập thông tin đầy đủ');
    
    return;
  }
  
  formulario1.push({
    name: name,
    phone: phone,
    address: address,
    email: email,
    time: firebase.database.ServerValue.TIMESTAMP
  }, function (error) {
    $('#signup_popup').modal('hide');
    
    if (error) {
      console.log(error);
      swal({
        title: 'Error',
        text: 'Xin thử lại lần sau',
        type: 'warning',
        confirmButtonText: 'OK',
      }).then(function(result){
        location.reload();
      });
    } else {
      swal({
          title: 'Thành công',
          text: 'Đăng ký thành công.',
          type: 'success',
          confirmButtonText: 'OK',
      }).then(function(result){
          location.reload();
      });
    }
  });
  
});
