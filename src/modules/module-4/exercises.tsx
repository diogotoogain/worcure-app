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
`

const SuccessMessage = styled.div`
  background: rgba(26, 159, 139, 0.1);
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
`

export default function ModuleExercises() {
  const [responses, setResponses] = useState({ q1: '', q2: '', q3: '' })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    localStorage.setItem('worcure-module-4', JSON.stringify(responses))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <ExerciseContainer>
      <ExerciseTitle>Exercícios Práticos - Módulo 4</ExerciseTitle>

      <Question>
        <Label>1. Qual é seu principal aprendizado deste módulo?</Label>
        <TextArea
          value={responses.q1}
          onChange={(e) => setResponses({ ...responses, q1: e.target.value })}
          placeholder="Descreva seu principal insight..."
        />
      </Question>

      <Question>
        <Label>2. Como você vai aplicar este conhecimento na prática?</Label>
        <TextArea
          value={responses.q2}
          onChange={(e) => setResponses({ ...responses, q2: e.target.value })}
          placeholder="Defina ações concretas que você tomará..."
        />
      </Question>

      <Question>
        <Label>3. Que obstáculos você antecipa e como vai superá-los?</Label>
        <TextArea
          value={responses.q3}
          onChange={(e) => setResponses({ ...responses, q3: e.target.value })}
          placeholder="Liste possíveis desafios e estratégias para superá-los..."
        />
      </Question>

      <SaveButton onClick={handleSave}>
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
