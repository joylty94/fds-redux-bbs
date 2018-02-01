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
