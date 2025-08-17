// For App Router (Next.js 13+): app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    const { firstName, lastName, company, role, email, message } = body;
    
    if (!firstName || !lastName || !company || !role || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Submit to Airtable
    const airtableResponse = await fetch(
      'https://api.airtable.com/v0/appiALdFmgtI2q1gn/Leads',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                First_Name: firstName,
                Last_Name: lastName,
                Company: company,
                Role: role,
                Email: email,
                Message: message,
              },
            },
          ],
        }),
      }
    );

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.text();
      console.error('Airtable API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to submit to Airtable' },
        { status: 500 }
      );
    }

    const result = await airtableResponse.json();
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        recordId: result.records[0].id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// =============================================================================

// For Pages Router (Next.js 12 and below): pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse the request body
    const body: ContactFormData = req.body;
    
    // Validate required fields
    const { firstName, lastName, company, role, email, message } = body;
    
    if (!firstName || !lastName || !company || !role || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Submit to Airtable
    const airtableResponse = await fetch(
      'https://api.airtable.com/v0/appiALdFmgtI2q1gn/Leads',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                First_Name: firstName,
                Last_Name: lastName,
                Company: company,
                Role: role,
                Email: email,
                Message: message,
              },
            },
          ],
        }),
      }
    );

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.text();
      console.error('Airtable API error:', errorData);
      return res.status(500).json({ error: 'Failed to submit to Airtable' });
    }

    const result = await airtableResponse.json();
    
    return res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      recordId: result.records[0].id
    });

  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}