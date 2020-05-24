export default function getMonth() {
    let month = new Date().getMonth();
    switch (month) {
        case 0:
            month = `Январь`;
            break;
        case 1:
            month = `Февраль`;
            break;
        case 2:
            month = `Март`;
            break;
        case 3:
            month = `Апрель`;
            break;
        case 4:
            month = `Май`;
            break;
        case 5:
            month = `Июнь`;
            break;
        case 6:
            month = `Июль`;
            break;
        case 7:
            month = `Август`;
            break;
        case 8:
            month = `Сентябрь`;
            break;
        case 9:
            month = `Ноябрь`;
            break;
        case 10:
            month = `Декабрь`;
            break;
        case 11:
            month = `Январь`;
            break;
    }

    return month;
};
