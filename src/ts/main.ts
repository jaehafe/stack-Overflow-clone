import '../scss/style.scss';
import { $ } from './dom';
import { QuestionList } from './interface/index';
import { Api } from './api';

const showQuestions = (list: QuestionList) => {
  const quesList = list
    .map((question) => {
      const { view_count, answer_count, link: ques_link, title } = question;
      const questionTags = question.tags;

      const {
        profile_image,
        display_name,
        link: profile_link,
      } = question.owner;

      const questionTagTemplate = questionTags
        .map((tag) => {
          return `<li class="main__question-tags-items">${tag}</li>`;
        })
        .join('');

      // create random number for not in the data of fetch api
      const ranNum_votes = Math.floor(Math.random() * 10);
      const ranNum_asked = Math.floor(Math.random() * 60);

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
                        ${questionTagTemplate}
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
  const data = await Api.getAllQuestions();
  showQuestions(data);
};
start();
