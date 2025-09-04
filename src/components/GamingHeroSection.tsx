import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, ArrowRight, Gamepad2, Code, Zap, Sparkles } from 'lucide-react';
import { ThreeScene } from './ThreeScene';

export const GamingHeroSection: React.FC = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/923184431218',
      color: 'text-green-400',
      glowColor: 'shadow-green-400/50'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Umaiir11',
      color: 'text-purple-400',
      glowColor: 'shadow-purple-400/50'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/umair-hashmi/',
      color: 'text-cyan-400',
      glowColor: 'shadow-cyan-400/50'
    }
  ];

  const scrollToGames = () => {
    const element = document.querySelector('#games');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20">
      {/* Three.js Background */}
      <ThreeScene className="z-0" />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/60 z-10" />
      
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-20 z-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Gaming Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative inline-flex items-center group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative px-8 py-4 rounded-full bg-gray-900/80 border border-cyan-400/50 text-cyan-400 font-bold backdrop-blur-md">
              <div className="flex items-center">
                <Gamepad2 className="w-5 h-5 mr-3 animate-pulse" />
                <span className="font-mono text-sm tracking-wider">GAME_DEVELOPER.EXE</span>
                <motion.div
                  className="ml-3 w-2 h-2 bg-green-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1], 
                    opacity: [1, 0.3, 1],
                    boxShadow: ['0 0 5px #4ade80', '0 0 20px #4ade80', '0 0 5px #4ade80']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Glitch Name Effect */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-7xl md:text-9xl font-black mb-6 relative font-mono"
            >
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  UMAIR
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-50"
                  animate={{ 
                    x: [0, 2, -2, 0],
                    opacity: [0.5, 0.8, 0.3, 0.5]
                  }}
                  transition={{ 
                    duration: 0.1, 
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  UMAIR
                </motion.span>
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                HASHMI
              </motion.span>
              
              {/* Neon Underline */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                initial={{ width: 0, boxShadow: 'none' }}
                animate={{ 
                  width: '80%',
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)'
                }}
                transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
              />
            </motion.h1>
          </div>

          {/* Animated Role Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 text-lg md:text-xl mb-8"
          >
            {[
              { icon: Gamepad2, text: 'Game Developer', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30' },
              { icon: Code, text: 'Flutter Engineer', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30' },
              { icon: Zap, text: 'LayerX Creator', color: 'text-pink-400', bg: 'bg-pink-400/10', border: 'border-pink-400/30' }
            ].map((role, index) => (
              <motion.div
                key={role.text}
                className={`flex items-center ${role.bg} backdrop-blur-md px-6 py-3 rounded-full border ${role.border} font-mono`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: `0 10px 30px ${role.color.replace('text-', 'rgba(').replace('-400', ', 0.3)')}`
                }}
              >
                <role.icon className={`w-5 h-5 mr-3 ${role.color}`} />
                <span className={`${role.color} font-bold tracking-wide`}>
                  {role.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Cyberpunk Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative p-8 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-cyan-400/30">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-pink-400/5 rounded-2xl"
                animate={{ 
                  background: [
                    'linear-gradient(45deg, rgba(34, 211, 238, 0.05), rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))',
                    'linear-gradient(225deg, rgba(236, 72, 153, 0.05), rgba(34, 211, 238, 0.05), rgba(168, 85, 247, 0.05))',
                    'linear-gradient(45deg, rgba(34, 211, 238, 0.05), rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))'
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              <p className="relative text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Crafting{' '}
                <motion.span 
                  className="text-cyan-400 font-bold relative"
                  whileHover={{ scale: 1.1 }}
                >
                  immersive gaming experiences
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400/50"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                  />
                </motion.span>
                {' '}and{' '}
                <motion.span 
                  className="text-purple-400 font-bold"
                  whileHover={{ scale: 1.1 }}
                >
                  production Flutter apps
                </motion.span>
                {' '}with{' '}
                <motion.span 
                  className="text-pink-400 font-bold"
                  whileHover={{ scale: 1.1 }}
                >
                  cutting-edge architecture
                </motion.span>
                .
              </p>
            </div>
          </motion.div>

          {/* Gaming Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8, type: "spring" }}
            className="relative inline-block"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl blur-xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative px-12 py-6 rounded-2xl bg-gray-900/60 border border-cyan-400/30 backdrop-blur-md">
              <div className="flex items-center space-x-8 text-white font-bold font-mono">
                <div className="text-center">
                  <div className="text-3xl text-cyan-400 mb-1">4+</div>
                  <div className="text-xs text-gray-400 tracking-wider">YEARS_EXP</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-purple-400" />
                <div className="text-center">
                  <div className="text-3xl text-purple-400 mb-1">20+</div>
                  <div className="text-xs text-gray-400 tracking-wider">GAMES_BUILT</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-purple-400 to-pink-400" />
                <div className="text-center">
                  <div className="text-3xl text-pink-400 mb-1">2.0</div>
                  <div className="text-xs text-gray-400 tracking-wider">LAYERX_VER</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            {/* Primary CTA */}
            <motion.button
              onClick={scrollToGames}
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-full shadow-2xl overflow-hidden font-mono tracking-wider"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: '0 20px 40px rgba(34, 211, 238, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <div className="relative flex items-center">
                <Gamepad2 className="w-6 h-6 mr-3" />
                EXPLORE_GAMES()
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
              
              {/* Scan Line Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.button>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-4 rounded-full bg-gray-900/60 border border-gray-700 backdrop-blur-md transition-all duration-300 ${link.color} group hover:border-current`}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3, 
                    rotate: 5,
                    boxShadow: `0 10px 30px ${link.color.replace('text-', 'rgba(').replace('-400', ', 0.4)')}`
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                >
                  <link.icon className="w-6 h-6 relative z-10" />
                  
                  {/* Hover Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md ${link.glowColor}`}
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Floating Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute top-20 right-10 hidden xl:block"
          >
            {['Flutter', 'Unity', 'Three.js', 'WebGL', 'Dart', 'C#'].map((tech, index) => (
              <motion.div
                key={tech}
                className="absolute text-sm font-mono text-cyan-400/60 whitespace-nowrap"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 4,
                  delay: index * 0.8 + 2.5,
                  repeat: Infinity,
                  repeatDelay: 6
                }}
                style={{
                  top: `${Math.sin(index * 60 * Math.PI / 180) * 80}px`,
                  left: `${Math.cos(index * 60 * Math.PI / 180) * 80}px`
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.div
          className="relative cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToGames}
        >
          <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm">
            <motion.div
              className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
              animate={{ 
                y: [0, 16, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <motion.div
            className="absolute inset-0 border-2 border-cyan-400/50 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};