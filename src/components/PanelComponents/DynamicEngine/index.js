import React from "react";
import { connect } from "react-redux";
import loadable from "@loadable/component";

export const DynamicFunc = (componentName) => {
  let Component;
  Component = loadable(() =>
    import(`@/components/ReportEditorComponents/${componentName}`)
  );
  return Component;
};

export const DynamicEngine = (props) => {
  const { componentName, config } = props;
  const Component = DynamicFunc(componentName);
  return <Component {...config} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DynamicEngine);
