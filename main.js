import './scss/style.scss';

const $ = (selector) => document.querySelector(selector);

const BASE_URL = 'https://api.stackexchange.com';
const PATH_URL = '2.3/questions?order=desc&sort=activity&site=stackoverflow';

const fetchQuestions = async () => {
  $('.questionsDOM').textContent = `<div class='loading'></div>`;
  try {
    const res = await fetch(`${BASE_URL}/${PATH_URL}`);
    const { items } = await res.json();
    console.log(items);
    return items;
  } catch (err) {
    console.log(err);
    $('.questionsDOM').innerHTML = '<p class="error">there was an error</p>';
  }
};
fetchQuestions();

const showQuestions = (list) => {
  const quesList = list
    .map((question) => {
      const {
        is_answered,
        view_count,
        answer_count,
        link: ques_link,
        title,
      } = question;
      const [...tags] = question.tags;
      const {
        profile_image,
        display_name,
        link: profile_link,
      } = question.owner;

      // create random number for not in the data of fetch api
      const ranNum_votes = Math.floor(Math.random() * 10);
      const ranNum_asked = Math.floor(Math.random() * 60);

      // const tagItem = `<li class="main__question-tags-items">${tags}</li>`;
      // console.log(tags);
      // const displayTag = tags.map((tag) => {
      //   return $('.main__question-tags-list').innerHTML(tagItem);
      // });

      return `<div class="main__question">
              <div class="main__question-container">
                <!-- votes answer views -->
                <div class="main__question-datas">
                  <div id="votes" class="main__question-datas-items votes">
                    ${ranNum_votes} votes
                  </div>
                  <div id="answer" class="main__question-datas-items answer">
                    <div id="answer_count">${answer_count} answer</div>
                  </div>
                  <div id="view_count" class="main__question-datas-items views">
                    ${view_count} views
                  </div>
                </div>
                <div class="main__question-summary">
                  <div class="main__question-title">
                    <h3 id="title">
                      
                      <a id="ques_link" href="${ques_link}">${title}</a>
                    </h3>
                  </div>
                  <!-- tags -->
                  <div class="main__question-tags">
                    <div class="main__question-tags-container">
                      <ul class="main__question-tags-list">
                        <li class="main__question-tags-items">${tags}</li>
                      </ul>
                    </div>
                  </div>
                  <div class="main__question-author-data">
                    <div class="main__question-author-data--name">
                      <!-- <div class="main__question-author-data--profile"> -->

                      <a id="ques_link" href="${profile_link}"><img
                      src="${profile_image}"
                      alt="user profile"
                      class="main__question-author-data--user-profile"
                      id="display_name"
                    />${display_name}</a>
                      
                      
                      <!-- </div> -->
                    </div>
                    <div class="main__question-author-data-asked-number">
                      <strong id="view_count">${view_count}</strong>
                    </div>
                    <div
                      id="ask_time"
                      class="main__question-author-data--asked-time"
                    >
                      asked ${ranNum_asked} min ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
  `;
    })
    .join('');
  $('.questionsDOM').innerHTML = quesList;
};

const start = async () => {
  const data = await fetchQuestions();
  console.log(data);
  showQuestions(data);
};
start();
