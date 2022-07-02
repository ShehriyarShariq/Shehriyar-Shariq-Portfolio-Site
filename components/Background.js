import React, { useState, useRef, useEffect } from "react";
// import { useWindowSize } from "../hooks/useWindowSize";

function Background() {
  //   const size = useWindowSize();
  const particleCount = 10;
  const colors = ["#05FDD888", "#FD215588"];
  const canvas = useRef(null);
  const requestIdRef = useRef(null);
  const particles = useRef([]);
  const dpi = useRef(1);
  const context = useRef(null);

  useEffect(() => {
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    context.current = canvas.current.getContext("2d");

    context.current.clearRect(
      0,
      0,
      canvas.current.width,
      canvas.current.height
    );
    // canvas.current.height = size.height;
    // canvas.current.width = size.width;

    dpi.current = window.devicePixelRatio || 1;
    context.current.scale(dpi.current, dpi.current);

    particles.current = [];

    for (let i = 0; i < particleCount; i++) {
      fix_dpi();
      let particle = new Particle();
      particles.current.push(particle);
    }

    requestIdRef.current = requestAnimFrame(animate);

    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  const animate = () => {
    if (!canvas.current || !context.current) return;

    fix_dpi();
    context.current.clearRect(
      0,
      0,
      canvas.current.width,
      canvas.current.height
    );

    for (let i = 0; i < particleCount; i++) {
      particles.current[i].move();
    }

    requestIdRef.current = requestAnimFrame(animate);
  };

  function fix_dpi() {
    let style_height = +getComputedStyle(canvas.current)
      .getPropertyValue("height")
      .slice(0, -2);
    let style_width = +getComputedStyle(canvas.current)
      .getPropertyValue("width")
      .slice(0, -2);

    canvas.current.setAttribute("height", style_height * dpi.current);
    canvas.current.setAttribute("width", style_width * dpi.current);
  }

  function Particle() {
    this.radius = Math.round(Math.random() * 12.5 + 15);
    this.x = Math.floor(
      Math.random() *
        (+getComputedStyle(canvas.current)
          .getPropertyValue("width")
          .slice(0, -2) *
          dpi.current -
          this.radius +
          1) +
        this.radius
    );
    this.y = Math.floor(
      Math.random() *
        (+getComputedStyle(canvas.current)
          .getPropertyValue("height")
          .slice(0, -2) *
          dpi.current -
          this.radius +
          1) +
        this.radius
    );
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedx = Math.round(Math.random() * 51 + 0) / 100;
    this.speedy = Math.round(Math.random() * 51 + 0) / 100;

    switch (Math.round(Math.random() * colors.length)) {
      case 1:
        this.speedx *= 1;
        this.speedy *= 1;
        break;
      case 2:
        this.speedx *= -1;
        this.speedy *= 1;
        break;
      case 3:
        this.speedx *= 1;
        this.speedy *= -1;
        break;
      case 4:
        this.speedx *= -1;
        this.speedy *= -1;
        break;
    }

    this.move = function () {
      context.current.beginPath();
      context.current.globalCompositeOperation = "source-over";
      context.current.fillStyle = this.color;
      context.current.globalAlpha = 1;
      context.current.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.current.fill();
      context.current.closePath();

      this.x = this.x + this.speedx;
      this.y = this.y + this.speedy;

      if (this.x <= 0 + this.radius) {
        this.speedx *= -1;
      }
      if (this.x >= canvas.current.width - this.radius) {
        this.speedx *= -1;
      }
      if (this.y <= 0 + this.radius) {
        this.speedy *= -1;
      }
      if (this.y >= canvas.current.height - this.radius) {
        this.speedy *= -1;
      }

      for (let j = 0; j < particleCount; j++) {
        const particle = particles.current[j],
          yd = particle.y - this.y,
          xd = particle.x - this.x,
          d = Math.sqrt(xd * xd + yd * yd);

        if (d < 400 && this.color == particle.color) {
          context.current.beginPath();
          context.current.globalAlpha = (400 - d) / (400 - 0);
          context.current.globalCompositeOperation = "destination-over";
          context.current.lineWidth = 8;
          context.current.moveTo(this.x, this.y);
          context.current.lineTo(particle.x, particle.y);
          context.current.strokeStyle = this.color;
          context.current.lineCap = "round";
          context.current.stroke();
          context.current.closePath();
        }
      }
    };
  }

  return (
    <canvas
      ref={canvas}
      className="w-screen h-full m-0 absolute top-0 hidden sm:block"
    ></canvas>
  );
}

export default Background;
