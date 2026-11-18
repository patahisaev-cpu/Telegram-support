
export default async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405
    });
  }

  const data = await request.json();
  const number = String(data.number || "");

  if (!/^\d{5}$/.test(number)) {
    return new Response("Invalid demo number", {
      status: 400
    });
  }

  console.log("DEMO TEST:", number, new Date().toISOString());

  return Response.json({
    success: true,
    message: "Demo number received"
  });
};

export const config = {
  path: "/api/log-test"
};
