import Lotto from '../../../utils/error/type/Lotto.js';
import printError from '../../../utils/error/print_error.js';
import Question from '../../../utils/input/question.js';
import userInput from '../../../utils/input/user_input.js';

class WinningLottoManage {
  #randomLotto;
  #winningNum = null;
  #bonusNum = null;

  constructor(RANDOM_LOTTO) {
    this.#randomLotto = RANDOM_LOTTO;
  }

  async inputWinningNum() {
    this.#winningNum = await userInput(Question.winningNum());
    this.#winningNum = this.#winningNum.split(',');
  }

  async #checkWinningNum() {
    try {
      new Lotto(this.#winningNum);
    } catch (error) {
      printError(error);
      await this.inputWinningNum();
    }
  }
}

export default WinningLottoManage;
