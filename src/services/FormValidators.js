const checkInput = (formName, submitBtnId) => {
  let formElements = document.forms[formName].elements;
  let canSubmit = true;
  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].value.length == 0) {
      canSubmit = false;
    }
  }
  document.getElementById(submitBtnId).disabled = !canSubmit;
};
const passwordMatchMsg = (errors, errorShow) => {
  if (errorShow.passwdError) {
    return errorShow.passwdError;
  }
  return errors.password[0];
};
const Validators = {
  checkInput,
  passwordMatchMsg,
};
export default Validators;
