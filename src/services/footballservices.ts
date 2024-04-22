import { faker } from "@faker-js/faker";

export const generatebrazildata = (): FootBallData => {
  const generatefootballdata: FootBallData = {
    country: 'brazil',
    title: faker.number.int({ min: 1000, max: 100000 }),
    runnerup:  faker.number.int({ min: 1000, max: 100000 }),
    ranking: faker.number.int({ min: 1000, max: 100000 }),
  };

  return generatefootballdata;
};


export const generateenglanddata = (): FootBallData => {
  const generatefootballdata: FootBallData = {
    country: 'england',
    title: faker.number.int({ min: 1000, max: 100000 }),
    runnerup:  faker.number.int({ min: 1000, max: 100000 }),
    ranking: faker.number.int({ min: 1000, max: 100000 }),
  };

  return generatefootballdata;
};

export const generategermanydata = (): FootBallData => {
  const generatefootballdata: FootBallData = {
    country: 'germany',
    title: faker.number.int({ min: 1000, max: 100000 }),
    runnerup:  faker.number.int({ min: 1000, max: 100000 }),
    ranking: faker.number.int({ min: 1000, max: 100000 }),
  };

  return generatefootballdata;
};


