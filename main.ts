import { Application } from "./deps.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Deno from docker!";
});

await app.listen({ port: 8080 });
