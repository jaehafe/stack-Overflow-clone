import { handleLoading } from './handleLoading';
import { QuestionList } from './interface/index';

const BASE_URL = 'https://api.stackexchange.com';
const PATH_URL = '2.3/questions?order=desc&sort=activity&site=stackoverflow';

const HTTP_METHOD = {
  GET() {
    return {
      method: 'GET',
    };
  },
};

const request = async (url: string, option: object) => {
  handleLoading.loading();
  try {
    const res = await fetch(url, option);
    const { items } = await res.json();
    return items;
  } catch (err) {
    console.log(err);
    handleLoading.error();
  } finally {
    handleLoading.error();
  }
};

export const Api = {
  async getAllQuestions(): Promise<QuestionList> {
    return request(`${BASE_URL}/${PATH_URL}`, HTTP_METHOD.GET());
  },
};
