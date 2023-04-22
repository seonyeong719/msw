import { rest } from "msw";
import { listMock } from "../../datas/list.data";

// Post
export const addList = rest.post("/api/list", async (req, res, ctx) => {
  let name;
  let number;

  listMock.push(req.body);

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

// Get
export const readList = rest.get("/api/list", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(listMock));
});

//Put
// export const updateList = rest.put("/api/list", async (req, res, ctx) => {
//   let name;
//   let number;
//   let state;

//   await req.json().then((data) => {
//     name = data.name;
//     number = data.number;
//     state = data.state;
//   });

//   return res(
//     ctx.status(200),
//     ctx.json({
//       name,
//       number,
//       state,
//     })
//   );
// });
