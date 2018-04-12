
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


$('#logout').hide();
$('#login_form').on('submit',function (e) {
    e.preventDefault();
    var email = $("#email").val().trim();
    var password = $("#pass").val().trim();
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (e) {
        location.reload()
    }).catch(function(error) {
        console.log(error);
        if (error){

            if (error.code === "auth/network-request-failed")
                alert('Vấn đề đường mạng ! xin thử lại sau ');
            else if (error.code === "auth/user-not-found")
                alert('Sai thông tin đăng nhập');
            else
                alert('Có lỗi xảy ra. Xin thử lại')
        }

    });

});
// Dump admin
db = app.database();
lead = formulario.on('value',function (snap) {
    table_data = [];
    $.each(snap.val(),function (ke,el) {
        table_data.push([
            el.name,
            el.email,
            el.phone,
        ])
    });
    data(table_data)
});

data = function (data) {
    if( data && data.length >0){

        $('#login_form').remove();
        $('#example').DataTable({
            destroy: true,
            data: data,
            columns: [
                { title: "Name" },
                { title: "Email" },
                { title: "Phone." },
            ]
        } );
    }
};
firebase.auth().onAuthStateChanged(function (user) {
    console.log(user);
    if (user) {
        data();
        $('#logout').show();

    } else {
        console.log(user);

        // User is signed out.
        $('#example').remove();
    }
});

$('#logout').on('click',function (e) {
    firebase.auth().signOut().then(function() {
        location.reload();
    }, function(error) {
        location.reload();
    });
});