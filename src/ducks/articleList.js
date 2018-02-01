import * as firebase from 'firebase';

export const LOADING = 'articleList/LOADING';
export const SUCCESS = 'articleList/SUCCESS';

export function articleListLoading() {
  return {
    type: LOADING,
  };
}

export function articleListSuccess(articles) {
  return {
    type: SUCCESS,
    articles,
  };
}

const initialState = {
  loading: false,
  articles: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        loading: false,
        articles: action.articles,
      };
    default:
      return state;
  }
}

export const fetchArticleList = () => async (dispatch) => {
  dispatch(articleListLoading());
  const snapshot = await firebase.database().ref('articles').once('value');
  const articlesObj = snapshot.val();
  const articles = Object.entries(articlesObj).map(([id, article]) => ({
    ...article,
    id,
    nickName: '이태용', // FIXME
  }));
  dispatch(articleListSuccess(articles));
};

// export function fetchArticleList() {
//   return async function(dispatch) {

//   }
// }
