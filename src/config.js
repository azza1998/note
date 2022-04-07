// Read environment variables
import { config } from "dotenv";
config();

const configurations = {
  PORT: process.env.PORT || 4000,
  MONGODB_URI: `mongodb://mongo:password@mongodb:27017/notes-app
  }`,
};

export default configurations;
