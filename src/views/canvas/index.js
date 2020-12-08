import React from "react";
import { connect } from "react-redux";
import ReportEditorSchema from "@/components/ReportEditorComponents/schema.js";
import DynamicEngine from "@/components/PanelComponents/DynamicEngine";
import actionType from "@/views/editor/model/actionType";
import "./index.css";

const mapStateToProps = (state) => {
  return {
    componentList: state.componentList,
    canvasCompList: state.canvasCompList,
  };
};

export const CanvasContainer = (props) => {
  const { canvasCompList, componentList, selectComponent } = props;
  return (
    <div className="canvas">
      {canvasCompList.length !== 0 &&
        canvasCompList.map((item, index) => {
          return (
            <div
              key={index}
              className="comp"
              onClick={() => {
                selectComponent(index);
              }}
            >
              <DynamicEngine
                key={index}
                config={item.config}
                componentName={item.cmpType}
              />
            </div>
          );
        })}
      画布
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectComponent: (componentId) => {
      const action = {
        type: actionType.SELECT_COMPONENT,
        componentId,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
