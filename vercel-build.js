const fs = require('fs');
const path = require('path');

// 定义CSS文件路径
const cssFilePath = path.join(__dirname, 'style.css');

// 读取CSS文件内容
fs.readFile(cssFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSS file:', err);
    return;
  }

  // 添加注释
  const updatedContent = `/* 202x.x.x 更新 */\n${data}`;

  // 写回更新后的内容到CSS文件
  fs.writeFile(cssFilePath, updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to CSS file:', err);
    } else {
      console.log('CSS file updated successfully.');
    }
  });
});