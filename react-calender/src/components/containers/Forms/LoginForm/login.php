<?php
$db = new mysqli('localhost','root','','anursing');

$result = $db->query("SELECT fname FROM user")

print_r($result);

echo $_POST['username'];
echo $_POST['password'];