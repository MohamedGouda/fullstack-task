import { ContactsService } from './contacts.service';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(contactDto: any): Promise<import("./contacts.schema").Contact>;
    findAll(page?: number, pageSize?: number): Promise<{
        contacts: import("./contacts.schema").Contact[];
        total: number;
    }>;
    update(id: string, contactDto: any): Promise<import("./contacts.schema").Contact>;
    delete(id: string): Promise<any>;
    lockContact(id: string, user: string): Promise<import("./contacts.schema").Contact>;
    unlockContact(id: string): Promise<import("./contacts.schema").Contact>;
}
