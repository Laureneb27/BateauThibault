import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  user = {
    name: 'John Thibault',
    avatar: 'assets/images/contact/ian-avatar.png',
    description: 'Si vous avez besoin d\'informations complémentaires n\'hésitez pas à me contacter. \n L\'idée vous intéresse ? Devenez partenaire !',
    address: '12 Rue de Cléry, 75002 Paris',
    phone: '+33 12 34 56 78',
    email: 'j.thibault@cfa-insta.fr',
    whatsapp: '555 555 555',
  };

  constructor() { }

  ngOnInit() {
  }

}
