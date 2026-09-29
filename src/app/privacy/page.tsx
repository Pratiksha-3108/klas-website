import type { Metadata } from 'next';
import React from 'react';
import PrivacyContent from '@/components/legal/PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | KLAS Group',
  description: 'Privacy Policy for KLAS Group explaining how we collect, use, and safeguard your data.',
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
