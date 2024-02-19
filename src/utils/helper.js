import { differenceInYears, parseISO } from "date-fns";

// Calculate the current age based on the birth date
export const calculateCurrentAge = (birthDate) => {
  return differenceInYears(new Date(), parseISO(birthDate));
};

// Calculates the age of the person 10 years from now using date-fns library
export const calculateAgeInTenYears = (birthDate) => {
  const today = new Date();

  const futureDate = new Date(
    today.getFullYear() + 10,
    today.getMonth(),
    today.getDate()
  );

  return differenceInYears(futureDate, parseISO(birthDate));
};

// Filter data by gender
export const filterDataByGender = (gender, data) => {
  return data.filter((item) => item.gender === gender);
};

// Filter data by generation
export const filterDataByGeneration = (generation) => {
  return ageData.filter((age) => classifyAge(age) === generation);
};

// Classify age into generations
export const classifyAge = (age) => {
  if (age >= 0 && age <= 24) {
    return "Gen Z";
  } else if (age >= 25 && age <= 40) {
    return "Millenial";
  } else {
    return "Baby Boomer";
  }
};
