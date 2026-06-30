<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    $servername = "localhost";
    $username_db = "root";
    $password_db = "";
    $database = "dataweb";

    $conn = new mysqli($servername, $username_db, $password_db, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $checkUsernameQuery = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($checkUsernameQuery);

    if ($result->num_rows > 0) {
        echo "<script>
                alert('Username already taken. Please choose a different username.');
				window.location.href = '../HTML/signup.html';
              </script>";
    } else {
        $insertQuery = "INSERT INTO users (username,email,password) VALUES ('$username', '$email', '$password')";
        
        if ($conn->query($insertQuery) === TRUE) {
            echo "<script>
                    alert('Registration successful');
                    window.location.href = '../HTML/logged.html';
                  </script>";
        } else {
            echo "Error: " . $insertQuery . "<br>" . $conn->error;
        }
    }

    $conn->close();
}
?>
