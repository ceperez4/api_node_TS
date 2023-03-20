import { Request, Response } from "express";
import { handleHttp } from "../helpers/error.handle";
import { Car } from "../interface/car.interface";
import { deleteCar, getCar, getCars, insertItem, updateCar } from "../services/item";

export const getItem =async (req: Request, res: Response) => {
  try {
    const id:string = req.params.id;
    const item = await getCar(id);
    const data = item? item : 'NOT_FOUND'
    res.status(200).json(data);
  } catch (error) {
    handleHttp(res, error, "error");
  }
};

export const getItems = async (_req: Request, res: Response) => {
  try {
    const cars = await getCars();
    res.status(200).json(cars);
  } catch (error) {
    handleHttp(res, error, "error");
  }
};

export const postItem = async ({body}: Request, res: Response) => {
  try {
    
    const newItem = await insertItem(body)
    res.status(200).json(newItem);
    
  } catch (error) {
    handleHttp(res, error, "error");
  }
};

export const updateItem = async({params,body}: Request, res: Response) => {
  try {
    const id:string = params.id;
    const data:Car = body;
    const editItem = await updateCar(id,data);
    res.status(200).json(editItem);
    
  } catch (error) {
    handleHttp(res, error, "error");
  }
};

export const deleteItem = async(req: Request, res: Response) => {
  try {
    const id:string = req.params.id;
    const item = await deleteCar(id);
    res.status(200).json(item);
  } catch (error) {
    handleHttp(res, error, "error");
  }
};
