import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "../provider/ErrorProvider";
import {
  isUniqueChoice,
  validChoice,
  validDefaultValue,
  validLabel,
  validateChoicesLength,
} from "../utils/validations";
import { postForm } from "../api/mocky";

function useMultiSelect() {
  const [label, setLabel] = useState("");
  const [choice, setChoice] = useState("");
  const [choices, setChoices] = useState([]);
  const [defaultValue, setDefaultValue] = useState("");
  const [required, setRequired] = useState(false);
  const [displayAlpha, setdDisplayAlpha] = useState(false);
  const navigate = useNavigate();
  const { error, addError } = useContext(ErrorContext);

  useEffect(() => {
    setLabel(localStorage.getItem("label") || "");
    setChoice(localStorage.getItem("choice") || "");
    setChoices(localStorage.getItem("choices")?.split(",") || "");
    setDefaultValue(localStorage.getItem("defaultValue") || "");
    setRequired(localStorage.getItem("required") === "true" ? true : false);
    setdDisplayAlpha(
      localStorage.getItem("displayAlpha") === "true" ? true : false
    );
  }, []);

  function labelHandler(label) {
    setLabel(label);
    localStorage.setItem("label", label);
  }

  function choiceHandler(choice) {
    setChoice(choice);
    localStorage.setItem("choice", choice);
  }

  function addChoice(value) {
    value = value || choice;

    // Check if the new choice already exists
    if (isUniqueChoice(value, choices)) {
      // Check if the new choice is empty
      if (validChoice(value)) {
        // Check if it already reached the limit of 50 choices
        if (validateChoicesLength(choices)) {
          setChoices([...choices, value]);
          setChoice("");
          localStorage.setItem("choices", [...choices, value]);
          localStorage.setItem("choice", "");
        } else {
          addError("You reached maximum number of choices!");
        }
      } else {
        addError("Please specify choice!");
      }
    } else {
      addError("This choice already exists!");
    }
  }

  function removeChoice(choice) {
    let newArr = [...choices];
    newArr.splice(choices.indexOf(choice), 1);
    setChoices(newArr);
    localStorage.setItem("choices", newArr);
  }

  function defaultValueHandler(defaultValue) {
    setDefaultValue(defaultValue);
    localStorage.setItem("defaultValue", defaultValue);
  }

  function requiredHandler(required) {
    setRequired(required);
    localStorage.setItem("required", required);
  }

  function displayAlphaHandler(displayAlpha) {
    if (displayAlpha === "true") {
      setdDisplayAlpha(true);
      localStorage.setItem("displayAlpha", true);
    } else {
      setdDisplayAlpha(false);
      localStorage.setItem("displayAlpha", false);
    }
  }

  function cancelForm() {
    navigate(-1);
  }

  function clearForm() {
    setLabel("");
    setChoice("");
    setChoices([]);
    setDefaultValue("");
    setRequired(false);
    setdDisplayAlpha(false);
    localStorage.clear();
  }

  function saveForm() {
    // Defining new variable as choices might change if default value is not part of the list.
    let finalChoices = [...choices];

    // Check if label is specified
    if (!validLabel(label)) {
      addError("Label field is mandatory!");
      return false;
    }

    // Check if default value is specifified
    if (!validDefaultValue(defaultValue)) {
      addError("Default value is missing!");
      return false;
    }

    // Add default value to choices in case it does not exist
    if (!choices.includes(defaultValue.trim())) {
      if (validateChoicesLength(choices)) {
        addChoice(defaultValue);
        finalChoices = [...choices, defaultValue];
      } else {
        addError(
          "The default value is not part of the choice list and you reached maximum number of choices!"
        );
        return false;
      }
    }
    if (!error) {
      let formObject = {
        label,
        choices: finalChoices,
        default: defaultValue,
        required,
        displayAlpha,
      };

      const data = JSON.stringify(formObject);
      postForm(data)
        .then((response) => {
          console.log(response.status, response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(formObject);
    }
  }

  return {
    label,
    labelHandler,
    choice,
    choiceHandler,
    choices,
    defaultValue,
    defaultValueHandler,
    required,
    requiredHandler,
    displayAlpha,
    displayAlphaHandler,
    addChoice,
    removeChoice,
    clearForm,
    cancelForm,
    saveForm,
  };
}

export { useMultiSelect };
