-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 07 月 13 日 14:39
-- 服务器版本: 5.5.38
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `newsid` int(100) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(100) NOT NULL,
  `newscon` varchar(300) NOT NULL,
  `newsimg` varchar(500) NOT NULL,
  `time` date NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=MyISAM  DEFAULT CHARSET=gbk COMMENT='news' AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newscon`, `newsimg`, `time`) VALUES
(1, '习近平：坚定不移推进供给侧结构性改革', '习近平：坚定不移推进供给侧结构性改革', 'img/f2deb48f8c5494eeca66681c25f5e0fe99257e6a.jpg', '2016-07-13'),
(2, 'Pokémon火爆后的尴尬中国', 'Pokémon火爆后的尴尬中国', 'http://g.hiphotos.baidu.com/news/w%3D638/sign=a3f931112034349b74066d86f1eb1521/d1a20cf431adcbeff0ddae0da4af2edda2cc9fd4.jpg', '2016-07-13'),
(3, 'papi酱全网直播 数据看直播平台哪家强', 'papi酱全网直播 数据看直播平台哪家强', 'http://g.hiphotos.baidu.com/news/q%3D100/sign=6be303f6d9c8a786b82a4e0e5708c9c7/d833c895d143ad4b9fefe5cc8a025aafa50f06fc.jpg', '2016-07-13'),
(4, '谁杀死了知更鸟——2016年欧洲杯综述', '谁杀死了知更鸟——2016年欧洲杯综述', 'http://a.hiphotos.baidu.com/news/crop%3D0%2C1%2C548%2C329%3Bw%3D638/sign=23e01fea6ad9f2d3345e7eaf94dca622/30adcbef76094b36f4bb3be6abcc7cd98d109d8b.jpg', '2016-07-13');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
