import { motion } from 'framer-motion';
import { profiles } from '@/data/profiles';
import { SocialButton } from './SocialButton';
import Link from 'next/link';

export function SocialButtons() {
  return (
    <div className='flex flex-wrap gap-3 max-md:justify-center'>
      {profiles.map((profile, index) => {
        return (
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <Link
              href={profile.url}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => {
                if (!profile.url) e.preventDefault();
              }}
            >
              <SocialButton {...profile} />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
