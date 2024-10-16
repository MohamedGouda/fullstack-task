
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-edit-dialog',
  templateUrl: './contact-edit-dialog.component.html'
})
export class ContactEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactsService: ContactsService
  ) {}

  onSave() {
    this.contactsService.updateContact(this.data._id, this.data).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
