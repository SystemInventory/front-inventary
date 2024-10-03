import { Card, CardContent, CardFooter, CardHeader, Skeleton } from "../ui";

export const CardProductSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {[...Array(5)].map((_, index) => (
        <Card key={index} className="transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col">
          <CardHeader>
            <figure className="w-full border mx-auto">
              <Skeleton className="h-48 w-full" />
            </figure>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-6 w-1/4" />
            </div>
            <Skeleton className="h-4 w-1/3 mt-2" />
            <Skeleton className="h-4 w-full mt-2" />
            <div className="flex justify-between mt-2">
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-6 w-1/4" />
            </div>
          </CardContent>
          <CardFooter className="flex gap-1 mt-auto">
            <Skeleton className="h-10 w-1/2" />
            <Skeleton className="h-10 w-1/2" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};