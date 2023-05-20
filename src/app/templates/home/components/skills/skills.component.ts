import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  tables = [
     {
      title: 'LANGUAGES',
      tr: [
        {description: 'Javascript', progress: 85},
        {description: 'Typescript', progress: 85},
        {description: 'HTML', progress: 100},
        {description: 'CSS', progress: 100},
        {description: 'Java', progress: 35},
        {description: 'C# & C++', progress: 50},
        {description: 'SQL', progress: 50}
      ]
    },
    {
      title: 'FRAMEWORKS',
        tr: [
          {description: 'Angular', progress: 100},
          {description: 'React', progress: 65},
          {description: 'NgRx / Redux', progress: 75},
          {description: 'Tailwind', progress: 100},
          {description: 'Material UI', progress: 75},
          {description: 'Unity', progress: 50},
          {description: 'Node.JS', progress: 75}
        ]
    },
    {
      title: 'SKILLSET',
        tr: [
          {description: 'GIT', progress: 100},
          {description: 'Rel / Non-rel databases', progress: 65},
          {description: 'API creation / integration', progress: 100},
          {description: 'Single pages APPS', progress: 100},
          {description: 'Micro-Services', progress: 100},
          {description: 'Procedura / Functional / OOP', progress: 85},
        ]
    },
  ]
  constructor() { }

  ngOnInit(): void { }
}
