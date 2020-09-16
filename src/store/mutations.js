const mutations = {
  edit(state, playLoad) {
    state.queryCode = playLoad;
  },
  editCode(state, playLoad) {
    state.code = playLoad;
  },
  editHistoryList(state, playLoad) {
    state.historyList = playLoad;
  },
  editPrefix(state, playLoad) {
    state.prefix = playLoad;
  },
};

export default mutations;
