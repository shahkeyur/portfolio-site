export async function POST(req: Request) {
    const formId = process.env.JOTFORM_FORM_ID;
    const apiKey = process.env.JOTFORM_API_KEY;

    const { name, email, message, phone } = await req.json();

    const formData = new FormData();
    formData.append("submission[3]", name);
    formData.append("submission[4]", email);
    formData.append("submission[5]", phone);
    formData.append("submission[7]", message);

    const res = await fetch(`https://api.jotform.com/form/${formId}/submissions?apiKey=${apiKey}`, {
        method: 'POST',
        body: formData
    })
    const data = await res.json()

    if (data.responseCode !== 200) return Response.error()

    return Response.json({ data })
}