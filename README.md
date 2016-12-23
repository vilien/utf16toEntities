# utf16toEntities
将utf16编码的emoji表情字符转换为字符实体
```javascript
var utf16toEntities = require('./src/index.js').utf16toEntities;
console.log(utf16toEntities(unescape('%uD83D%uDE0A'))); // &#128522;
```
