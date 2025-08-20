export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ ok: false, error: 'Method Not Allowed' })
  }
  try {
    const { name, email, message } = request.body || {}
    if (!name || !email || !message) {
      return response.status(400).json({ ok: false, error: 'Missing required fields' })
    }
    console.log('CONTACT_FORM', { ...request.body, receivedAt: new Date().toISOString() })
    return response.status(200).json({ ok: true })
  } catch (e) {
    return response.status(500).json({ ok: false, error: 'Server error' })
  }
}


