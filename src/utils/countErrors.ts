const countErrors = (text: string, userInput: string): number => {
  let errors = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== text[i]) {
      errors = errors + 1;
    }
  }
  return errors;
};

export default countErrors;
