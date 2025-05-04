
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="golden-card p-8 max-w-md w-full text-center">
          <Sun className="h-16 w-16 text-amber-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4 text-amber-600">404</h1>
          <p className="text-xl text-foreground mb-6">
            This golden moment hasn't been captured yet.
          </p>
          <Button
            className="bg-golden-orange text-white hover:bg-amber-600 font-medium"
            onClick={() => window.location.href = "/"}
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
