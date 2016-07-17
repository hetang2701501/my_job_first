<?php
header('Content-Type: text/html; charset=UTF-8');
$con = mysql_connect("localhost", "root", "root");
if (!$con) {
	die('Could not connect: ' . mysql_error());
} else {
	echo "ok";
};
mysql_select_db("news", $con);


$sql = "INSERT INTO  `news`(`newsid`, `newstitle`, `newscon`, `time`,`newsimg`)
VALUES
('$_POST[newsid]','$_POST[newstitle]','$_POST[newscon]','$_POST[time]','$_POST[newsimg]')";

if (!mysql_query($sql, $con)) {
	die('Error: ' . mysql_error());
}
echo "<script language='javascript'> alert('添加成功！ 请返回页面'); </script>";
echo $_POST[newstitle];

mysql_close($con);
?>