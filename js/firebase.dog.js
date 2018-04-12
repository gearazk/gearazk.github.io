
var config = {
    apiKey: "AIzaSyDn_N25iM-njLMkRNopW5xZjoZNqaaFGCM",
    authDomain: "everteelanding.firebaseapp.com",
    databaseURL: "https://everteelanding.firebaseio.com",
    projectId: "everteelanding",
    storageBucket: "everteelanding.appspot.com",
    messagingSenderId: "631125511190"
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


