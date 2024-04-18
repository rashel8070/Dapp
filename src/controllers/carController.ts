import { Request, Response } from "express";
import {
generateBmwData,
generateToyotaData,
generateBugattiData,
generateLamborghiniData
} from "../services/carService.js";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getCarData = async (req: Request, res: Response) => {
  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { manufacturer } = req.params;
    console.log(manufacturer);

    // We will create a variable with a type of WeatherData
    let finalCarData: CarsData;

    // We will use an if statement to check which city was passed in
    if (manufacturer === "bmw") {
      console.log(generateBmwData());
      finalCarData = generateBmwData();
    } else if (manufacturer === "toyota") {
      console.log(generateToyotaData());
      finalCarData = generateToyotaData();
    } else if (manufacturer === "bugatti") {
      console.log(generateBugattiData());
      finalCarData = generateBugattiData();
    } else if (manufacturer === "lamborghini") {
      console.log(generateLamborghiniData());
      finalCarData = generateLamborghiniData();
    } else {
      // If the car is not listed above, we will throw an error
      res.status(404).send("Car not found");
    }

    // We will return the weather data as JSON
    res.status(200).json(finalCarData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in getting car data");
  }
};