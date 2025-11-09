import axios, { AxiosInstance } from 'axios'

let vimeoClient: AxiosInstance | null = null
let accessToken: string | null = null

/**
 * Initializes the Vimeo client with the provided access token
 * @param token - Vimeo access token
 */
export function initializeVimeo(token: string): void {
  accessToken = token
  vimeoClient = axios.create({
    baseURL: 'https://api.vimeo.com',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
}

/**
 * Gets the Vimeo client instance
 * @throws Error if client is not initialized
 */
function getClient(): AxiosInstance {
  if (!vimeoClient) {
    throw new Error('Vimeo client not initialized. Call initializeVimeo first.')
  }
  return vimeoClient
}

/**
 * Uploads a video to Vimeo
 * @param videoFile - The video file buffer or path
 * @param options - Upload options
 */
export async function uploadVideo(
  videoFile: Buffer | string,
  options: {
    name?: string
    description?: string
    privacy?: 'anybody' | 'nobody' | 'unlisted'
  } = {}
): Promise<string> {
  const client = getClient()

  // Create video entry
  const createResponse = await client.post('/me/videos', {
    upload: {
      approach: 'tus',
      size: typeof videoFile === 'string' ? 0 : videoFile.length,
    },
    name: options.name || 'Untitled',
    description: options.description || '',
    privacy: {
      view: options.privacy || 'unlisted',
    },
  })

  // Return the video URI
  return createResponse.data.uri
}

/**
 * Gets video details
 * @param videoId - The Vimeo video ID or URI
 */
export async function getVideo(videoId: string): Promise<any> {
  const client = getClient()
  const uri = videoId.startsWith('/') ? videoId : `/videos/${videoId}`
  
  const response = await client.get(uri)
  return response.data
}

/**
 * Updates video metadata
 * @param videoId - The Vimeo video ID or URI
 * @param updates - The fields to update
 */
export async function updateVideo(
  videoId: string,
  updates: {
    name?: string
    description?: string
    privacy?: 'anybody' | 'nobody' | 'unlisted'
  }
): Promise<void> {
  const client = getClient()
  const uri = videoId.startsWith('/') ? videoId : `/videos/${videoId}`

  await client.patch(uri, {
    name: updates.name,
    description: updates.description,
    privacy: updates.privacy ? { view: updates.privacy } : undefined,
  })
}

/**
 * Deletes a video
 * @param videoId - The Vimeo video ID or URI
 */
export async function deleteVideo(videoId: string): Promise<void> {
  const client = getClient()
  const uri = videoId.startsWith('/') ? videoId : `/videos/${videoId}`
  
  await client.delete(uri)
}

/**
 * Lists videos for the authenticated user
 * @param options - Pagination and filtering options
 */
export async function listVideos(
  options: {
    page?: number
    perPage?: number
    sort?: 'date' | 'alphabetical' | 'plays' | 'likes'
    direction?: 'asc' | 'desc'
  } = {}
): Promise<any[]> {
  const client = getClient()

  const response = await client.get('/me/videos', {
    params: {
      page: options.page || 1,
      per_page: options.perPage || 25,
      sort: options.sort || 'date',
      direction: options.direction || 'desc',
    },
  })

  return response.data.data
}

/**
 * Gets the embed HTML for a video
 * @param videoId - The Vimeo video ID or URI
 * @param options - Embed options
 */
export async function getEmbedCode(
  videoId: string,
  options: {
    width?: number
    height?: number
    responsive?: boolean
  } = {}
): Promise<string> {
  const video = await getVideo(videoId)
  const embedHtml = video.embed?.html || ''
  
  if (options.width || options.height) {
    // Modify embed dimensions if specified
    let modifiedHtml = embedHtml
    if (options.width) {
      modifiedHtml = modifiedHtml.replace(/width="\d+"/, `width="${options.width}"`)
    }
    if (options.height) {
      modifiedHtml = modifiedHtml.replace(/height="\d+"/, `height="${options.height}"`)
    }
    return modifiedHtml
  }

  return embedHtml
}

/**
 * Gets the thumbnail URL for a video
 * @param videoId - The Vimeo video ID or URI
 * @param size - Thumbnail size (small, medium, large)
 */
export async function getThumbnail(
  videoId: string,
  size: 'small' | 'medium' | 'large' = 'medium'
): Promise<string> {
  const video = await getVideo(videoId)
  const pictures = video.pictures?.sizes || []
  
  const sizeMap = {
    small: 200,
    medium: 640,
    large: 1280,
  }
  
  const targetWidth = sizeMap[size]
  const thumbnail = pictures.find((pic: any) => pic.width >= targetWidth) || pictures[pictures.length - 1]
  
  return thumbnail?.link || ''
}
