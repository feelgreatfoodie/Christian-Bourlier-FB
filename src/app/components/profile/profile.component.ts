import { Component, OnInit } from '@angular/core'

import { Profile } from '../../models/Profile'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile: Profile

  constructor() {
  }


  ngOnInit() { 
    this.profile = {
      firstName: 'Christian',
      lastName: 'Bourlier',
      location: 'Boulder  CO',
      specialty: 'Software Developer',
  
      contactInfo: {
        phone: '310.963.5282',
        email: 'ChristianBourlier@gmail.com',
        github: 'https://github.com/feelgreatfoodie',
        linkedIn: 'https://linkedin.com/in/christianbourlier/' 
      }
    }
  }

}
