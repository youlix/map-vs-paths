require(['projects/crc', 'projects/mypage', 'office'], function (crc, mypage, office) {
	console.log('CRC requires', crc);
	console.log('Mypage requires', mypage);
	console.log('Office is at', office);
});