export interface Flow {
   presentation: Options
   skills: Options
}

export interface Options {
    textBox : [
      { text: string }
    ],
    table: [
      {
        title: string,
        img: string | null,
        tr: [
          {
            description: string,
            value: string | number
          }
        ]
      }
    ]
}
