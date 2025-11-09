#!/bin/bash

categories=("mindset" "productivity" "leadership" "business" "health" "relationships")

for category in "${categories[@]}"; do
  echo "Creating index.tsx files for $category modules..."
  for i in $(seq -f "%03g" 1 120); do
    cat > "$category/module-$i/index.tsx" << EOF
import React from 'react';

export interface FlixModule${i}Props {
  userId?: string;
  onComplete?: () => void;
}

const FlixModule${i}: React.FC<FlixModule${i}Props> = ({ userId, onComplete }) => {
  return (
    <div className="flix-module">
      <h2>$(echo ${category^}) FLIX Module ${i}</h2>
      <p>Welcome to module ${i} of the ${category} learning path.</p>
      <div className="module-content">
        {/* Module content will be loaded here */}
      </div>
    </div>
  );
};

export default FlixModule${i};
EOF
  done
done

echo "FLIX component files created successfully!"
