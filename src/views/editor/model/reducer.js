import componentList from "./componentMap";
import actionType from "./actionType";

const defaultState = {
  componentList,
  canvasCompList: [],
  curComponentId: null,
};

const reducer = (state = defaultState, action) => {
  // 深拷贝
  const newState = JSON.parse(JSON.stringify(state));
  console.log(action.type);
  switch (action.type) {
    // 往画布添加组件
    case actionType.ADD_COMPINCANVAS:
      newState.canvasCompList.push(action.componentConfig);
      return newState;
    case actionType.SELECT_COMPONENT:
      newState.curComponentId = action.componentId;
      return newState;
    case actionType.SET_COMPONENT_CONFIG:
      newState.canvasCompList[state.curComponentId].config.config = {
        ...newState.canvasCompList[state.curComponentId].config.config,
        ...action.config,
      };
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default reducer;
