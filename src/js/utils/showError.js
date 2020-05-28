import { errorMassege, inputSearch } from '../constants/constants';

export default function showError(errorText) {
    errorMassege.textContent = errorText;
    errorMassege.style.boxShadow = '0px 0px 20px 10px #cc2a2a';
    if (window.innerWidth <= 450) {
        errorMassege.style.top = '-25%';
    } else {
        errorMassege.style.top = '100%';
    }
    inputSearch.classList.add('search-form__input_error');
}