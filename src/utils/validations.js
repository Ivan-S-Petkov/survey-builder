function validLabel(label) {
  return label.length > 0;
}

function validDefaultValue(defaultValue) {
  return defaultValue.trim().length > 0;
}

function validChoice(choice) {
  return choice.trim().length > 0;
}

function isUniqueChoice(choice, choices) {
  return !choices.includes(choice.trim());
}

function validateChoicesLength(choices) {
  return choices.length <= 50;
}
export {
  validLabel,
  validDefaultValue,
  validChoice,
  isUniqueChoice,
  validateChoicesLength,
};
