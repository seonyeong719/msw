import { rest } from "msw";
import { listMock } from "../../datas/list.data";

export const addList = rest.post("/api/list", async (req, res, ctx) => {
  let name;
  let number;

  await req.json().then((data) => {
    name = data.name;
    number = data.number;
  });

  return res(
    ctx.status(200),
    ctx.json({
      id: Math.floor(Math.random() * 100000),
      name,
      number,
      state: false,
    })
  );
});

export const readList = rest.get("/api/list", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(listMock));
});
