import { faker } from "@faker-js/faker";
import { storeFootballData } from "../helpers/helpers.js";

export const generatebrazildata = (): FootBallData => {
  const generatefootballdata: FootBallData = {
    country: 'brazil',
    title: faker.number.int({ min: 1, max: 10 }),
    runnerup:  faker.number.int({ min: 1, max: 15 }),
    ranking: faker.number.int({ min: 1, max: 80 }),
  };
  storeFootballData(generatefootballdata).catch(console.error)

  return generatefootballdata;
};


export const generateenglanddata = (): FootBallData => {
  const generatefootballdata: FootBallData = {
    country: 'england',
    title: faker.number.int({ min: 1, max: 10 }),
    runnerup:  faker.number.int({ min: 1, max: 10 }),
    ranking: faker.number.int({ min: 1, max: 80 }),
  };
  storeFootballData(generatefootballdata).catch(console.error)

  return generatefootballdata;
};

export const generategermanydata = (): FootBallData => {
  const generatefootballdata: FootBallData = {
    country: 'germany',
    title: faker.number.int({ min: 1, max: 10 }),
    runnerup:  faker.number.int({ min: 1, max: 10 }),
    ranking: faker.number.int({ min: 1, max: 80 }),
  };
  storeFootballData(generatefootballdata).catch(console.error)

  return generatefootballdata;
};


