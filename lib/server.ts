// TUTORIAL FOLLOWED
// https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-1-2-195bdaf129cf

import app from "./app";
const PORT: number = 3030;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
