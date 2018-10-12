import { Component, OnInit } from '@angular/core'

import { SocialMedia } from '../../models/SocialMedia'

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})

export class SocialMediaComponent implements OnInit {
  socialMedia: SocialMedia

  constructor() { }

  ngOnInit() {
    this.socialMedia = {
      facebook: 'https://facebook.com/chrisbourlier',
      github: 'https://github.com/feelgreatfoodie',
      linkedIn: 'https://linkedin.com/in/christianbourlier/' ,
      twitter: 'https://twitter.com/chrisbourlier'
    }
  }

}
