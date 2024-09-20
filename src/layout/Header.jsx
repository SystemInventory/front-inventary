import { Avatar,AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import dayjs from 'dayjs';
import { Clock8 } from 'lucide-react';
export const Header = () => {
  const currentTime = dayjs().format("hh:mm A");
  return (
    <header className=" border p-4 flex items-center justify-between">
      <div className='flex gap-3'>
      <Clock8 />
       {currentTime}
      </div>
      <div>
        <Avatar  >
          <AvatarImage/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
