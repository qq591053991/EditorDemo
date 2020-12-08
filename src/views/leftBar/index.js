import React from "react";
import { connect } from "react-redux";
import actionType from "@/views/editor/model/actionType";
import ReportEditorSchema from "@/components/ReportEditorComponents/schema.js";
export const LeftBar = (props) => {
  const { componentList, addComponentInCanvas } = props;
  return (
    <div>
      {componentList.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              addComponentInCanvas({
                cmpType: item.type,
                config: ReportEditorSchema[item.type],
              });
            }}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    componentList: state.componentList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComponentInCanvas: (componentConfig) => {
      const action = {
        type: actionType.ADD_COMPINCANVAS,
        componentConfig,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);
