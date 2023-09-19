<?php

// Get the data from the form
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$password = $_POST['contrasena'];

// Insert the data into the storage
$sql = "INSERT INTO signups (first_name, last_name, email, contrasena) VALUES ('$first_name', '$last_name', '$email', '$password')";
mysqli_query($conn, $sql);

// Redirect the user to the home page
header("Location: index.php");

?>