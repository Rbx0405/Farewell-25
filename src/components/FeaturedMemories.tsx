
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LinkIcon } from 'lucide-react';

const FeaturedMemories = () => {
  // Pre-fill with a random memory link
  const randomLinks = [
    'https://memories.goldenhour.com/sunset-beach-2025',
    'https://goldenmemories.com/family-reunion-summer',
    'https://moments.farewell25.com/graduation-ceremony',
    'https://share.farewell25.com/concert-memories',
    'https://gallery.farewell25.com/wedding-day'
  ];
  
  const randomLink = randomLinks[Math.floor(Math.random() * randomLinks.length)];
  const [link, setLink] = useState(randomLink);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the link (this could be expanded later)
    console.log('Memory link submitted:', link);
    // Clear the input after submission
    setLink('');
  };

  return (
    <section id="content" className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Memory</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Paste a link to your golden moment to share it with others.
          </p>
        </div>

        <div className="bg-card border rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label htmlFor="memory-link" className="block text-sm font-medium mb-2">
                Memory Link
              </label>
              <div className="flex">
                <div className="relative flex-grow">
                  <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    id="memory-link"
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://example.com/my-golden-memory"
                    className="pl-10 pr-4 py-3 w-full rounded-l-md border border-r-0 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-golden-orange text-white hover:bg-amber-600 rounded-l-none"
                >
                  Share
                </Button>
              </div>
            </div>
          </form>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>Share links to your favorite memories, photos, videos or any other content that represents your golden moments of 2025.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMemories;
