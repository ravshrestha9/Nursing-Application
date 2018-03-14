-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2018 at 03:42 AM
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
-- Database: `anursing`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `crn` varchar(5) NOT NULL,
  `prefixnumber` varchar(9) NOT NULL,
  `nursingsemester` varchar(1) NOT NULL,
  `coursename` varchar(100) NOT NULL,
  `credithours` varchar(1) NOT NULL,
  `cwid` varchar(8) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL,
  `starttime` time NOT NULL,
  `endtime` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`crn`, `prefixnumber`, `nursingsemester`, `coursename`, `credithours`, `cwid`, `startdate`, `enddate`, `starttime`, `endtime`) VALUES
('43928', 'NURS 2004', '1', 'Health Assessment', '3', '30020002', '2018-08-20', '2018-12-07', '08:00:00', '11:00:00'),
('43929', 'NURS 2004', '1', 'Health Assessment', '3', '30020003', '2018-08-20', '2018-12-07', '08:00:00', '11:00:00'),
('43930', 'NURS 2004', '1', 'Health Assessment', '3', '30020004', '2018-08-20', '2018-12-07', '08:00:00', '11:00:00'),
('43931', 'NURS 2004', '1', 'Health Assessment', '3', '30020005', '2018-08-20', '2018-12-07', '08:00:00', '11:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` varchar(30) NOT NULL,
  `title` varchar(100) NOT NULL,
  `allday` tinyint(1) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `roomno` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `cwid` varchar(8) NOT NULL,
  `role` varchar(30) NOT NULL,
  `createevent` tinyint(1) NOT NULL,
  `deleteevent` tinyint(1) NOT NULL,
  `modifyevent` tinyint(1) NOT NULL,
  `viewevent` tinyint(1) NOT NULL,
  `addnotes` tinyint(1) NOT NULL,
  `adduser` tinyint(1) NOT NULL,
  `changerole` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `permission`
--

INSERT INTO `permission` (`cwid`, `role`, `createevent`, `deleteevent`, `modifyevent`, `viewevent`, `addnotes`, `adduser`, `changerole`) VALUES
('30020001', 'admin', 1, 1, 1, 1, 1, 1, 1),
('30020002', 'instructor', 1, 1, 1, 1, 1, 0, 0),
('30020003', 'instructor', 1, 1, 1, 1, 1, 0, 0),
('30020004', 'instructor', 1, 1, 1, 1, 1, 0, 0),
('30020005', 'instructor', 1, 1, 1, 1, 1, 0, 0),
('30050001', 'student', 0, 0, 0, 1, 0, 0, 0),
('30050002', 'student', 0, 0, 0, 1, 0, 0, 0),
('30050003', 'student', 0, 0, 0, 1, 0, 0, 0),
('30050004', 'student', 0, 0, 0, 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `roomno` int(11) NOT NULL,
  `capacity` int(11) NOT NULL,
  `seats` int(11) NOT NULL,
  `desks` int(11) NOT NULL,
  `mannequins` int(11) NOT NULL,
  `beds` int(11) NOT NULL,
  `computer` tinyint(1) NOT NULL,
  `av` tinyint(1) NOT NULL,
  `whiteboard` tinyint(1) NOT NULL,
  `noelsimulator` tinyint(1) NOT NULL,
  `icusimulator` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`roomno`, `capacity`, `seats`, `desks`, `mannequins`, `beds`, `computer`, `av`, `whiteboard`, `noelsimulator`, `icusimulator`) VALUES
(242, 55, 55, 0, 0, 0, 1, 1, 1, 0, 0),
(320, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0),
(325, 20, 20, 0, 0, 4, 0, 0, 0, 0, 0),
(327, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `takes`
--

CREATE TABLE `takes` (
  `cwid` varchar(8) NOT NULL,
  `crn` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `takes`
--

INSERT INTO `takes` (`cwid`, `crn`) VALUES
('30050001', '43928'),
('30050002', '43929'),
('30050003', '43930'),
('30050004', '43931');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `cwid` varchar(8) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `mname` varchar(30) DEFAULT NULL,
  `lname` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`cwid`, `fname`, `mname`, `lname`, `email`, `username`, `password`) VALUES
('30020001', 'Sherry', NULL, 'Peveto', 'peveto@ulm.edu', 'peveto', 'peveto123'),
('30020002', 'Kathy', 'S', 'Davenport', 'davenport@ulm.edu', 'davenport', 'davenport123'),
('30020003', 'Ebony', 'Gray', 'Watson', 'ewatson@ulm.edu', 'ewatson', 'ewatson123'),
('30020004', 'Sandra', 'Lee', 'Ogg', 'ogg@ulm.edu', 'ogg', 'ogg123'),
('30020005', 'Kimberley', 'Stites', 'Letson', 'letson@ulm.edu', 'letson', 'letson123'),
('30050001', 'Pratik', NULL, 'Siwakoti', 'siwakop@warhawks.ulm.edu', 'siwakop', 'siwakop123'),
('30050002', 'Ravi', NULL, 'Shrestha', 'shrestr3@warhawks.ulm.edu', 'shrestr3', 'shrest3123'),
('30050003', 'Suyog', 'Bikram', 'Malla', 'mallasb@warhawks.ulm.edu', 'mallasb', 'mallasb123'),
('30050004', 'Thomas', 'James', 'Brumley', 'brumletj@warhawks.ulm.edu', 'brumletj', 'brumletj123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`crn`),
  ADD KEY `cwid` (`cwid`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roomno` (`roomno`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`cwid`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`roomno`);

--
-- Indexes for table `takes`
--
ALTER TABLE `takes`
  ADD PRIMARY KEY (`cwid`,`crn`),
  ADD KEY `crn` (`crn`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`cwid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`cwid`) REFERENCES `user` (`cwid`);

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`roomno`) REFERENCES `room` (`roomno`);

--
-- Constraints for table `permission`
--
ALTER TABLE `permission`
  ADD CONSTRAINT `permission_ibfk_1` FOREIGN KEY (`cwid`) REFERENCES `user` (`cwid`);

--
-- Constraints for table `takes`
--
ALTER TABLE `takes`
  ADD CONSTRAINT `takes_ibfk_1` FOREIGN KEY (`cwid`) REFERENCES `user` (`cwid`),
  ADD CONSTRAINT `takes_ibfk_2` FOREIGN KEY (`crn`) REFERENCES `course` (`crn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
