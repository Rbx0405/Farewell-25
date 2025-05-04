
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  location: string;
}

interface MemoryCardProps {
  memory: Memory;
  index: number;
}

const MemoryCard = ({ memory, index }: MemoryCardProps) => {
  return (
    <Card 
      className="golden-card overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={memory.image} 
          alt={memory.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{memory.title}</h3>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{memory.date}</span>
            <span>{memory.location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-3">{memory.description}</p>
      </CardContent>
      <CardFooter>
        <a href={`/memories/${memory.id}`} className="text-primary font-medium hover:underline">
          Read more
        </a>
      </CardFooter>
    </Card>
  );
};

export default MemoryCard;
