// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="zh-CN" class="transitionNone">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/icons/48.ico" />
          {assets}
        </head>
        <body>
          <div id="app" class="flex h-dvh w-dvw flex-col-reverse lg:flex-row">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
