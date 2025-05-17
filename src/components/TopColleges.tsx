
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnhancedCollegeCard } from "./EnhancedCollegeCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { College } from "@/types/college";
import { Degree } from "@/types/degree";

interface TopCollegesProps {
  colleges: College[];
  degrees: Degree[];
}

export const TopColleges = ({ colleges, degrees }: TopCollegesProps) => {
  // Get top colleges based on rank (cutoff)
  const topColleges = [...colleges]
    .filter(college => college.rank)
    .sort((a, b) => (a.rank || 999) - (b.rank || 999))
    .slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Top Colleges 2025</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topColleges.map((college, index) => (
            <div key={college.id}>
              <EnhancedCollegeCard college={college} degrees={degrees} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/colleges" className="flex items-center gap-2">
              Explore All Colleges
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
