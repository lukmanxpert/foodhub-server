import app from "./app";
import { env } from "./config/env";

const main = async () => {
  try {
    app.listen(env.PORT, () => console.log("App is running at port: ", env.PORT));
  } catch (error) {
    console.error("an error occurred: ", error);
    process.exit(1);
  }
};

main();
