import React, { Component } from "react";
import { connect } from "react-redux";
// 基础信息编辑器
import BaseEditor from "./BaseEditor";
// 样式配置编辑器
import StyleEditor from "./StyleEditor";
// 数据配置编辑器
import DataEditor from "./DataEditor";

export const FormEditor = (props) => {
  const { canvasCompList, curComponentId, editorType = "base" } = props;
  // 选中组件才有值
  const componentConfig = findComponentConfigById(curComponentId);

  function findComponentConfigById(id) {
    if (id === null) {
      return null;
    }
    const result = canvasCompList.find((item, index) => {
      // 先用index来模拟测试
      return index === curComponentId;
    });
    return result.config;
  }
  return (
    <div className="editor-container">
      {componentConfig && editorType === "base" && (
        <BaseEditor config={componentConfig.baseDataConfig} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // 画布内组件实例列表
    canvasCompList: state.canvasCompList,
    // 当前选中的组件
    curComponentId: state.curComponentId,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FormEditor);
