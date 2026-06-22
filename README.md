# NumerolJS

> 이 저장소는 molpass가 포크한 사본입니다. 영어 원문은 [README.en.md](./README.en.md)를 참고하세요.

생년월일을 수비학(numerology) 숫자로 변환하는 라이브러리입니다. 생년월일의 숫자처럼 수(數)와 그것이 인간사에 미친다고 여겨지는 영향을 연구하는 데 사용할 수 있습니다.



## 설치

npm 사용자:

```shell
npm i numeroljs
```

yarn 사용자:

```shell
yarn add numeroljs
```

## 사용법

페르시아력(jalali) 또는 그레고리력 날짜로 계산에 사용할 수 있으며, 알맞은 방식으로 알아서 변환합니다.

``` javascript
var numerol = require('numeroljs');

const numerolInstance = new numerol.Numeroljs();

numerolInstance.handle('1989/05/22'); // 9
numerolInstance.handle('1368/04/07', 'jalali'); // 7
```

미국식 날짜 형식으로도 작성할 수 있습니다.
또한 두 가지 날짜 구분자('/' 또는 '-')를 모두 사용할 수 있습니다.


``` javascript
import { Numeroljs } from 'numeroljs';

const numerolInstance = new Numeroljs();

console.log(numerolInstance.handle('1989-22-05')); // 9
console.log(numerolInstance.handle('1368-04-07', 'jalali')); // 7
```


convertName 메서드를 사용하면 이름의 칼데아(Chaldean) 수비학 숫자를 계산할 수 있습니다.


``` javascript
import { Numeroljs } from '../../lib/index.js';

const numerolInstance = new Numeroljs();


console.log(numerolInstance.convertName('John Doe')); // 7
```



## 라이선스

[MIT](LICENSE)
