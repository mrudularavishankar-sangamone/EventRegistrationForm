
export async function registerParticipant(formData) {
  try {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to register participant');
    }

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
