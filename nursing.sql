-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2018 at 11:21 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nursing`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `CRN` varchar(5) NOT NULL,
  `PrefixNumber` varchar(9) NOT NULL,
  `NursingSemester` varchar(1) NOT NULL,
  `CourseName` varchar(100) NOT NULL,
  `CreditHours` varchar(1) NOT NULL,
  `CrnCWID` varchar(8) NOT NULL,
  `LeadCWID` varchar(8) NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `StartTime` time NOT NULL,
  `EndTime` time NOT NULL,
  `Days` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`CRN`, `PrefixNumber`, `NursingSemester`, `CourseName`, `CreditHours`, `CrnCWID`, `LeadCWID`, `StartDate`, `EndDate`, `StartTime`, `EndTime`, `Days`) VALUES
('43928', 'NURS 2004', '1', 'Health Assessment', '3', '30020222', '30020222', '2018-08-20', '2018-12-07', '08:30:00', '11:30:00', 'F'),
('43928', 'NURS 2004', '1', 'Heath Assessment', '3', '30020222', '30020222', '2018-08-20', '2018-12-07', '13:00:00', '15:00:00', 'R'),
('43929', 'NURS 2004', '1', 'Health Assessment', '3', '30021223', '30020222', '2018-08-20', '2018-12-07', '08:30:00', '11:30:00', 'F'),
('43929', 'NURS 2004', '1', 'Health Assessment', '3', '30021223', '30020222', '2018-08-20', '2018-12-07', '13:00:00', '15:00:00', 'R'),
('43930', 'NURS 2004', '1', 'Health Assessment', '3', '30023231', '30020222', '2018-08-20', '2018-12-07', '08:30:00', '11:30:00', 'F'),
('43930', 'NURS 2004', '1', 'Health Assessment', '3', '30023231', '30020222', '2018-08-20', '2018-12-07', '13:00:00', '15:00:00', 'M'),
('43931', 'NURS 2004', '1', 'Health Assessment', '3', '30032321', '30020222', '2018-08-20', '2018-12-20', '08:30:00', '11:30:00', 'F'),
('43931', 'NURS 2004', '1', 'Health Assessment', '3', '30032321', '30020222', '2018-08-20', '2018-12-07', '13:00:00', '15:00:00', 'R');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `Title` varchar(50) NOT NULL,
  `NursingSemester` varchar(1) NOT NULL,
  `PrefixNumber` varchar(9) NOT NULL,
  `CWID` varchar(8) NOT NULL,
  `RoomNo` varchar(1) NOT NULL,
  `NumberOfAttendees` varchar(5) NOT NULL,
  `Date` date NOT NULL,
  `Day` varchar(30) NOT NULL,
  `StartTime` time NOT NULL,
  `EndTime` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `Title` varchar(50) NOT NULL,
  `NursingSemester` varchar(1) NOT NULL,
  `PrefixNumber` varchar(9) NOT NULL,
  `CWID` varchar(8) NOT NULL,
  `RoomNo` varchar(5) NOT NULL,
  `NumberOfAttendees` varchar(5) NOT NULL,
  `Date` date NOT NULL,
  `Day` varchar(30) NOT NULL,
  `StartTime` time NOT NULL,
  `EndTime` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `RoomNo` varchar(5) NOT NULL,
  `Capacity` varchar(5) NOT NULL,
  `Seats` varchar(5) NOT NULL,
  `Desks` varchar(5) NOT NULL,
  `Mannequins` varchar(5) NOT NULL,
  `Beds` varchar(5) NOT NULL,
  `Computers` varchar(5) NOT NULL,
  `AVEquip` varchar(5) NOT NULL,
  `Whiteboards` varchar(5) NOT NULL,
  `NoelSimulator` varchar(5) NOT NULL,
  `IcuSimulator` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`RoomNo`, `Capacity`, `Seats`, `Desks`, `Mannequins`, `Beds`, `Computers`, `AVEquip`, `Whiteboards`, `NoelSimulator`, `IcuSimulator`) VALUES
('242', '55', '55', 'Null', 'Null', 'Null', '1', 'Yes', 'Yes', 'Null', 'Null'),
('320', '10', '10', 'Null', 'Null', 'Null', 'Null', 'Null', 'Null', 'Null', 'Null'),
('325', '20', '20', 'Null', 'Null', '4', 'Null', 'Null', 'Null', 'Null', 'Null'),
('327', '10', '10', 'Null', 'Null', 'Null', 'Null', 'Null', 'Null', 'Null', 'Null');

-- --------------------------------------------------------

--
-- Table structure for table `takes`
--

CREATE TABLE `takes` (
  `CWID` varchar(8) NOT NULL,
  `CRN` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `takes`
--

INSERT INTO `takes` (`CWID`, `CRN`) VALUES
('30052712', '43928'),
('30055516', '43929'),
('30056133', '43930'),
('30057712', '43931');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `CWID` varchar(8) NOT NULL,
  `Fname` varchar(30) NOT NULL,
  `Mname` varchar(30) DEFAULT NULL,
  `Lname` varchar(30) NOT NULL,
  `Role` varchar(30) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Username` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`CWID`, `Fname`, `Mname`, `Lname`, `Role`, `Email`, `Username`, `Password`) VALUES
('30012121', 'Sherry', NULL, 'Peveto', 'admin', 'peveto@ulm.edu', 'peveto', 'sherry123'),
('30020222', 'Kathy', 'S', 'Davenport', 'Instructor', 'daven@ulm.edu', 'daven', 'daven123'),
('30021223', 'Ebony', 'Gray', 'Watson', 'Instructor', 'watson@ulm.edu', 'watson', 'ebony123'),
('30023231', 'Sandra', 'Lee', 'Ogg', 'Instructor', 'oggls@ulm.edu', 'oggls', 'sandra123'),
('30032321', 'Kimberly', 'Stites', 'Letson', 'Instructor', 'letson@ulm.edu', 'letson', 'kimls123'),
('30052712', 'Ravi', NULL, 'Shrestha', 'Student', 'shrest@warhawks.ulm.edu', 'shrest', 'ravi123'),
('30055516', 'Pratik', NULL, 'Siwakoti', 'Student', 'siwakop@warhawks.ulm.edu', 'siwakop', 'pratik123'),
('30056133', 'Thomas', 'James', 'Brumley', 'Student', 'brumle@warhawks.ulm.edu', 'brumle', 'brum123'),
('30057712', 'Suyog', 'Bikram', 'Malla', 'Student', 'mallas@warhawks.ulm.edu', 'mallas', 'mallas123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`CRN`,`Days`),
  ADD KEY `CrnCWID` (`CrnCWID`),
  ADD KEY `LeadCWID` (`LeadCWID`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD KEY `CWID` (`CWID`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD KEY `CWID` (`CWID`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`RoomNo`);

--
-- Indexes for table `takes`
--
ALTER TABLE `takes`
  ADD PRIMARY KEY (`CWID`,`CRN`),
  ADD KEY `CRN` (`CRN`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`CWID`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`CrnCWID`) REFERENCES `user` (`CWID`),
  ADD CONSTRAINT `course_ibfk_2` FOREIGN KEY (`LeadCWID`) REFERENCES `user` (`CWID`);

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`CWID`) REFERENCES `user` (`CWID`);

--
-- Constraints for table `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`CWID`) REFERENCES `user` (`CWID`);

--
-- Constraints for table `takes`
--
ALTER TABLE `takes`
  ADD CONSTRAINT `takes_ibfk_1` FOREIGN KEY (`CRN`) REFERENCES `course` (`CRN`),
  ADD CONSTRAINT `takes_ibfk_2` FOREIGN KEY (`CWID`) REFERENCES `user` (`CWID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
