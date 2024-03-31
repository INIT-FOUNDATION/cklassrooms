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
      name: 'SUDHIR ALLADA',
      positon: 'Data Analyst',
      img: 'sudhirAllada.webp',
      githubURL: 'https://github.com/Sudhirkumarrao',
      instargramURL:
        'https://www.instagram.com/sudhir_allada?igsh=MXhnbHgzamo2bTBrcg==',
    },
    // {
    //   id: 2,
    //   projects: 20,
    //   experience: 5,
    //   skills: 15,
    //   name: 'Narsima Chilkuri',
    //   positon: 'Full Stack/ Dev ops',
    //   img: 'narsimaChilkuri.jpg',
    //   githubURL: 'https://github.com/narsimachilkuri45',
    //   instargramURL:
    //     'https://www.instagram.com/narsimachilkuri?igsh=M2tmNnh1bzB2eGQ3',
    // },
  ];

  constructor() {}

  ngOnInit(): void {}
}
