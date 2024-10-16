
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ContactsService } from '../services/contacts.service';
import { ContactEditDialogComponent } from '../contact-edit-dialog/contact-edit-dialog.component';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'address', 'notes', 'actions'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private contactsService: ContactsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts(pageIndex = 0, pageSize = 5) {
    this.contactsService.getContacts(pageIndex, pageSize).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.contacts);
      this.dataSource.paginator = this.paginator;
    });
  }

  editContact(contact) {
    const dialogRef = this.dialog.open(ContactEditDialogComponent, {
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadContacts();
      }
    });
  }

  deleteContact(contactId: string) {
    if (confirm('Are you sure to delete this contact?')) {
      this.contactsService.deleteContact(contactId).subscribe(() => {
        this.loadContacts();
      });
    }
  }
}
