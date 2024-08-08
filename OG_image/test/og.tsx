// import satori from "satori";
// import { Resvg } from "@resvg/resvg-js";
// import { cacheHeader } from "pretty-cache-header";
// import type { LoaderFunctionArgs } from "@remix-run/node";
// import { z } from "zod";
// import queryString from "query-string";

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const schema = z.object({
//     code: z.string(),
//     date: z.string(),
//     image: z.string().url(),
//   });
//   const result = schema.safeParse(
//     queryString.parse(new URL(request.url).search)
//   );
//   if (!result.success) return new Response(null, { status: 404 });

//   const { code, date, image } = result.data;

//   // convert html to svg
//   const svg = await satori(
//     <div className="flex bg-black h-full w-full">
//       <img alt="cover" className="w-full h-full object-cover" src={image} />
//       <h1 className="text-white">{code}</h1>
//       <h1 className="text-white">{date}</h1>
//     </div>,
//     {
//       width: 600,
//       height: 400,

//       fonts: [
//         {
//           name: "Poppins",
//           data: await fetch(
//             "https://github.com/google/fonts/raw/main/ofl/poppins/Poppins-Regular.ttf"
//           ).then((res) => res.arrayBuffer()),
//           weight: 400,
//           style: "normal",
//         },
//       ],
//     }
//   );

//   // render png
//   const resvg = new Resvg(svg, { background: "white" });
//   const pngData = resvg.render();
//   const pngBuffer = pngData.asPng();

//   return new Response(pngBuffer, {
//     headers: {
//       "Cache-Control": cacheHeader({
//         public: true,
//         maxAge: "1year",
//         sMaxage: "1year",
//         staleWhileRevalidate: "1day",
//         staleIfError: "1day",
//       }),
//     },
//   });
// };
