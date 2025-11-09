import React from 'react'
import StudentLayout from '@/components/student/StudentLayout'
import CourseModule from '@/components/student/CourseModule'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const sampleModules = [
  {
    moduleNumber: 1,
    title: 'Introdução ao WORCURE',
    completed: false,
    lessons: [
      { id: '1-1', title: 'Bem-vindo ao WORCURE', duration: '10 min', completed: true },
      { id: '1-2', title: 'Como usar a plataforma', duration: '15 min', completed: true },
      { id: '1-3', title: 'Configurando seu perfil', duration: '8 min', completed: false },
    ]
  },
  {
    moduleNumber: 2,
    title: 'Fundamentos',
    completed: false,
    lessons: [
      { id: '2-1', title: 'Conceitos básicos', duration: '20 min', completed: false },
      { id: '2-2', title: 'Primeiros passos', duration: '18 min', completed: false },
      { id: '2-3', title: 'Exercícios práticos', duration: '25 min', completed: false },
    ]
  },
  {
    moduleNumber: 3,
    title: 'Avançando no curso',
    completed: false,
    lessons: [
      { id: '3-1', title: 'Técnicas avançadas', duration: '30 min', completed: false },
      { id: '3-2', title: 'Estudos de caso', duration: '22 min', completed: false },
      { id: '3-3', title: 'Projeto prático', duration: '45 min', completed: false },
    ]
  }
]

export default function AppDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  // Calculate overall progress
  const totalLessons = sampleModules.reduce((acc, mod) => acc + mod.lessons.length, 0)
  const completedLessons = sampleModules.reduce(
    (acc, mod) => acc + mod.lessons.filter(l => l.completed).length, 
    0
  )
  const progress = Math.round((completedLessons / totalLessons) * 100)

  return (
    <StudentLayout title="Meus Cursos" progress={progress}>
      {sampleModules.map(module => (
        <CourseModule
          key={module.moduleNumber}
          moduleNumber={module.moduleNumber}
          title={module.title}
          lessons={module.lessons}
          completed={module.completed}
        />
      ))}
    </StudentLayout>
  )
}
