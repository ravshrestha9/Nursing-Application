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

Class loginData{
    public $cwid;
    public $username;
    public $password;
    public $role;
    public $createevent;
    public $deleteevent;
    public  $addnotes;
    public $modifyevent;
    public $viewevent;
    public $adduser;
    public $changerole;
    public $course;

}



$loginuser = $_POST['username']; // the value is going to come from the login page
$loginpassword = $_POST['password']; //the value is going to come from the login page

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
    $someUser = array(
        'cwid' => 0,
        'username' => 0,
        'password' => 0,
        'role' => 0,
        'createevent' => 0,
        'deleteevent' => 0,
        'modifyevent' => 0,
        'addnotes' => 0,
        'viewevent' => 0,
        'adduser' => 0,
        'changerole' => 0,
        'course' => 0
    );
   $role = "null";
   $createevent = "null";
   $deleteevent = "null";
   $addnotes = "null";
   $modifyevent = "null";
   $viewevent = "null";
   $adduser = "null";
   $changerole = "null";

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
      $adduser = $row["adduser"];
      //echo $adduser."<br />";
      $changerole = $row["changerole"];
      //echo $changerole."<br />";
       //echo "You have sucessfully accessed permissions"."<br />";
   }
   
   $course = array();

   function fillcourse($aquery, $conn){
     $result = $conn->query($aquery);
     $acourse = array();
     while($row = $result->fetch_assoc()) {
       array_push($acourse, $row["prefixnumber"]);
     }
     return $acourse;
   }


   if($role == "student"){
      $query = "SELECT DISTINCT prefixnumber FROM course JOIN takes ON course.crn = takes.crn WHERE takes.cwid = '$cwid'";
      $course = fillcourse($query, $conn);
   }
  else if ($role == "instructor") {
      $query = "SELECT DISTINCT prefixnumber FROM course WHERE cwid = '$cwid'";
      $course = fillcourse($query, $conn);
   }
   else {
      $query = "SELECT DISTINCT prefixnumber FROM course";
      $course = fillcourse($query, $conn);

   }

// Note: the data can be taken from the variables $cwid, $username, $password, $role, $createevent, $deleteevent, $modifyevent, $addnotes, $viewevent, and $course and sent using a jon object
//the outof each variable is below for a user


echo $cwid."<br />";
//array_push($someUser, $cwid);
$someUser['cwid'] = $cwid;
echo $username."<br />";
//array_push($someUser, $username);
$someUser['username'] = $username;
echo $password."<br />";
//array_push($someUser, $password);
$someUser['password'] = $password;
echo $role."<br />";
//array_push($someUser, $role);
$someUser['role'] = $role;
echo $createevent."<br />";
//array_push($someUser, $createevent);
$someUser['createevent'] = $createevent;
echo $deleteevent."<br />";
//array_push($someUser, $deleteevent);
$someUser['deleteevent'] = $deleteevent;
echo $modifyevent."<br />";
//array_push($someUser, $modifyevent);
$someUser['modifyevent'] = $modifyevent;
echo $addnotes."<br />";
//array_push($someUser, $addnotes);
$someUser['addnotes'] = $addnotes;
echo $viewevent."<br />";
//array_push($someUser, $viewevent)
$someUser['viewevent'] = $viewevent;;
echo $adduser."<br />";
//array_push($someUser, $adduser);
$someUser['adduser'] = $adduser;
echo $changerole."<br />";
//array_push($someUser, $changerole);
$someUser['changerole'] = $changerole;
//array_push($someUser, $course);
$someUser['course'] = $course;
echo "<pre>";
print_r($course);
echo "<pre />";

echo json_encode($someUser);

} else {
    echo "Invalid username or password. Please try again with correct information!"."<br />";
}
CloseCon($conn);

?>
