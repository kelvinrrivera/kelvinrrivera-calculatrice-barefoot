import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Extraer datos del body de la solicitud
    const body = await request.json();
    const { name, email, footType, footWidth, footVolume, ankleType } = body;
    
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Le nom et l\'email sont requis.' },
        { status: 400 }
      );
    }
    
    // Recuperar las variables de entorno para la API de Brevo
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID; // Asumiendo que quieres asignar contactos a una lista
    
    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      return NextResponse.json(
        { error: 'Configuration de l\'API de Brevo absente.' },
        { status: 500 }
      );
    }
    
    // Preparar la URL y datos para la creación/actualización del contacto
    // La URL utilizada es la indicada en la documentación de Brevo (ex-SendinBlue)
    const url = 'https://api.sendinblue.com/v3/contacts';
    
    const data = {
      email,
      attributes: {
        FIRSTNAME: name,
        FOOTTYPE: footType,
        FOOTWIDTH: footWidth,
        FOOTVOLUME: footVolume,
        ANKLETYPE: ankleType
      },
      listIds: [parseInt(BREVO_LIST_ID)],
      updateEnabled: true // Esto permite actualizar el contacto si ya existe
    };
    
    // Realizar la llamada a la API de Brevo
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Erreur lors de l\'inscription.' },
        { status: response.status }
      );
    }
    
    return NextResponse.json(
      { success: true, message: 'Inscription réussie!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Erreur lors du traitement de la demande:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur serveur.' },
      { status: 500 }
    );
  }
}
