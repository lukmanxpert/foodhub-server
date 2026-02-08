import app from "./app";

const port = process.env.PORT;

const main = async () => {
  try {
    app.listen(port, () => console.log("App is running at port: ", port));
  } catch (error) {
    console.error("an error occurred: ", error);
    process.exit(1);
  }
};

main();
