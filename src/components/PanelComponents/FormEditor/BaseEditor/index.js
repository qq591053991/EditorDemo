import React, { useState } from "react";
import { connect } from "react-redux";
import actionType from "@/views/editor/model/actionType";

export const BaseEditor = (props) => {
  const { config, setComponentConfig } = props;
  const [formData, setFormData] = useState({});
  return (
    <div>
      {config.map((item) => {
        return (
          <React.Fragment key={item.key}>
            {
              //后期再封装成antd表单组件
              item.type === "Text" && (
                <div className="form-item">
                  <div className="form-label">{item.name}</div>
                  <div className="form-input">
                    <input
                      type="text"
                      onChange={(e) => {
                        const newFormData = JSON.parse(
                          JSON.stringify(formData)
                        );
                        newFormData[item.key] = e.target.value;
                        setComponentConfig(newFormData);
                      }}
                    />
                  </div>
                </div>
              )
            }
            {item.type === "Number" && (
              <div className="form-item">
                <div className="form-label">{item.name}</div>
                <div className="form-input">
                  <input
                    type="text"
                    onChange={(e) => {
                      const newFormData = JSON.parse(JSON.stringify(formData));
                      newFormData[item.key] = e.target.value;
                      setComponentConfig(newFormData);
                    }}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    setComponentConfig: (formData) => {
      const action = {
        type: actionType.SET_COMPONENT_CONFIG,
        config: formData,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseEditor);
