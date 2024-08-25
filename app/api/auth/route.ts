export async function POST(request: Request) {
	const params = await request.json();
	const judge = (params?.id === process.env.TEST_ID) && (params?.password === process.env.TEST_PASS);

	if(judge) {
		return new Response('Success!',{
			status: 200,
			headers: {
				'Set-Cookie': 'SESSION=dafafatgdhs'
			}
		})
	}
	return new Response('Failed...',{
		status: 401,
	})
}
