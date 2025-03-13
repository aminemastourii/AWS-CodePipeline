export async function handler(event: string, context: string) {
    console.log('Stage Name is: ' + process.env.stage);
    return {
      body: 'Amine Mastouri exploring CodePipeline',
      statusCode: 200,
    };
  }