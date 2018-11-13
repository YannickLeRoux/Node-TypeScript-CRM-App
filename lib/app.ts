import * as bodyParser from "body-parser";
import * as express from "express";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";

require('dotenv').config()


class App {

    public mongoUrl: string = process.env.MONGO_URL;

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }

}

export default new App().app;
