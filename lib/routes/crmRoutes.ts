import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

        // Contact
        app.route('/contact')
          // GET, POST endpoint
          // Get all contacts
          .get(this.contactController.getContacts)
          // Create new contact
          .post(this.contactController.addNewContact)

        // Contact detail
        // get specific contact
        app.route('/contact/:contactId')
          // Get a single contact detail
          .get(this.contactController.getContactWithID)
          // Update a contact
          .put(this.contactController.updateContact)
          // Delete a contact
          .delete(this.contactController.deleteContact)
    }
}