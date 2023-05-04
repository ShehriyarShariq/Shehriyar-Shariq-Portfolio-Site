import React, { useEffect, useRef } from 'react'

function Background() {
  const canvas = useRef(null)
  const particles = useRef([])
  const requestIdRef = useRef(null)

  useEffect(() => {
    if (!canvas.current) return

    const ctx = canvas.current.getContext('2d')
    const particleCount = 10
    const colors = ['#05FDD888', '#FD215588']

    const resizeCanvas = () => {
      canvas.current.width = window.innerWidth
      canvas.current.height = window.innerHeight
    }

    const createParticles = () => {
      particles.current = []

      for (let i = 0; i < particleCount; i++) {
        particles.current.push(new Particle())
      }
    }

    class Particle {
      constructor() {
        this.radius = Math.round(Math.random() * 12.5 + 15)
        this.x = Math.floor(
          Math.random() * (window.innerWidth - this.radius * 2) + this.radius,
        )
        this.y = Math.floor(
          Math.random() * (window.innerHeight - this.radius * 2) + this.radius,
        )
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.speedx = (Math.random() - 0.5) / 2
        this.speedy = (Math.random() - 0.5) / 2
      }

      move() {
        ctx.beginPath()
        ctx.globalCompositeOperation = 'source-over'
        ctx.fillStyle = this.color
        ctx.globalAlpha = 1
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.closePath()

        this.x += this.speedx
        this.y += this.speedy

        if (this.x < this.radius || this.x > canvas.current.width - this.radius)
          this.speedx *= -1
        if (
          this.y < this.radius ||
          this.y > canvas.current.height - this.radius
        )
          this.speedy *= -1

        for (const particle of particles.current) {
          const yd = particle.y - this.y,
            xd = particle.x - this.x,
            d = Math.sqrt(xd * xd + yd * yd)

          if (d < 400 && this.color === particle.color) {
            ctx.beginPath()
            ctx.globalAlpha = (400 - d) / 400
            ctx.globalCompositeOperation = 'destination-over'
            ctx.lineWidth = 8
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(particle.x, particle.y)
            ctx.strokeStyle = this.color
            ctx.lineCap = 'round'
            ctx.stroke()
            ctx.closePath()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)

      for (const particle of particles.current) {
        particle.move()
      }

      requestIdRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(requestIdRef.current)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvas}
      className="w-full h-screen m-0 fixed top-0 hidden sm:block"
    ></canvas>
  )
}

export default Background
