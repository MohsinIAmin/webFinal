<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $username = mysqli_real_escape_string($mysqli, trim($request->username));

    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $address = mysqli_real_escape_string($mysqli, trim($request->address));
    $sql = "INSERT INTO users(username,password) VALUES ('{$username}','{$password}')";
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'username' => $username,
            'password' => $password
        ];
        echo json_encode($authdata);
    } else {
        http_response_code(404);
    }
}
