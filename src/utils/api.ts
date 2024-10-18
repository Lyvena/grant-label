import { toast } from 'sonner';

interface Grant {
  id: string;
  title: string;
  description: string;
  labels: string[];
}

// This is a mock function. In a real application, you would fetch data from an API.
export const fetchGrants = async (): Promise<Grant[]> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const mockGrants: Grant[] = [
    {
      id: '1',
      title: 'AI Safety Research Grant',
      description: 'Funding for research into AI alignment and safety measures.',
      labels: ['AI Safety', 'Technical AI Research'],
    },
    {
      id: '2',
      title: 'AI Ethics in Healthcare',
      description: 'Exploring ethical implications of AI in medical diagnosis and treatment.',
      labels: ['AI Ethics', 'AI Applications'],
    },
    {
      id: '3',
      title: 'AI Governance Framework Development',
      description: 'Creating comprehensive guidelines for AI governance in public sector.',
      labels: ['AI Governance', 'AI Policy'],
    },
    {
      id: '4',
      title: 'AI Education Outreach Program',
      description: 'Developing curriculum and resources for AI education in schools.',
      labels: ['AI Education'],
    },
    {
      id: '5',
      title: 'Explainable AI for Financial Services',
      description: 'Research into making AI decision-making transparent in finance.',
      labels: ['Technical AI Research', 'AI Applications'],
    },
  ];

  toast.success('Grants loaded successfully');
  return mockGrants;
};