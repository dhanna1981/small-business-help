import React from 'react'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export default function PrivacyPage() {
  return <PrivacyPolicy onBack={() => window.history.back()} />
}