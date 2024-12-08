import { connect } from "mongoose";
import { DB_URI } from "../config/config";

async function dbConnect(): Promise<void> {
  const DBURI = <string>DB_URI;

  await connect(DBURI);
}

export default dbConnect();
