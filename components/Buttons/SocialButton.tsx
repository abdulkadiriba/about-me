import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';

import {
  FaDiscord,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const iconMap = {
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  discord: FaDiscord,
  whatsapp: FaWhatsapp,
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
              'rounded-full transition-all hover:scale-110 hover:bg-primary/80 hover:text-primary-foreground',
              className
            )}
          >
            <Icon className='size-5' />
          </Button>
        </TooltipTrigger>

        <TooltipContent
          className='w-auto rounded border bg-popover p-2 shadow-md'
          side='top'
        >
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              {icon !== null && <Icon className='size-5' />}
              <p className='text-md font-medium'>{name}</p>
            </div>
            <p className='text-sm text-muted-foreground'>{description}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
