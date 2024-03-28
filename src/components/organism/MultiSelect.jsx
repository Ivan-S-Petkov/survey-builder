import React from "react";
import styled from "styled-components";
import Type from "../atoms/Type";
import AddChoice from "../atoms/AddChoice";
import Order from "../atoms/Order";
import Actions from "../molecules/Actions";
import List from "../atoms/List";
import TextInput from "../atoms/TextInput";
import { useMultiSelect } from "../../hooks/useMultiSelect";

function MultiSelect() {
  const {
    label,
    labelHandler,
    choice,
    choiceHandler,
    defaultValue,
    defaultValueHandler,
    required,
    requiredHandler,
    choices,
    displayAlpha,
    displayAlphaHandler,
    addChoice,
    removeChoice,
    clearForm,
    cancelForm,
    saveForm,
  } = useMultiSelect();

  return (
    <Wrapper>
      <TextInput
        text="Label:"
        value={label}
        placeholder="Question label"
        handleInput={labelHandler}
      />
      <Type
        type="Multiselect"
        required={required}
        clickHandler={requiredHandler}
      />
      <TextInput
        text="Default Value:"
        value={defaultValue}
        handleInput={defaultValueHandler}
      />
      <AddChoice
        choice={choice}
        choiceHandler={choiceHandler}
        addChoice={addChoice}
      />
      {choices.length > 0 ? (
        <List choices={choices} removeChoice={removeChoice} />
      ) : (
        <></>
      )}
      <Order
        displayAlpha={displayAlpha}
        displayAlphaHandler={displayAlphaHandler}
      />
      <Actions save={saveForm} clear={clearForm} cancel={cancelForm} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 75%;
  margin: 0 auto;
`;

export default MultiSelect;
