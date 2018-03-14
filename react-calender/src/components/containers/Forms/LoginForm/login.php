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

//echo "Connected Successfully"."<br />";

$loginuser = "peveto"; // the value is going to come from the login page
$loginpassword = "peveto123"; //the value is going to come from the login page

$querylogin = "SELECT cwid, username, password FROM user WHERE username = '$loginuser' AND password = '$loginpassword'";

$result = $conn->query($querylogin);
if ($result->num_rows > 0) {
  $cwid = "null";
  $username = "null";
  $password = "null";
    while($row = $result->fetch_assoc()) {
        //echo "cwid: ".$row["cwid"]. " - username: " . $row["username"]. " -password: " . $row["password"]. "<br />";
        $cwid = $row["cwid"];
        $username = $row["username"];
        $password = $row["password"];
        echo "You have sucessfully logged into ULM Nursing Calender"."<br />";
    }

   $querypermissions = "SELECT * FROM permission WHERE cwid = '$cwid'";
   $resultpermissions = $conn->query($querypermissions);

   $role = "null";
   $createevent = "null";
   $deleteevent = "null";
   $addnotes = "null";
   $modifyevent = "null";
   $viewevent = "null";

   while($row = $resultpermissions->fetch_assoc()) {
       //echo "cwid: ".$row["cwid"]. " - username: " . $row["username"]. " -password: " . $row["password"]. "<br />";


       $role = $row["role"];
       //echo $role."<br />";
       $createevent = $row["createevent"];
       //echo $createevent."<br />";
       $deleteevent = $row["deleteevent"];
       //echo $deleteevent."<br />";
       $addnotes = $row["addnotes"];
       //echo $addnotes."<br />";
       $modifyevent = $row["modifyevent"];
        //echo $modifyevent."<br />";
       $viewevent = $row["viewevent"];
      //  echo $viewevent."<br />";
       //echo "You have sucessfully accessed permissions"."<br />";
   }
   $course = array();
   if($role = "student"){
      $querystudent = "SELECT DISTINCT prefixnumber FROM course JOIN takes ON course.crn = takes.crn WHERE takes.cwid = '$cwid'";
      $resultstudent = $conn->query($querystudent);
      while($row = $resultstudent->fetch_assoc()) {
        array_push($course, $row["prefixnumber"]);
      }
   }
  $course = array();
  if ($role = "instructor") {
      $queryinstructor = "SELECT DISTINCT prefixnumber FROM course WHERE cwid = '$cwid'";
      $resultinstructor = $conn->query($queryinstructor);
      while($row = $resultinstructor->fetch_assoc()) {
       array_push($course, $row["prefixnumber"]);
      }
   }
   $course = array();
   if ($role = "admin") {
      $queryadmin = "SELECT DISTINCT prefixnumber FROM course";
      $resultadmin = $conn->query($queryadmin);
      while($row = $resultadmin->fetch_assoc()) {
        array_push($course, $row["prefixnumber"]);
      }
   }

// Note: the data can be taken from the variables $cwid, $username, $password, $role, $createevent, $deleteevent, $modifyevent, $addnotes, $viewevent, and $course and sent using a jon object
//the outof each variable is below for a user

echo $cwid."<br />";
echo $username."<br />";
echo $password."<br />";
echo $role."<br />";
echo $createevent."<br />";
echo $deleteevent."<br />";
echo $modifyevent."<br />";
echo $addnotes."<br />";
echo $viewevent."<br />";
echo $addnotes."<br />";
echo "<pre>";
print_r($course);
echo "<pre />";

} else {
    echo "Invalid username or password. Please try again with correct information!"."<br />";
}
CloseCon($conn);

?>
