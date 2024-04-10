import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exprts-team',
  templateUrl: './exprts-team.component.html',
  styleUrls: ['./exprts-team.component.scss'],
})
export class ExprtsTeamComponent implements OnInit {
  expertTeam: any = [
    {
      id: 3,
      projects: 20,
      experience: 5,
      skills: 15,
      name: 'Ketan Tawde',
      position: 'Solution Architect',
      img: 'ketan',
      githubURL: 'https://github.com/ketanwork',
      linkedinProfile:'https://www.linkedin.com/in/ketan-tawade-8731832a/',
      bgColor: '#e5dbd2',
    },

    {
      id: 4,
      projects: 20,
      experience: 5,
      skills: 15,
      name: 'Siddhesh Bait',
      position: 'Data Architect',
      img: 'siddhesh',
      githubURL: 'https://github.com/sidbait',
      linkedinProfile: 'https://www.linkedin.com/in/baitsid/',
      bgColor: '#ffc930',
    },

    {
      id: 1,
      name: 'Sudhir Allada',
      position: 'Software Architect',
      img: 'sudhir',
      githubURL: 'https://github.com/Sudhirkumarrao',
      linkedinProfile: 'https://www.linkedin.com/in/sudhirkumarraoallada/',
      bgColor: '#feb9ce',
    },

    {
      id: 2,
      projects: 20,
      experience: 5,
      skills: 15,
      name: 'Narsima Chilkuri',
      position: 'Dev ops expert',
      img: 'narsima',
      githubURL: 'https://github.com/narsimachilkuri45',
      linkedinProfile: 'https://www.linkedin.com/in/narsima-chilkuri-63431a106/',
      bgColor: '#cbd5d4',
    },

    {
      id: 5,
      projects: 20,
      experience: 5,
      skills: 15,
      name: 'Sachin Mogaveera',
      position: 'Technical Lead',
      img: 'sachin',
      githubURL: 'https://github.com/sachinmogaveera',
      linkedinProfile: 'https://www.linkedin.com/in/sachinkumar-mogaveera-02679a148/',
      bgColor: '#30ff5e85',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
