import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://ogonzalez:Heribertogdl11@cluster0.oexolht.mongodb.net/test";
