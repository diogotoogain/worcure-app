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
  min-height: 100px;
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

const SliderContainer = styled.div`
  margin-bottom: 1.5rem;
`

const SliderLabel = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.text.dark};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

const Slider = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: ${props => props.theme.colors.secondary};
  outline: none;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
    border: none;
  }
`

const SliderValue = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-top: 0.5rem;
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

interface LifeArea {
  name: string
  score: number
}

interface ExerciseData {
  values: string
  strengths: string
  weaknesses: string
  lifeAreas: LifeArea[]
}

export default function ModuleExercises() {
  const [formData, setFormData] = useState<ExerciseData>({
    values: '',
    strengths: '',
    weaknesses: '',
    lifeAreas: [
      { name: 'Carreira', score: 5 },
      { name: 'Finanças', score: 5 },
      { name: 'Relacionamentos', score: 5 },
      { name: 'Saúde', score: 5 },
      { name: 'Desenvolvimento Pessoal', score: 5 },
      { name: 'Lazer', score: 5 }
    ]
  })
  const [saved, setSaved] = useState(false)

  const updateLifeArea = (index: number, score: number) => {
    const newLifeAreas = [...formData.lifeAreas]
    newLifeAreas[index].score = score
    setFormData({ ...formData, lifeAreas: newLifeAreas })
  }

  const handleSave = () => {
    localStorage.setItem('worcure-module-2', JSON.stringify(formData))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <ExerciseContainer>
      <ExerciseTitle>Exercícios Práticos - Módulo 2</ExerciseTitle>

      <Question>
        <Label>1. Liste seus 5 valores fundamentais</Label>
        <TextArea
          value={formData.values}
          onChange={(e) => setFormData({ ...formData, values: e.target.value })}
          placeholder="Ex: Liberdade, Família, Crescimento, Integridade, Impacto..."
        />
      </Question>

      <Question>
        <Label>2. Quais são suas principais forças e talentos?</Label>
        <TextArea
          value={formData.strengths}
          onChange={(e) => setFormData({ ...formData, strengths: e.target.value })}
          placeholder="Liste suas habilidades naturais, talentos e competências..."
        />
      </Question>

      <Question>
        <Label>3. Quais áreas você precisa desenvolver?</Label>
        <TextArea
          value={formData.weaknesses}
          onChange={(e) => setFormData({ ...formData, weaknesses: e.target.value })}
          placeholder="Seja honesto sobre as habilidades que precisa melhorar..."
        />
      </Question>

      <Question>
        <Label>4. Avalie sua satisfação atual em cada área da vida (1-10)</Label>
        {formData.lifeAreas.map((area, index) => (
          <SliderContainer key={area.name}>
            <SliderLabel>
              <span>{area.name}</span>
              <SliderValue>{area.score}/10</SliderValue>
            </SliderLabel>
            <Slider
              type="range"
              min="1"
              max="10"
              value={area.score}
              onChange={(e) => updateLifeArea(index, parseInt(e.target.value))}
            />
          </SliderContainer>
        ))}
      </Question>

      <SaveButton onClick={handleSave}>
        Salvar Diagnóstico
      </SaveButton>

      {saved && (
        <SuccessMessage>
          ✓ Seu diagnóstico foi salvo com sucesso!
        </SuccessMessage>
      )}
    </ExerciseContainer>
  )
}
