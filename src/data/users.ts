import { faker } from '@faker-js/faker';

const users = Array.from({ length: 215 }).map(() => {
   return {
      id: faker.number.int({ min: 10000, max: 99999 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email().toLocaleLowerCase(),
   };
});

export default users;
