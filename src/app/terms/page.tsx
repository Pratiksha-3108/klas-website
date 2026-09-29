import type { Metadata } from 'next';
import React from 'react';
import TermsContent from '@/components/legal/TermsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions | KLAS Group',
  description: 'Terms & Conditions for accessing and using the KLAS Group website.',
};

export default function TermsPage() {
  return <TermsContent />;
}
