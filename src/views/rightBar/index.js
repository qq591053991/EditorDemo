import React, { Component } from "react";
import { connect } from "react-redux";
import FormEditor from "@/components/PanelComponents/FormEditor/index";

export const index = () => {
  return (
    <div>
      <FormEditor />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
