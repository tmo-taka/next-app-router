export async function POST(request: Request) {
	const params = await request.json();
	const judge = (params?.id === process.env.TEST_ID) && (params?.password === process.env.TEST_PASS);

	if(judge) {
		return new Response('Success!',{
			status: 200,
			headers: {
				'Set-Cookie': `SESSION=${process.env.TOKEN}; Max-Age=50000; SameSite=Strict; Path=/;`
			}
		})
	}
	return new Response('Failed...',{
		status: 401,
	})
}
