import React from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import APISettings from '@/components/admin/APISettings'
import DeployPanel from '@/components/admin/DeployPanel'
import IntegrationsPanel from '@/components/admin/IntegrationsPanel'
import withAdminAuth from '@/utils/withAdminAuth'

function AdminDashboard() {
  return (
    <AdminLayout title="Admin Dashboard">
      <APISettings />
      <DeployPanel />
      <IntegrationsPanel />
    </AdminLayout>
  )
}

export default withAdminAuth(AdminDashboard)
