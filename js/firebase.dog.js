
var config = {
    apiKey: "AIzaSyDDPW5Pl7VM84E1FJzeCRxZ_qdR2xHME5g",
    authDomain: "eighth-breaker-179415.firebaseapp.com",
    databaseURL: "https://eighth-breaker-179415.firebaseio.com",
    projectId: "eighth-breaker-179415",
    storageBucket: "eighth-breaker-179415.appspot.com",
    messagingSenderId: "222665463186"
  };
app = firebase.initializeApp(config);

var formulario = firebase.database().ref();

$("#btn-order").on("click", function (e) {

    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var email = $("#email").val().trim();
    if (name === '') {
        swal('Xin nhập thông tin đầy đủ');
        return;
    }
    if (phone === ''){
        swal('Xin nhập thông tin đầy đủ');
        return;
    }
    if (email === ''){
        swal('Xin nhập thông tin đầy đủ');
        return;
    }
    formulario.push({
        name: name,
        phone: phone,
        email: email,
        time: firebase.database.ServerValue.TIMESTAMP
    }, function (error) {
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


