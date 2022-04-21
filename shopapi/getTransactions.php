<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$shopid = $_GET["shopid"];
$sql = '';
$sql = "SELECT * FROM transactions where shopid='$shopid'";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
