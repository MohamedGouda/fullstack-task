
import { Schema, Document } from 'mongoose';

export const ContactSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  notes: { type: String },
  lockedBy: { type: String },
});

export interface Contact extends Document {
  id: string;
  name: string;
  phone: string;
  address: string;
  notes?: string;
  lockedBy?: string;
}
