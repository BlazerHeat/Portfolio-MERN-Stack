const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose.connect(process.env.DATABASE_URI, options, (err) => {
  if (err) console.error(err);
  else
    console.log(
      "\x1b[32m%s\x1b[0m",
      "Successfully connected to mongo database!"
    );
});
