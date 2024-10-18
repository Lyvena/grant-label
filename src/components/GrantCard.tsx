import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Grant {
  id: string;
  title: string;
  description: string;
  labels: string[];
}

interface GrantCardProps {
  grant: Grant;
}

const GrantCard: React.FC<GrantCardProps> = ({ grant }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{grant.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 mb-4">{grant.description}</p>
        <div className="flex flex-wrap gap-2">
          {grant.labels.map((label) => (
            <Badge key={label} variant="secondary">
              {label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GrantCard;