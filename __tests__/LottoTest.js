import Lotto from '../src/utils/error/type/Lotto.js';

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '6', '7']);
    }).toThrow("[ERROR]");
  });

  test('로또 번호가 입력되지 않으면 예외가 발생한다', () => {
    expect(() => {
      new Lotto(['']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다', () => {
    expect(() => {
      new Lotto(['1', '2', '안녕', '4', '5', '6']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 공백이면 예외가 발생한다', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '']);
    }).toThrow('[ERROR]');
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '5']);
    }).toThrow("[ERROR]");
  });

  test('로또 번호가 1~45 사이가 아니면 예외가 발생한다', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '46']);
    }).toThrow('[ERROR]');
  });
});
