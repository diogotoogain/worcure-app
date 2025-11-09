import React, { ComponentType, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function withAdminAuth<P extends object>(
  Component: ComponentType<P>
) {
  const AdminAuthComponent = (props: P) => {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
      // Redirect to login if not authenticated
      if (status === 'unauthenticated') {
        router.push('/')
        return
      }

      // Check if user has admin role
      if (status === 'authenticated' && session?.user) {
        const userRole = (session.user as any).role
        if (userRole !== 'admin') {
          // Redirect non-admin users to student dashboard
          router.push('/app/dashboard')
        }
      }
    }, [status, session, router])

    // Show loading state while checking authentication
    if (status === 'loading') {
      return React.createElement(
        'div',
        { 
          style: {
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '100vh',
            color: 'white'
          }
        },
        'Loading...'
      )
    }

    // Don't render component if not authenticated or not admin
    if (status === 'unauthenticated' || (session?.user as any)?.role !== 'admin') {
      return null
    }

    return React.createElement(Component, props)
  }

  AdminAuthComponent.displayName = `withAdminAuth(${Component.displayName || Component.name || 'Component'})`
  
  return AdminAuthComponent
}
