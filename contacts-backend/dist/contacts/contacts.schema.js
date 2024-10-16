"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ContactSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    notes: { type: String },
    lockedBy: { type: String },
});
//# sourceMappingURL=contacts.schema.js.map