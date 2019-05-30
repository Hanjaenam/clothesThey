export const initialState = {
  showUploadBoard: false,
};

const TOGGLE_SHOW_UPLOAD_BOARD = 'TOGGLE_SHOW_UPLOAD_BOARD';
export const toggleShowUploadBoard = () => ({
  type: TOGGLE_SHOW_UPLOAD_BOARD,
});

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_UPLOAD_BOARD:
      return {
        ...state,
        showUploadBoard: !state.showUploadBoard,
      };
    default:
      return state;
  }
};
