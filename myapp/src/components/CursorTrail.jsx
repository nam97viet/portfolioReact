import React, { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newStar = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };

      setTrails((prev) => [...prev, newStar]);

      // Remove stars after animation
      setTimeout(() => {
        setTrails((prev) => prev.filter((star) => star.id !== newStar.id));
      }, 1500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {trails.map((star) => (
        <div
          key={star.id}
          className="cursor-star"
          style={{
            left: star.x,
            top: star.y,
          }}
        >
          ✨
        </div>
      ))}
    </>
  );
};

export default CursorTrail;