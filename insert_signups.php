<?php

// Get the data from the form
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];

// Insert the data into the storage
$sql = "INSERT INTO signups (first_name, last_name, email) VALUES ('$first_name', '$last_name', '$email')";
mysqli_query($conn, $sql);

// Redirect the user to the home page
header("Location: index.php");

?>