
import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() contactDto) {
    return this.contactsService.createContact(contactDto);
  }

  @Get()
  async findAll(@Query('page') page: number = 1, @Query('pageSize') pageSize: number = 5) {
    return this.contactsService.getContacts(page, pageSize);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() contactDto) {
    return this.contactsService.updateContact(id, contactDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.contactsService.deleteContact(id);
  }

  @Put(':id/lock')
  async lockContact(@Param('id') id: string, @Body('user') user: string) {
    return this.contactsService.lockContact(id, user);
  }

  @Put(':id/unlock')
  async unlockContact(@Param('id') id: string) {
    return this.contactsService.unlockContact(id);
  }
}
