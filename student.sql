-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2021 at 02:49 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `info_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `name` text NOT NULL,
  `mssv` text NOT NULL,
  `ngaysinh` text NOT NULL,
  `email` text NOT NULL,
  `dienthoai` text NOT NULL,
  `tinh` text NOT NULL,
  `xa` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`name`, `mssv`, `ngaysinh`, `email`, `dienthoai`, `tinh`, `xa`) VALUES
('Ngô Đoàn Hửu Linh', 'B181280', '19/02/2000', 'linh@gmail.com', '0965156655', 'An Giang', 'Vĩnh Hậu'),
('Trần Ngọc Hương', 'B1808546', '18/07/2000', 'huong@student.ctu.edu.vn', '0337792288', 'Bến Tre', 'Đại Hòa Lộc'),
('Phạm Vương Linh', 'B1812802', '22/2/2000', 'vuonglinh@gmail.com', '0566489756', 'An Giang', 'Châu Phong'),
('Nguyễn Hữu Khang', 'B1812798', '09/07/2000', 'khang@gmail.com', '0556165161', 'An Giang', 'Phú Vĩnh'),
('Nguyễn Đức Lộc', 'B1812804', '12/12/2000', 'locb18@gmail.com', '0566932559', 'Thái Bình', 'Đông La'),
('Thạch Anh Huy', 'B1812797', '21/11/2000', 'huyb181@gmail.com', '0254789462', 'Sóc Trăng', 'Vĩnh Châu'),
('Trần Văn A', 'B1546789', '25/2/2000', 'A@gmail.com', '0522632589', 'Kiên Giang', 'abc'),
('Nguyễn Văn B', 'B1689789', '26/3/2000', 'B@gmail.com', '0689745685', 'Bến Tre', 'Đại Hòa Lộc'),
('Đinh Văn C', 'B1812569', '18/02/2000', 'C@gmail.com', '0456789123', 'Cần Thơ', '123'),
('Trần Thành Công', 'B1856489', '19/5/2000', 'Cong@gmail.com', '0564897523', 'Cà Mau', 'xyz'),
('Nguyễn Văn E', 'B1856742', '25/3/2000', 'E@gmail.com', '0568745896', 'Bạc Liêu', 'qwert'),
('Ngô Văn X', 'B1896535', '18/5/2000', 'X@gmail.com', '0562489523', 'Tiền Giang', 'hjk');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
