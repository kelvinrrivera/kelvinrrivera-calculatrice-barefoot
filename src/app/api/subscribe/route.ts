import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, footType, footWidth, footVolume, ankleType } = body;

    // Validar datos
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nom et email sont requis' },
        { status: 400 }
      );
    }

    // En un entorno real, aquí integrarías con tu servicio de email:
    // - Mailchimp
    // - Sendinblue
    // - GetResponse, etc.
    
    // Ejemplo de llamada a Mailchimp (pseudocódigo)
    /*
    const response = await fetch('https://us-X.api.mailchimp.com/3.0/lists/TU_LIST_ID/members', {
      method: 'POST',
      headers: {
        Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name,
          FOOTTYPE: footType,
          FOOTWIDTH: footWidth,
          FOOTVOL: footVolume,
          ANKLE: ankleType
        },
        tags: ['calculatrice-pied']
      })
    });
    */

    // Para desarrollo, simulamos una respuesta exitosa
    console.log('Datos recibidos:', { name, email, footType, footWidth, footVolume, ankleType });

    // Respuesta exitosa
    return NextResponse.json(
      { success: true, message: 'Inscription réussie!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json(
      { error: 'Erreur lors du traitement de la demande' },
      { status: 500 }
    );
  }
}
