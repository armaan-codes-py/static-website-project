<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $servername = "localhost";  
    $username_db = "root";     
    $password_db = "";          
    $database = "dataweb";

    $conn = new mysqli($servername, $username_db, $password_db, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $_SESSION["username"] = $username;
        echo "<script>
                alert('Log In successful');
                window.location.href = '../HTML/logged.html';
              </script>";
    } else {
      	echo "<script>
				alert('Invalid username or password.');
				window.location.href = '../HTML/login.html';
			</script>";
    }

    $conn->close();
}