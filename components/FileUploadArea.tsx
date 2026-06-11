import React from 'react';
import { UploadCloud } from 'lucide-react';

export function FileUploadArea() {
  return (
    <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-orange-500 hover:bg-orange-500/5 transition-colors cursor-pointer group">
      <div className="w-12 h-12 rounded-full bg-slate-800 group-hover:bg-orange-500/20 flex items-center justify-center mx-auto mb-4 transition-colors">
        <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
      </div>
      <p className="text-sm font-medium text-white mb-1">Click or drag file to this area to upload</p>
      <p className="text-xs text-slate-500">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</p>
    </div>
  );
}
