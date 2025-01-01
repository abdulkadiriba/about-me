import { motion } from 'framer-motion';
import { Glow, GlowCapture } from '@codaworks/react-glow';

export function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className='flex-shrink-0'
    >
      <div className='relative size-32 md:size-60'>
        <div
          className='glow-effect rounded-full p-1'
          style={{
            background: `linear-gradient(135deg, 
                  #96C93D 0%, 
                  #4ECDC4 25%, 
                  #45B7D1 50%, 
                  #96C93D 75%, 
                  #96C93D 100%
                )`,
            backgroundSize: '400% 400%',
          }}
        >
          <div className='relative h-full w-full overflow-hidden rounded-full'>
            <div className='group overflow-hidden rounded-full'>
              <img
                src='/img/profile2.jpg'
                alt='Abdulkadir Iba'
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
