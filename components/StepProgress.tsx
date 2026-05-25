import React from 'react';
import { Check } from 'lucide-react';

export function StepProgress({ steps, currentStep }: { steps: string[]; currentStep: number }) {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center relative">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${i < currentStep ? 'bg-orange-500 border-orange-500 text-white' : i === currentStep ? 'border-orange-500 text-orange-500' : 'border-slate-700 text-slate-500'}`}>
              {i < currentStep ? <Check className="w-4 h-4" /> : <span>{i + 1}</span>}
            </div>
            <span className="absolute top-10 text-xs font-medium text-slate-400 whitespace-nowrap">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 ${i < currentStep ? 'bg-orange-500' : 'bg-slate-800'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
