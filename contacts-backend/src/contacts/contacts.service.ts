
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './contacts.schema';

@Injectable()
export class ContactsService {
  constructor(@InjectModel('Contact') private contactModel: Model<Contact>) {}

  async createContact(contactDto): Promise<Contact> {
    const newContact = new this.contactModel(contactDto);
    return await newContact.save();
  }

  async getContacts(page: number, pageSize: number): Promise<{ contacts: Contact[], total: number }> {
    const contacts = await this.contactModel
      .find()
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .exec();
    const total = await this.contactModel.countDocuments();
    return { contacts, total };
  }

  async updateContact(id: string, contactDto): Promise<Contact> {
    return await this.contactModel.findByIdAndUpdate(id, contactDto, { new: true });
  }

  async deleteContact(id: string): Promise<any> {
    return await this.contactModel.findByIdAndDelete(id);
  }

  async lockContact(id: string, lockedBy: string): Promise<Contact> {
    return await this.contactModel.findByIdAndUpdate(id, { lockedBy }, { new: true });
  }

  async unlockContact(id: string): Promise<Contact> {
    return await this.contactModel.findByIdAndUpdate(id, { lockedBy: null }, { new: true });
  }
}
