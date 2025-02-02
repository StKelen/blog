interface IOpts {
  head?: string;
  content: string;
  extendBody?: string;
}

export function renderHTML({ head, content, extendBody }: IOpts) {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vite + React</title>
      ${head ?? ''}
    </head>
    <body>
      <div id="root">${content}</div>
      ${extendBody ?? ''}
    </body>
  </html>
  `.trim();
}
