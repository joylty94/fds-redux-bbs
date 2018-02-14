import * as firebase from 'firebase';

export const READING = 'article/READING';
export const SUCCESS = 'article/SUCCESS';
export const ERROR = 'article/ERROR';

// 액션
export function articleREADING() {
  return {
    type: READING,
  };
}

export function articleSuccess() {
  return {
    type: SUCCESS,
  };
}

export function articleError(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

const initialState = { // 초기 상태
  reading: false,
  success: false,
  errorMessage: '',
};


// 리듀서
export default function (state = initialState, action) {
  switch (action.type) {
    case READING:
      return {
        READING: true,
        success: false,
        errorMessage: '',
      };
    case SUCCESS:
      return {
        READING: false,
        success: true,
        errorMessage: '',
      };
    case ERROR:
      return {
        READING: false,
        success: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

export const readArticle = () => async (dispatch) => {
  const { currentUser } = firebase.auth();
  if (!currentUser) { // currentUser가 null면 종료.
    return;
  }
  dispatch(articleREADING()); // 데이터 생성이 완료 됐을 떄,
  try {
    const articleRef = firebase.database().ref('articles').once('value');
    const contentPromise = firebase.database().ref(`contents/${articleRef.key}`).once('value');
    await Promise.all([articleRef, contentPromise]);
    dispatch(articleSuccess()); // 테이터 저장이 완료 됐을 떄,
  } catch (e) {
    dispatch(articleError(`알 수 없는 에러가 발생했습니다. 다시 시도해 주세요: ${e.message} `));
  }
};
