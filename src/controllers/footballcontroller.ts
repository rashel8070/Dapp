import { Request, Response } from "express";
import {
generatebrazildata,
generateenglanddata,
generategermanydata,
} from "../services/footballservices.js";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getfootballdata = async (req: Request, res: Response) => {
  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { country } = req.params;
    console.log(country);

    // We will create a variable with a type of WeatherData
    let finalfootballData: FootBallData;

    // We will use an if statement to check which city was passed in
    if (country === "brazil") {
      console.log(generatebrazildata);
      finalfootballData = generatebrazildata();
    } else if (country === "england") {
      console.log(generateenglanddata());
      finalfootballData = generateenglanddata();
    } else if (country === "germany") {
      console.log(generategermanydata);
      finalfootballData = generategermanydata();
    }  else {
      // If the car is not listed above, we will throw an error
      res.status(404).send("Country not found");
    }

    // We will return the weather data as JSON
    res.status(200).json(finalfootballData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in getting country data");
  }
};