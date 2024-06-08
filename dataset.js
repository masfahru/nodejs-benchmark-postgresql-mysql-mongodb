import { faker } from "@faker-js/faker";

const data = [];

const generateEmail = (first_name, last_name) => {
  const email = faker.internet.email({
    firstName: first_name,
    lastName: last_name,
    allowSpecialCharacters: true,
  });
  // make sure email is unique
  if (data.find((user) => user.email === email)) return generateEmail(first_name, last_name);
  return email;
};

/**
 * Generate 50000 fake data
 * with this schema:
 * first_name, last_name, email, password, age, gender, created_at, updated_at
 * @returns {Array} fake data
 */
export const generateFakeData = (num) => {
  if (data.length) return data;
  for (let i = 0; i < num; i++) {
    const gender = faker.person.sexType();
    const first_name = faker.person.firstName(gender);
    const last_name = faker.person.lastName(gender);
    const email = generateEmail(first_name, last_name);
    const password = faker.internet.password();
    const age = faker.number.int({ min: 15, max: 35 });
    const created_at = faker.date.recent();
    const updated_at = faker.date.recent();
    data.push({
      first_name,
      last_name,
      email,
      password,
      age,
      gender,
      created_at,
      updated_at,
    });
  }
  return data;
};
