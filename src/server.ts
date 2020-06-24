// src/server.ts
import { app } from "./app";

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`uni-resolver-driver-did-trust app listening at :${port}`)
);