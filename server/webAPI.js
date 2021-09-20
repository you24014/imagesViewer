// glob
const glob = require('glob');
var Glob = require("glob").Glob
// fs
const fs = require('fs');
// path
const path = require('path');

const express = require('express');
const app = express();
const allowCrossDomain = function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization, access_token'
	)

	// intercept OPTIONS method
	if ('OPTIONS' === req.method) {
		res.send(200)
	} else {
		next()
	}
}
app.use(allowCrossDomain)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/** 
 * /getImages
 * 
 */
app.get('/getImageDirs', function (req, res) {
	basePath = 'images/'
	oldPathInfo = getPathInfo(basePath, 'old/');
	newPathInfo = getPathInfo(basePath, 'new/')
	res.json({ old: oldPathInfo, new: newPathInfo });
});

app.get('/getImageDirs2', function (req, res) {
	dirPath = './images/old'
	const allDirents = fs.readdirSync(dirPath, { withFileTypes: true });
	const fileNames = allDirents.filter(dirent => dirent.isFile()).map(({ name }) => name);
});
app.listen(3000, function () {
});

/**
 * getPathInfo
 * return pathInfo
 */
function getPathInfo(basePath, searchPath) {
	pathInfo = []
	glob(basePath + searchPath + '**/*', { nodir: true }, (err, files) => {
		files.forEach(file => {
			pathInfo.push({
				dirName: path.dirname(file),
				fileName: path.basename(file)
			})
		})
	});
	return pathInfo;
}