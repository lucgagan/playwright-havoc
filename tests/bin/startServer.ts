import { Hono } from "hono";
import { serve } from "@hono/node-server";

export const startServer = (port: number) => {
  const app = new Hono();

  app.get("/", (c) =>
    c.html(`<html>
  <body>
    <h1>Hello, Rayrun!</h1>
  </body>
</html>`)
  );

  return new Promise((resolve) => {
    const server = serve(
      {
        fetch: app.fetch,
        port,
      },
      (info) => {
        resolve({
          close: () => {
            server.close();
          },
          port: info.port,
        });
      }
    );
  });
};

startServer(3000);
