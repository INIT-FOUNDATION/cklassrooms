import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-experts-team',
  templateUrl: './experts-team.component.html',
  styleUrls: ['./experts-team.component.scss'],
})
export class ExpertsTeamComponent implements OnInit {
  expertTeam: any = [
    {
      id: 1,
      name: 'Ketan Tawde',
      position: 'Solution Architect',
      img: 'ketanTawade',
      githubURL: 'https://github.com/ketan-orrizonte',
      linkedinURL: 'https://www.linkedin.com/in/ketan-tawade-8731832a/',
      bgColor: '#e5dbd2',
      width: '20rem',
      height: '20rem',
    },

    {
      id: 2,
      name: 'Siddhesh Bait',
      position: 'Data Architect',
      img: 'siddheshBait',
      githubURL: 'https://github.com/sid-orrizon',
      linkedinURL: 'https://www.linkedin.com/in/baitsid/',
      bgColor: '#ffc930',
      width: '32rem',
      height: '23rem',
    },

    {
      id: 3,
      name: 'Sudhir Allada',
      position: 'Software Architect',
      img: 'sudhirkumarraoAllada',
      githubURL: 'https://github.com/sudhir-orrizonte',
      linkedinURL: 'https://www.linkedin.com/in/sudhirkumarraoallada/',
      bgColor: '#feb9ce',
      width: ' 20rem',
      height: '19rem',
    },

    {
      id: 4,
      name: 'Narsima Chilkuri',
      position: 'Devops expert',
      img: 'narsimaChilkuri',
      githubURL: 'https://github.com/narsima-orrizonte',
      linkedinURL: 'https://www.linkedin.com/in/narsima-chilkuri-63431a106/',
      bgColor: '#cbd5d4',
      width: '15rem',
      height: '20rem',
    },

    {
      id: 5,
      name: 'Sachin Mogaveera',
      position: 'Frontend Architect',
      img: 'sachinkumarMogaveera',
      githubURL: 'https://github.com/skm-orrizonte',
      linkedinURL:
        'https://www.linkedin.com/in/sachinkumar-mogaveera-02679a148/',
      bgColor: '#30ff5e85',
      width: '20rem',
      height: '20rem',
    },
  ];

  constructor(private $gaService: GoogleAnalyticsService) {}

  ngOnInit(): void {}

  openUrl(url: any, type: string) {
    this.$gaService.event('click', 'Hyperlink', `${type} Url`, url);
    window.open(url, '_blank');
  }
}
