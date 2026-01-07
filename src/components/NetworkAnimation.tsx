'use client'

import React, { useEffect, useRef } from 'react'

export default function NetworkAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = canvas.width = canvas.offsetWidth
        let height = canvas.height = canvas.offsetHeight

        // Node configuration
        const nodeCount = 30
        const connectionDistance = 100
        const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = []

        // Initialize nodes
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5, // Slow movement
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            })
        }

        let animationFrameId: number

        const draw = () => {
            ctx.clearRect(0, 0, width, height)

            // Update and draw nodes
            nodes.forEach((node, i) => {
                // Move
                node.x += node.vx
                node.y += node.vy

                // Bounce off walls
                if (node.x < 0 || node.x > width) node.vx *= -1
                if (node.y < 0 || node.y > height) node.vy *= -1

                // Draw node
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
                ctx.fillStyle = '#ff1744' // Primary red
                ctx.fill()

                // Draw connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const otherNode = nodes[j]
                    const dx = node.x - otherNode.x
                    const dy = node.y - otherNode.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.moveTo(node.x, node.y)
                        ctx.lineTo(otherNode.x, otherNode.y)
                        // Opacity based on distance
                        const alpha = 1 - (distance / connectionDistance)
                        ctx.strokeStyle = `rgba(255, 23, 68, ${alpha * 0.4})`
                        ctx.stroke()
                    }
                }
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        draw()

        const handleResize = () => {
            if (!canvas) return
            width = canvas.width = canvas.offsetWidth
            height = canvas.height = canvas.offsetHeight
        }

        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%' }}
            className="opacity-80"
        />
    )
}
