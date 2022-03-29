export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '방구',
    },
    content: '첫 번째 게시글 #첫번째 #게시글\n'
      + '#두번째 ###세번째\n'
      + '#이어서#씁니다#ㅋㅋㅋ## #야야야',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }],
    Comments: [{
      User: {
        nickname: '포켓몬스터',
      },
      content: '우와 개정판이 나왔군요~',
    }, {
      User: {
        nickname: '디지몬',
      },
      content: '얼른 사고싶어요~',
    }],
  }],
  imagePaths: [],
  postAdded: false,
  // liked: false,
};

export const ADD_POST = 'ADD_POST';
export const addPostAction = () => {
  console.log('aaa');
  return {
    type: ADD_POST,
  };
};

export const ADD_COMMENT = 'ADD_COMMENT';
export const addCommentAction = () => {
  console.log('aaa');
  return {
    type: ADD_COMMENT,
  };
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    case ADD_COMMENT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
