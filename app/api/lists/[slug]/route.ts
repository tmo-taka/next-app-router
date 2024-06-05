export async function GET(request: Request, { params }: { params: { slug: string } }){
    console.log(request)

    const res = `こんにちは ${params.slug}さん`

    return Response.json({
        status: 200,
        data: {
            message: res
        }
    })
}