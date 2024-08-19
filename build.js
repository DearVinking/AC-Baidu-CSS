const fs = require('fs');
const path = require('path');

const cssFilePath = path.join(__dirname, 'style.css');
const comment = '/* 202x.x.x 更新 */\n';

fs.readFile(cssFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSS file:', err);
    return;
  }
  // 检查文件是否已经有这个注释，如果没有则添加
  if (!data.startsWith(comment)) {
    fs.writeFile(cssFilePath, comment + data, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to CSS file:', err);
      } else {
        console.log('Comment added successfully.');
      }
    });
  }
});