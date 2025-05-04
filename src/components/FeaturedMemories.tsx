
import MemoryCard, { Memory } from "./MemoryCard";

const memories: Memory[] = [
  {
    id: 1,
    title: "Sunset at Golden Gate",
    date: "June 15, 2025",
    description: "The way the sun painted the bridge in its golden light, creating silhouettes of people walking across. A perfect metaphor for transitions and crossings.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    title: "Summer Festival",
    date: "July 28, 2025",
    description: "The lanterns floated into the night sky, carrying wishes and dreams. Music played as people danced barefoot on the grass.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    location: "Portland, OR"
  },
  {
    id: 3,
    title: "Last Day at the Office",
    date: "August 10, 2025",
    description: "After five years, packing up my desk felt surreal. The team gathered for one final toast as the afternoon sun streamed through the windows.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    location: "New York, NY"
  },
  {
    id: 4,
    title: "Beach Farewell Party",
    date: "September 3, 2025",
    description: "Friends gathered around a bonfire as the sun set over the ocean. Stories were shared, promises were made, and memories were sealed.",
    image: "https://images.unsplash.com/photo-1529268209110-62be1d87fe75",
    location: "Malibu, CA"
  }
];

const FeaturedMemories = () => {
  return (
    <section id="content" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Memories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Moments preserved in amber light, capturing the essence of 2025 before we say our goodbyes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {memories.map((memory, index) => (
            <MemoryCard key={memory.id} memory={memory} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/memories"
            className="inline-block px-6 py-3 border-2 border-golden-orange text-golden-orange rounded-md font-semibold hover:bg-golden-orange hover:text-white transition-colors"
          >
            View All Memories
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMemories;
