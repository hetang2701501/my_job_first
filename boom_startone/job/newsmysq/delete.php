<?php
header('Content-Type: text/html; charset=UTF-8');
$con = mysql_connect("localhost", "root", "root");
if (!$con) {
	die('Could not connect: ' . mysql_error());
} else {
	echo "ok";
};
mysql_select_db("news", $con);

$sql = "DELETE FROM `news` WHERE newsid =$_POST[abb]";

if (!mysql_query($sql, $con)) {
	die('Error: ' . mysql_error());
}


mysql_close($con);
?>