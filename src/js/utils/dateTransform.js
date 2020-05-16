export default function dateTransform(date) {
    
    let correctDate = date.split('-');

    correctDate[2] = correctDate[2].replace(/.{10}$/, '');
    let mounth = +correctDate[1];

    switch (mounth) {
        case 1: 
            correctDate[1] = 'января';
            break;
        case 2: 
            correctDate[1] = 'февраля';
            break;
        case 3: 
            correctDate[1] = 'марта';
            break;
        case 4: 
            correctDate[1] = 'апреля';
            break;
        case 5: 
            correctDate[1] = 'мая';
            break;
        case 6: 
            correctDate[1] = 'июня';
            break;
        case 7: 
            correctDate[1] = 'июля';
            break;
        case 8: 
            correctDate[1] = 'августа';
            break;
        case 9: 
            correctDate[1] = 'сентября';
            break;
        case 10: 
            correctDate[1] = 'октября';
            break;
        case 11: 
            correctDate[1] = 'ноября';
            break;
        case 12: 
            correctDate[1] = 'деквбря';
            break;
        default: 
            console.log('Очень странно');    
    }

    correctDate = `${correctDate[2]} ${correctDate[1]}, ${correctDate[0]}`;
    
    return correctDate;
}