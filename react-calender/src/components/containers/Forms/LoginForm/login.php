<?php

function OpenCon()
 {
 $host = "localhost";
 $user = "root";
 $password = "";
 $database = "anursing";


 $conn = new mysqli($host, $user, $password,$database) or die("Connect failed: %s\n". $conn -> error);


 return $conn;
 }

function CloseCon($conn)
 {
 $conn -> close();
 }

 $conn = OpenCon();

echo "Connected Successfully"."<br />";
$query = "SELECT cwid, fname, lname from user";

$result = $conn->query($query);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "cwid: " . $row["cwid"]. " - Name: " . $row["fname"]. " " . $row["lname"]. "<br />";
    }
} else {
    echo "0 results";
}
CloseCon($conn);

?>
