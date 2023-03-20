import {Schema,model} from 'mongoose';
import { Car } from '../interface/car.interface';

const ItemSchema = new Schema<Car>({
    color:{
        type:String,
        required:true,
    },
    gas:{
        type:String,
        enum:['gasoline','electric'], //*Estable cuales son los valores permitidos
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }


},{
    timestamps:true,
    versionKey:false,
})

const ItemModel = model<Car>('items',ItemSchema);

export default ItemModel;