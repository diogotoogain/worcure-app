import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`

const ModuleHeader = styled.div<{ expanded: boolean }>`
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.expanded ? props.theme.colors.background : 'transparent'};
  border-bottom: ${props => props.expanded ? '1px solid #333' : 'none'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.background};
  }
`

const ModuleTitle = styled.h3`
  color: ${props => props.theme.colors.text.light};
  font-size: 18px;
  margin: 0;
`

const ModuleInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`

const ModuleBadge = styled.span<{ completed?: boolean }>`
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${props => props.completed ? '#1e7e34' : '#7e5e1e'};
  color: white;
`

const ExpandIcon = styled.span<{ expanded: boolean }>`
  font-size: 20px;
  transform: rotate(${props => props.expanded ? '180deg' : '0deg'});
  transition: transform 0.2s;
`

const ModuleContent = styled.div<{ expanded: boolean }>`
  max-height: ${props => props.expanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`

const LessonList = styled.div`
  padding: 20px;
`

const Lesson = styled.div`
  padding: 15px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`

const LessonInfo = styled.div`
  flex: 1;
`

const LessonTitle = styled.div`
  color: ${props => props.theme.colors.text.light};
  font-size: 15px;
  margin-bottom: 5px;
`

const LessonDuration = styled.div`
  color: ${props => props.theme.colors.text.dark};
  font-size: 13px;
`

const LessonButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

interface Lesson {
  id: string
  title: string
  duration: string
  completed: boolean
}

interface CourseModuleProps {
  moduleNumber: number
  title: string
  lessons: Lesson[]
  completed: boolean
}

export default function CourseModule({ moduleNumber, title, lessons, completed }: CourseModuleProps) {
  const [expanded, setExpanded] = useState(false)
  const completedCount = lessons.filter(l => l.completed).length

  return (
    <Container>
      <ModuleHeader expanded={expanded} onClick={() => setExpanded(!expanded)}>
        <ModuleTitle>Módulo {moduleNumber}: {title}</ModuleTitle>
        <ModuleInfo>
          <ModuleBadge completed={completed}>
            {completedCount}/{lessons.length} aulas
          </ModuleBadge>
          <ExpandIcon expanded={expanded}>▼</ExpandIcon>
        </ModuleInfo>
      </ModuleHeader>
      
      <ModuleContent expanded={expanded}>
        <LessonList>
          {lessons.map(lesson => (
            <Lesson key={lesson.id}>
              <LessonInfo>
                <LessonTitle>{lesson.title}</LessonTitle>
                <LessonDuration>{lesson.duration}</LessonDuration>
              </LessonInfo>
              <LessonButton>
                {lesson.completed ? 'Revisar' : 'Assistir'}
              </LessonButton>
            </Lesson>
          ))}
        </LessonList>
      </ModuleContent>
    </Container>
  )
}
