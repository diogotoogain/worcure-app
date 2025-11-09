import { GoogleGenerativeAI } from '@google/generative-ai'

let geminiClient: GoogleGenerativeAI | null = null

/**
 * Initializes the Gemini client with the provided API key
 * @param apiKey - Google Gemini API key
 */
export function initializeGemini(apiKey: string): void {
  geminiClient = new GoogleGenerativeAI(apiKey)
}

/**
 * Gets the Gemini client instance
 * @throws Error if client is not initialized
 */
function getClient(): GoogleGenerativeAI {
  if (!geminiClient) {
    throw new Error('Gemini client not initialized. Call initializeGemini first.')
  }
  return geminiClient
}

/**
 * Generates content using Gemini model
 * @param prompt - The prompt to send to the model
 * @param options - Additional options for the generation
 */
export async function generateContent(
  prompt: string,
  options: {
    model?: string
    temperature?: number
    maxOutputTokens?: number
  } = {}
): Promise<string> {
  const client = getClient()
  const model = client.getGenerativeModel({ 
    model: options.model || 'gemini-pro',
    generationConfig: {
      temperature: options.temperature || 0.7,
      maxOutputTokens: options.maxOutputTokens || 1000,
    }
  })

  const result = await model.generateContent(prompt)
  const response = await result.response
  return response.text()
}

/**
 * Generates content from text and images using Gemini Pro Vision
 * @param prompt - The text prompt
 * @param images - Array of image data (base64 or buffer)
 */
export async function generateContentWithImages(
  prompt: string,
  images: Array<{ inlineData: { data: string; mimeType: string } }>
): Promise<string> {
  const client = getClient()
  const model = client.getGenerativeModel({ model: 'gemini-pro-vision' })

  const parts = [{ text: prompt }, ...images]
  const result = await model.generateContent(parts)
  const response = await result.response
  return response.text()
}

/**
 * Starts a chat session with Gemini
 * @param history - Optional chat history to initialize the session
 */
export function startChat(
  history: Array<{ role: string; parts: string }> = []
) {
  const client = getClient()
  const model = client.getGenerativeModel({ model: 'gemini-pro' })

  return model.startChat({
    history: history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.parts }],
    })),
  })
}

/**
 * Sends a message in a chat session
 * @param chat - The chat session
 * @param message - The message to send
 */
export async function sendChatMessage(
  chat: any,
  message: string
): Promise<string> {
  const result = await chat.sendMessage(message)
  const response = await result.response
  return response.text()
}

/**
 * Generates streaming content
 * @param prompt - The prompt to send to the model
 * @param onChunk - Callback function called for each chunk of the response
 */
export async function generateStreamingContent(
  prompt: string,
  onChunk: (chunk: string) => void
): Promise<void> {
  const client = getClient()
  const model = client.getGenerativeModel({ model: 'gemini-pro' })

  const result = await model.generateContentStream(prompt)

  for await (const chunk of result.stream) {
    const chunkText = chunk.text()
    if (chunkText) {
      onChunk(chunkText)
    }
  }
}

/**
 * Counts tokens in the given text
 * @param text - The text to count tokens for
 */
export async function countTokens(text: string): Promise<number> {
  const client = getClient()
  const model = client.getGenerativeModel({ model: 'gemini-pro' })

  const result = await model.countTokens(text)
  return result.totalTokens
}
