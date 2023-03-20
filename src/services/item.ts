import { Car } from "../interface/car.interface";
import ItemModel from "../models/item";

const getCar = async (id: string) => {
  const resitem = await ItemModel.findOne({ _id: id });
  return resitem;
};
const getCars = async () => {
  const resitems = await ItemModel.find({});
  return resitems;
};

const insertItem = async (item: Car) => {
  const resInsert = await ItemModel.create(item);
  return resInsert;
};

const updateCar = async (id: string, data: Car) => {
  const resItem = await ItemModel.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  return resItem;
};

const deleteCar = async (id: string) => {
  const resitem = await ItemModel.findOneAndRemove({ _id: id });
  return resitem;
};

export { getCar, getCars, insertItem, updateCar, deleteCar };
