
<!doctype html>
<html>
<head>
    <title>Socket.IO chat</title>
    <link rel="shortcut icon" href="">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script>
        $(function () {
            $('#btnSignUp').click(function(){
              sessionStorage.setItem('userid', $('#txtUser').val());
              window.location.replace("http://localhost:3000/index");
            });
        });
    </script>
</head>
<body>
    <div id="divSignUp">
        <label>Name:</label><input type="text" id="txtUser" /><input type="button" id="btnSignUp" value="Sign Up">
    </div>
</body>
</html>

