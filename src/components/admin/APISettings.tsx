import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
`

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  margin-bottom: 20px;
`

const SettingGroup = styled.div`
  margin-bottom: 25px;
`

const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.text.dark};
  margin-bottom: 8px;
  font-size: 14px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid #333;
  border-radius: 4px;
  color: ${props => props.theme.colors.text.light};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const StatusMessage = styled.div<{ type: 'success' | 'error' }>`
  padding: 10px;
  margin-top: 15px;
  border-radius: 4px;
  background-color: ${props => props.type === 'success' ? '#1e7e34' : '#7e1e1e'};
  color: white;
  font-size: 14px;
`

export default function APISettings() {
  const [openaiKey, setOpenaiKey] = useState('')
  const [geminiKey, setGeminiKey] = useState('')
  const [vimeoToken, setVimeoToken] = useState('')
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)
    setStatus(null)

    try {
      // TODO: Implement API call to save settings
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      
      setStatus({ message: 'Settings saved successfully', type: 'success' })
    } catch (error) {
      setStatus({ message: 'Failed to save settings', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <SectionTitle>API Settings</SectionTitle>
      
      <SettingGroup>
        <Label htmlFor="openai-key">OpenAI API Key</Label>
        <Input
          id="openai-key"
          type="password"
          value={openaiKey}
          onChange={(e) => setOpenaiKey(e.target.value)}
          placeholder="sk-..."
        />
      </SettingGroup>

      <SettingGroup>
        <Label htmlFor="gemini-key">Google Gemini API Key</Label>
        <Input
          id="gemini-key"
          type="password"
          value={geminiKey}
          onChange={(e) => setGeminiKey(e.target.value)}
          placeholder="AIza..."
        />
      </SettingGroup>

      <SettingGroup>
        <Label htmlFor="vimeo-token">Vimeo Access Token</Label>
        <Input
          id="vimeo-token"
          type="password"
          value={vimeoToken}
          onChange={(e) => setVimeoToken(e.target.value)}
          placeholder="Enter your Vimeo token"
        />
      </SettingGroup>

      <Button onClick={handleSave} disabled={loading}>
        {loading ? 'Saving...' : 'Save Settings'}
      </Button>

      {status && <StatusMessage type={status.type}>{status.message}</StatusMessage>}
    </Container>
  )
}
