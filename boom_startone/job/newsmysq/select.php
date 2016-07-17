<?php
header('Content-Type:application/json; charset=UTF-8');
$con = mysql_connect("localhost","root","root");
	if (!$con)
 	{
  	die('Could not connect: ' . mysql_error());
  	}else{
  	mysql_select_db("news", $con);
  	$query = mysql_query('SELECT * FROM NEWS');
	$arr = array();
	while($r=mysql_fetch_array($query))
	{
	array_push($arr,array("newsid"=>$r['newsid'],"newstitle"=>$r['newstitle'],"newscon"=>$r['newscon'],"newsimg"=>$r['newsimg'],"time"=>$r['time']));}
    echo json_encode($arr);
  }
	mysql_close($con);

?>