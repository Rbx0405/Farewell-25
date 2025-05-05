
import { Button } from '@/components/ui/button';
import { LinkIcon, Copy } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const FeaturedMemories = () => {
  // Fixed Google Drive link as a constant
  const fixedLink = 'https://drive.google.com/drive/folders/1234567890abcdefghijklmnopqrstuvwxyz';

  const handleShareMemory = async () => {
    try {
      await navigator.clipboard.writeText(fixedLink);
      toast.success("Link copied to clipboard", {
        description: "You can now share it with others"
      });
      console.log('Memory link submitted:', fixedLink);
    } catch (err) {
      toast.error("Failed to copy link", {
        description: "Please try again"
      });
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <section id="content" className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">Share Your Memory</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           Google Drive Link to Share memories
          </p>
        </div>

        <div className="golden-card rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="memory-link" className="block text-sm font-medium mb-2 text-[#D4AF37]">
                Memory Link
              </label>
              <div className="flex">
                <div className="relative flex-grow">
                  <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    id="memory-link"
                    type="url"
                    value={fixedLink}
                    readOnly
                    className="pl-10 pr-4 py-3 w-full rounded-l-md border border-r-0 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-[#1a1a1a] text-foreground"
                  />
                </div>
                <Button 
                  type="button" 
                  className="bg-[#D4AF37] text-black hover:bg-[#C5A028] rounded-l-none flex items-center gap-2"
                  onClick={handleShareMemory}
                >
                  <Copy size={16} />
                  Copy Link
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>Share links to your favorite memories, photos, videos or any other content that represents your golden moments of 2025.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMemories;
