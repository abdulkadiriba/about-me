import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import {
  Instagram,
  Github,
  Linkedin,
  MessageSquare,
  MessageCircleMore,
} from 'lucide-react';

const iconMap = {
  instagram: Instagram,
  github: Github,
  linkedin: Linkedin,
  discord: MessageSquare,
  whatsapp: MessageCircleMore,
} as const;

interface SocialButtonProps {
  name: string;
  url: string;
  icon: keyof typeof iconMap;
  description: string;
  className?: string;
}

export function SocialButton({
  name,
  url,
  icon,
  description,
  className,
}: SocialButtonProps) {
  const Icon = iconMap[icon];

  return (
    <TooltipProvider>
      <Tooltip delayDuration={150}>
        <TooltipTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className={cn(
              'rounded-full transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground',
              className
            )}
          >
            <Icon className='h-5 w-5' />
          </Button>
        </TooltipTrigger>

        <TooltipContent
          className='w-auto rounded border bg-popover p-2 shadow-md'
          side='top'
        >
          <div className='flex flex-col gap-1'>
            <p className='text-md font-medium'>{name}</p>
            {!url && (
              <p className='text-sm text-muted-foreground'>{description}</p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
