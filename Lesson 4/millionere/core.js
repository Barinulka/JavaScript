let game = {
    /**
     * Запускает игру.
     */
    run() {
        // Обновляем счетчики
        config.correct = 0;
        config.money = 0;

        // Перебираем объект с вопросами и задаем их пользователю в цикле
        for(let i = 0; i < questions.length; i++) {
            do {
                var ok = false;
                var quest = prompt(questions[i].question + "\n" + questions[i].a + "\n" + questions[i].b + "\n" +
                    questions[i].c + "\n" + questions[i].d + "\n'e' чтобы сдаться");

                ok = game.isAnswer(quest);
            } while(!ok);

            // Сравниваем ответ пользователя с верным и считаем колличество верных ответов
            let answer = questions[i].rightСhoice;
            console.log(answer);
            if (quest == answer) {
                config.correct++;
                if(i < 2) {
                    config.money += 200;
                } else {
                    config.money += 400;
                }
                alert(`Правильно, вы заработали ${config.money}  монет`);
            } else if (quest == 'e') {
                alert(`Вы сдались, правильный ответ был: ${questions[i][answer]}`);
                break;
            } else {
                alert(`Вы ответили неправильно, правильный ответ был: ${questions[i][answer]}`);
                break;
            }
        }

        alert(`Игра окончена, количество правильных ответов ${config.correct} \nВы заработали ${config.money} монет`);
    },

    isAnswer(quest) {
        if (!isNaN(quest) || (quest != 'a' && quest != 'b' && quest != 'c' && quest != 'd' && quest != 'e' )) {
           alert('Введите вариант ответа a, b, c или d');
           return false;
       }
       return true;
    }
}
