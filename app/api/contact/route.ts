import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // Basic validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Please enter your name.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Please enter a message.' },
        { status: 400 }
      );
    }

    const scriptUrl =
      process.env.GOOGLE_SHEETS_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL;

    const payload = {
      timestamp: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata',
      }),
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim(),
    };

    if (scriptUrl) {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        redirect: 'follow',
      });

      const responseText = await response.text();

      if (!response.ok || responseText.includes('Script function not found') || responseText.includes('"result":"error"')) {
        console.error('Google Sheets Webhook Error:', responseText);
        return NextResponse.json(
          {
            success: false,
            error: responseText.includes('Script function not found')
              ? 'Google Apps Script error: doPost function is missing or not deployed in Google Sheet.'
              : 'Failed to record response in Google Sheets. Please verify your script deployment.',
          },
          { status: 502 }
        );
      }
    } else {
      console.warn(
        'GOOGLE_SHEETS_SCRIPT_URL is not defined in .env.local. Submission payload received:',
        payload
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
        configured: Boolean(scriptUrl),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
