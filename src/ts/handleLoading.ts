import { $ } from './dom';
const questionDOM = $('.questionsDOM');

export const handleLoading = {
  loading: () => {
    questionDOM!.innerHTML = `<img class="loading" src="loading.svg">`;
  },
  error: () => {
    questionDOM!.innerHTML = '<img class="error loading" src="error.svg">';
  },
};
