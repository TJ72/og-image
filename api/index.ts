import { Handler } from "@netlify/functions"

export const handler: Handler = async () => {
  console.log(Date.now())
  return {
    statusCode: 200,
    body: 'ok',
  }
}
