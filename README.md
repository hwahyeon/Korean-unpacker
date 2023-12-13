# korean-unpacker

- **korean-unpacker**는 한글 문자열을 자음과 모음으로 분리하는 JavaScript 라이브러리입니다.
- **korean-unpacker** is a JavaScript library for decomposing Korean strings into consonants and vowels.

## Installation

```bash
npm install korean-unpacker
```

## Usage
```javascript
const hangul = require('korean-unpacker');

console.log(hangul.unpack('안녕')); // 'ㅇㅏㄴㄴㅕㅇ'
```
OR
```javascript
import hangul from 'korean-unpacker'

console.log(hangul.unpack('안녕')); // 'ㅇㅏㄴㄴㅕㅇ'
```
### 쌍자음
```javascript
console.log(hangul.unpack('까치')); // 'ㄱㄱㅏㅊㅣ'
```
### 겹받침
```javascript
console.log(hangul.unpack('삵')); // 'ㅅㅏㄹㄱ'
```
### 겹모음
```javascript
console.log(hangul.unpack('왜?')); // 'ㅇㅗㅐ?'
```

## API

### `unpack(string)`

- **Parameters**
  - `string` (String): The Korean string to decompose.
- **Returns**
  - (String): The decomposed string into consonants and vowels.

## License
This project is provided under the MIT License.
