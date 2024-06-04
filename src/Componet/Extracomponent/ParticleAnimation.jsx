import React, { useEffect, useRef } from 'react';

const ParticleAnimation = ({ text }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    let particleArray = [];
    let adjustX = 0; // position of text 
    let adjustY = 50;

    const mouse = {
      x: null,
      y: null,
      raduis: 30,
    };

    window.addEventListener('mousemove', function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });
    ctx.fillStyle = 'white';
    ctx.font = "4vmin sans-serif";

    // const text = "Web3 is the language of future, let's dive in";
    const textWidth = ctx.measureText(text).width;
    ctx.fillText(text, adjustX, adjustY);
    const textCoordinates = ctx.getImageData(adjustX, adjustY - 20, textWidth, 100); //height and width of canvas

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 15) + 5;
      }
      draw() {
        ctx.fillStyle = 'white'; // Set particle color to white
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.raduis;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < mouse.raduis) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // return speed adjustment
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 5;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 5;
          }
        }
      }
    }

    function init() {
      particleArray = [];

      for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            let positionX = x + adjustX;
            let positionY = y + adjustY - 20;
            particleArray.push(new Particle(positionX * 2.2, positionY * 2.2));
          }
        }
      }
    }
    init();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, [text]);
  return <canvas ref={canvasRef} />;
};

export default ParticleAnimation;