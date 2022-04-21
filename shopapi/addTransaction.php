<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {

    $shopid = mysqli_real_escape_string($mysqli, trim($request->shopid));
    $items = mysqli_real_escape_string($mysqli, trim($request->items));
    $sql = "INSERT INTO transactions(shopid,items) VALUES ('{$shopid}','{$items}')";
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'username' => $shopid,
            'items' => $items
        ];
        echo json_encode($authdata);
    } else {
        http_response_code(404);
    }
}
    