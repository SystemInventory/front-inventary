import { Card, CardTitle } from "../ui";

export const StatCard = ({ title, count, Icon }) => (
    <Card className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col h-28">
      <div className="flex items-center justify-between">
        <CardTitle className="mr-2">{title}</CardTitle>
        <Icon />
      </div>
      <div className="flex-grow flex justify-center items-end">
        <span className="font-bold text-4xl">{count()}</span>
      </div>
    </Card>
  );