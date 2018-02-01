import reducer, {
  LOADING,
  articleListLoading,
} from './articleList';

describe('articleList', () => {
  it('articleListLoading 동작 여부 확인', () => {
    const action = articleListLoading();
    expect(action).toEqual({ // 깊은 비교 toEqual, 얕은비교 toBe
      type: LOADING,
    });
  });

  it('reducer 초기 상태 테스트', () => {
    const state = reducer(undefined, {});// undefined면 초기값인 initialState 값을 사용한다.
    expect(state.loading).toBe(false);
    expect(state.articles).toEqual([]);
  });

  it('articleListLoading 넘겼을 때의 상태', () => {
    const state = reducer(undefined, articleListLoading());
    expect(state.loading).toBe(true);
    expect(state.articles).toEqual([]);
  });

  it('articleListLoading를 articles가 존재하는 상태에 적용', () => {
    const state = reducer({
      loading: false,
      articles: [1, 2, 3],
    }, articleListLoading());
    expect(state.loading).toBe(true);
    expect(state.articles).toEqual([1, 2, 3]);
  });
});
