import { errorMassege, inputSearch } from '../constants/constants';

export default function hideError() {
    errorMassege.style.top = '0%';
    errorMassege.style.boxShadow = 'none';
    setTimeout(() => {
        errorMassege.textContent = '';
    }, 300);
    inputSearch.classList.remove('search-form__input_error');
}