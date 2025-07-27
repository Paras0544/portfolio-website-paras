import spaceBackground from '@/assets/space-bg.jpg';

export const SpaceBackground = () => {
  return (
    <div 
      className="fixed inset-0 z-0"
      style={{
        backgroundImage: `url(${spaceBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};