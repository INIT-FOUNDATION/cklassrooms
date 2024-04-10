import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exprts-team',
  templateUrl: './exprts-team.component.html',
  styleUrls: ['./exprts-team.component.scss'],
})
export class ExprtsTeamComponent implements OnInit {
  expertTeam: any = [
    {
      id: 1,
      name: 'Ketan Tawde',
      position: 'Solution Architect',
      img: 'ketan',
      githubURL: 'https://github.com/ketanwork',
      linkedinURL: 'https://www.linkedin.com/in/ketan-tawade-8731832a/',
      bgColor: '#e5dbd2',
    },

    {
      id: 2,
      name: 'Siddhesh Bait',
      position: 'Data Architect',
      img: 'siddhesh',
      githubURL: 'https://github.com/sidbait',
      linkedinURL: 'https://www.linkedin.com/in/baitsid/',
      bgColor: '#ffc930',
    },

    {
      id: 3,
      name: 'Sudhir Allada',
      position: 'Software Architect',
      img: 'sudhir',
      githubURL: 'https://github.com/Sudhirkumarrao',
      linkedinURL: 'https://www.linkedin.com/in/sudhirkumarraoallada/',
      bgColor: '#feb9ce',
    },

    {
      id: 4,
      name: 'Narsima Chilkuri',
      position: 'Dev ops expert',
      img: 'narsima',
      githubURL: 'https://github.com/narsimachilkuri45',
      linkedinURL: 'https://www.linkedin.com/in/narsima-chilkuri-63431a106/',
      bgColor: '#cbd5d4',
    },

    {
      id: 5,
      name: 'Sachin Mogaveera',
      position: 'Technical Lead',
      img: 'sachin',
      githubURL: 'https://github.com/sachinmogaveera',
      linkedinURL:
        'https://www.linkedin.com/in/sachinkumar-mogaveera-02679a148/',
      bgColor: '#30ff5e85',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
