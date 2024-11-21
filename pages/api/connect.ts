// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const body = req.body;

//   const CHARACTER_LIMIT = 500;

//   if (!body) {
//     return res
//       .status(400)
//       .send({ success: false, error: "Please include the body." });
//   }

//   interface Body {
//     email?: string | undefined;
//     message?: string | undefined;
//   }

//   const { email, message } = body as Body;

//   if (!email || !message) {
//     return res
//       .status(400)
//       .send({ success: false, error: "Please include all the fields." });
//   }

//   if (message.length > CHARACTER_LIMIT) {
//     return res.status(400).send({
//       success: false,
//       error: `You can only have ${CHARACTER_LIMIT} characters.`,
//     });
//   }

//   const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
//     method: "POST",
//     body: JSON.stringify({
//       embeds: [
//         {
//           author: {
//             name: `New message | ${email}`,
//           },
//           description: message,
//           fields: [],
//         },
//       ],
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.status >= 400) {
//     return res.send({ success: false, error: "Something went wrong." });
//   }

//   return res.status(200).send({ success: true });
// }
