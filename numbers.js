const validateString = (input) => {
  if (typeof input !== "string" || input.trim() === "") {
    return false;
  }
  return true;
};

const transformedNumber = (input) => {
  if (!validateString(input)) {
    return;
  }
  const cleanedInput = input.replace(/[^0-9.-]/g, "").trim();
  if (cleanedInput === "") {
    return;
  }
  const number = parseFloat(cleanedInput);
  if (Number.isFinite(number)) {
    return number;
  }
};

export const cleanNumbers = (numbers) => {
  return numbers.reduce((cleanedNumbers, inputNumber) => {
    const number = transformedNumber(inputNumber);
    if (number !== undefined) {
      cleanedNumbers.push(number);
    }
    return cleanedNumbers;
  }, []);
};
