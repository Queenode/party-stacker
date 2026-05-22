import React from 'react';
import { Twitter, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SocialShare({ url, text }: { url: string; text: string }) {
  const handleShare = () => {
    if (navigator.share) navigator.share({ title: text, url });
    else navigator.clipboard.writeText(url);
  };
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')} className="gap-2 bg-[#1DA1F2]/10 text-[#1DA1F2] border-[#1DA1F2]/20 hover:bg-[#1DA1F2]/20"><Twitter className="w-4 h-4" /> Tweet</Button>
      <Button variant="outline" size="sm" onClick={handleShare} className="gap-2 border-white/10 hover:bg-white/5"><Share2 className="w-4 h-4" /> Share</Button>
    </div>
  );
}
