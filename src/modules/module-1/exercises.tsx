import React, { useState } from 'react'
import styled from 'styled-components'

const ExerciseContainer = styled.div`
  padding: 2rem;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  margin-top: 2rem;
`

const ExerciseTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`

const Question = styled.div`
  margin-bottom: 2rem;
`

const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.text.light};
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  background: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  color: ${props => props.theme.colors.text.light};
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(26, 159, 139, 0.2);
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text.dark};
  cursor: pointer;
  
  input {
    margin-right: 0.75rem;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`

const SaveButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const SuccessMessage = styled.div`
  background: rgba(26, 159, 139, 0.1);
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
`

interface ExerciseData {
  motivation: string
  goals: string[]
  commitment: string
}

export default function ModuleExercises() {
  const [formData, setFormData] = useState<ExerciseData>({
    motivation: '',
    goals: [],
    commitment: ''
  })
  const [saved, setSaved] = useState(false)

  const goalOptions = [
    'Ter mais clareza sobre meu propósito de vida',
    'Aumentar minha produtividade',
    'Melhorar meus relacionamentos',
    'Alcançar equilíbrio entre vida pessoal e profissional',
    'Desenvolver habilidades de liderança',
    'Criar estabilidade financeira',
    'Cuidar melhor da minha saúde',
    'Fazer diferença no mundo'
  ]

  const handleGoalChange = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
  }

  const handleSave = () => {
    // Here you would typically save to a backend or local storage
    localStorage.setItem('worcure-module-1', JSON.stringify(formData))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <ExerciseContainer>
      <ExerciseTitle>Exercícios Práticos - Módulo 1</ExerciseTitle>

      <Question>
        <Label>1. Por que você decidiu embarcar nesta jornada de transformação?</Label>
        <TextArea
          value={formData.motivation}
          onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
          placeholder="Descreva suas motivações e o que você espera alcançar..."
        />
      </Question>

      <Question>
        <Label>2. Quais são suas principais áreas de foco? (selecione todas que se aplicam)</Label>
        <CheckboxGroup>
          {goalOptions.map((goal) => (
            <CheckboxLabel key={goal}>
              <input
                type="checkbox"
                checked={formData.goals.includes(goal)}
                onChange={() => handleGoalChange(goal)}
              />
              {goal}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </Question>

      <Question>
        <Label>3. Que compromisso você está disposto a fazer consigo mesmo?</Label>
        <TextArea
          value={formData.commitment}
          onChange={(e) => setFormData({ ...formData, commitment: e.target.value })}
          placeholder="Ex: Vou dedicar 30 minutos por dia ao meu desenvolvimento pessoal..."
        />
      </Question>

      <SaveButton 
        onClick={handleSave}
        disabled={!formData.motivation || formData.goals.length === 0 || !formData.commitment}
      >
        Salvar Respostas
      </SaveButton>

      {saved && (
        <SuccessMessage>
          ✓ Suas respostas foram salvas com sucesso!
        </SuccessMessage>
      )}
    </ExerciseContainer>
  )
}
