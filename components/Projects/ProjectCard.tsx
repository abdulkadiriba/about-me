import { Project } from '@/data/projects';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
interface ProjectCardProps {
  project: Project;
  index: number;
}
export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      key={index}
      className='group h-full w-full overflow-hidden border bg-secondary duration-300 hover:border-primary'
    >
      <div className='image-wrap relative'>
        <img
          src={project.image}
          alt={project.url}
          className='h-48 w-full object-cover group-hover:object-bottom'
        />
      </div>

      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <span>{project.url}</span>
          <Link href={`https://` + project.url} target='_blank'>
            <ExternalLink size={16} />
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>{project.description}</CardContent>
      <CardFooter>
        {project.icons.map((icon, iconIndex) => (
          <img key={iconIndex} src={icon} alt='' className='size-5' />
        ))}
      </CardFooter>
    </Card>
  );
}
