import { faker } from "@faker-js/faker";
export const generatebrazildata = () => {
    const generatefootballdata = {
        country: 'brazil',
        title: faker.number.int({ min: 1000, max: 100000 }),
        runnerup: faker.number.int({ min: 1000, max: 100000 }),
        ranking: faker.number.int({ min: 1000, max: 100000 }),
    };
    return generatefootballdata;
};
export const generateenglanddata = () => {
    const generatefootballdata = {
        country: 'england',
        title: faker.number.int({ min: 1000, max: 100000 }),
        runnerup: faker.number.int({ min: 1000, max: 100000 }),
        ranking: faker.number.int({ min: 1000, max: 100000 }),
    };
    return generatefootballdata;
};
export const generategermanydata = () => {
    const generatefootballdata = {
        country: 'germany',
        title: faker.number.int({ min: 1000, max: 100000 }),
        runnerup: faker.number.int({ min: 1000, max: 100000 }),
        ranking: faker.number.int({ min: 1000, max: 100000 }),
    };
    return generatefootballdata;
};
//# sourceMappingURL=footballservices.js.map