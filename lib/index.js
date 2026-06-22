import * as convertors from './convertor/index.js';
import { chaldeanNumerology } from './convertor/name.convertor.js';

export class Numeroljs {
  /**
   * 입력된 날짜를 형식에 맞게 처리한다
   * @param {string} date 예: 1989/05/22(그레고리력) 또는 1368/03/01(페르시아력/잘랄리)
   * @param {string} dateformat jalali | gregorian(기본값)
   * @returns
   */
  handle(date, dateformat = 'gregorian') {
    return convertors[dateformat](date);
  }

  /**
   * 이름을 칼데아(Chaldean) 수비학 숫자로 변환한다
   * @param {string} name 예: Ali Aghapour 또는 John Smith
   * @returns
   */
  convertName(name) {
    return chaldeanNumerology(name);
  }
}

/**
 * @deprecated
 */
export const inPersian = convertors['jalali'];

/**
 * @deprecated
 */
export const calculateNumerology = convertors['gregorian'];
