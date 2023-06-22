export async function GET(request: Request) {
  return await fetch("http://localhost:3001/books")
    .then(res => res.json())
    .then(respose => {
      return new Response(JSON.stringify(respose), {
        status: 200,
      })
    })
    .catch(function(error) {
      return new Response('ERROR: ' + error.message, {
        status: 400,
      })
    })
}

export async function POST(request: Request) {
  const res = await request.json()
  return await fetch("http://localhost:3001/books", {
    method: "POST",
    headers: { ContentType: 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(res)
  })
    .then(res => res.json())
    .then(respose => {
      return new Response(JSON.stringify(respose), {
        status: 200,
      })
    })
    .catch(function(error) {
      return new Response('ERROR: ' + error.message, {
        status: 400,
      })
    })
}
