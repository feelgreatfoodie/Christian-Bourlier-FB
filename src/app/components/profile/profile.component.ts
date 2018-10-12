import { Component, OnInit } from '@angular/core'

import { User } from '../../models/User'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: User

  constructor() {
    this.user = {
      firstName: 'Christian',
      lastName: 'Bourlier',
      location: 'Boulder, CO',
      specialty: 'Full Stack Developer',
  
      contactInfo: {
        phone: '310.963.5282',
        email: 'christianbourlier@gmail.com',
        github: 'https://github.com/feelgreatfoodie',
        linkedIn: 'https://linkedin.com/in/christianbourlier/' 
      }
    }
  }


  ngOnInit() { }

}
