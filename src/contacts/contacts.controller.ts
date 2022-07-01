import { Controller, Get } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  @Get()
  myContacts(): string {
    return 'Contacts';
  }
}
