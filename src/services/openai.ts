import OpenAI from 'openai'

let openaiClient: OpenAI | null = null

/**
 * Initializes the OpenAI client with the provided API key
 * @param apiKey - OpenAI API key
 */
export function initializeOpenAI(apiKey: string): void {
  openaiClient = new OpenAI({
    apiKey: apiKey,
  })
}

/**
 * Gets the OpenAI client instance
 * @throws Error if client is not initialized
 */
function getClient(): OpenAI {
  if (!openaiClient) {
    throw new Error('OpenAI client not initialized. Call initializeOpenAI first.')
  }
  return openaiClient
}

/**
 * Generates a completion using GPT model
 * @param prompt - The prompt to send to the model
 * @param options - Additional options for the completion
 */
export async function generateCompletion(
  prompt: string,
  options: {
    model?: string
    maxTokens?: number
    temperature?: number
  } = {}
): Promise<string> {
  const client = getClient()
  
  const response = await client.chat.completions.create({
    model: options.model || 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: options.maxTokens || 1000,
    temperature: options.temperature || 0.7,
  })

  return response.choices[0]?.message?.content || ''
}

/**
 * Generates embeddings for the given text
 * @param text - The text to generate embeddings for
 * @param model - The embedding model to use
 */
export async function generateEmbeddings(
  text: string,
  model: string = 'text-embedding-ada-002'
): Promise<number[]> {
  const client = getClient()
  
  const response = await client.embeddings.create({
    model: model,
    input: text,
  })

  return response.data[0].embedding
}

/**
 * Analyzes content for moderation issues
 * @param content - The content to analyze
 */
export async function moderateContent(content: string): Promise<{
  flagged: boolean
  categories: any
}> {
  const client = getClient()
  
  const response = await client.moderations.create({
    input: content,
  })

  const result = response.results[0]
  
  return {
    flagged: result.flagged,
    categories: result.categories,
  }
}

/**
 * Generates a streaming completion
 * @param prompt - The prompt to send to the model
 * @param onChunk - Callback function called for each chunk of the response
 * @param options - Additional options for the completion
 */
export async function generateStreamingCompletion(
  prompt: string,
  onChunk: (chunk: string) => void,
  options: {
    model?: string
    maxTokens?: number
    temperature?: number
  } = {}
): Promise<void> {
  const client = getClient()
  
  const stream = await client.chat.completions.create({
    model: options.model || 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: options.maxTokens || 1000,
    temperature: options.temperature || 0.7,
    stream: true,
  })

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || ''
    if (content) {
      onChunk(content)
    }
  }
}
