'use strict';

import { Numeroljs } from '../../lib/index.js';



/**
 * 새 인터페이스 사용 예시:
 */
const numerolInstance = new Numeroljs();

numerolInstance.handle('1989/01/06');
numerolInstance.handle('1371/08/03', 'jalali');

numerolInstance.convertName('John Doe');