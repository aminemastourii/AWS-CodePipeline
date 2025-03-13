export async function handler(event: any, context: any) {
    console.log('Stage Name is:', process.env.stage ?? 'Not Set');
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Amine Mastouri exploring CodePipeline' }),
    };
  }
  