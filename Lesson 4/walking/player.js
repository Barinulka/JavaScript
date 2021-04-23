/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: 0,
    y: 0,

    /**
     * Двигает игрока по переданному направлению.
     * @param {{x: int, y: int}} nextPoint Следующая точка пользователя.
     */
    move(nextPoint) {
        if (nextPoint.x > config.colsCount - 1) {
            this.x = config.colsCount - 1;
        } else if (nextPoint.x < 0) {
            this.x = 0;
        } else {
            this.x = nextPoint.x;
        }

        if (nextPoint.y > config.rowsCount - 1) {
            this.y = config.rowsCount - 1;
        } else if (nextPoint.y < 0) {
            this.y = 0;
        } else {
            this.y = nextPoint.y;
        }

    },
};
