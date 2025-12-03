// import React, { useState, useEffect } from 'react';
// import { Rocket, Satellite, Globe, Star, Zap, Shield, Users, ChevronRight } from 'lucide-react';

// const SpaceHomepage = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const stars = Array.from({ length: 100 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 2 + 1,
//     opacity: Math.random() * 0.8 + 0.2,
//   }));

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black text-white overflow-hidden">
//       {/* Animated Stars Background */}
//       <div className="fixed inset-0 z-0">
//         {stars.map((star) => (
//           <div
//             key={star.id}
//             className="absolute rounded-full bg-white animate-pulse"
//             style={{
//               left: `${star.x}%`,
//               top: `${star.y}%`,
//               width: `${star.size}px`,
//               height: `${star.size}px`,
//               opacity: star.opacity,
//               animationDuration: `${2 + Math.random() * 3}s`,
//               transform: `translateY(${scrollY * 0.1}px)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Floating Orb following mouse */}
//       <div
//         className="fixed w-96 h-96 rounded-full pointer-events-none z-10 opacity-20"
//         style={{
//           background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)',
//           left: mousePosition.x - 192,
//           top: mousePosition.y - 192,
//           transition: 'all 0.1s ease-out',
//         }}
//       />

//       {/* Navigation */}
//       <nav className="relative z-20 flex justify-between items-center p-6 bg-black bg-opacity-30 backdrop-blur-sm">
//         <div className="flex items-center space-x-2">
//           <Rocket className="w-8 h-8 text-blue-400 animate-bounce" />
//           <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             SpaceDomain
//           </span>
//         </div>
//         <div className="hidden md:flex space-x-8">
//           <a href="#" className="hover:text-blue-400 transition-colors duration-300">Explore</a>
//           <a href="#" className="hover:text-blue-400 transition-colors duration-300">Missions</a>
//           <a href="#" className="hover:text-blue-400 transition-colors duration-300">Technology</a>
//           <a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
//         </div>
//         <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
//           Launch Now
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
//         <div className="mb-8 relative">
//           <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin mx-auto mb-8 opacity-20"></div>
//           <Globe 
//             className="w-24 h-24 text-blue-400 absolute top-4 left-1/2 transform -translate-x-1/2 animate-pulse" 
//             style={{ transform: `translateX(-50%) rotate(${scrollY * 0.5}deg)` }}
//           />
//         </div>
        
//         <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent animate-fadeIn">
//           EXPLORE THE
//           <br />
//           <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//             SPACE DOMAIN
//           </span>
//         </h1>
        
//         <p className="text-xl md:text-2xl mb-12 max-w-3xl text-gray-300 leading-relaxed animate-fadeIn animation-delay-300">
//           Pioneering the future of space exploration with cutting-edge technology, 
//           advanced satellite systems, and revolutionary space infrastructure solutions.
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn animation-delay-600">
//           <button className="group bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center gap-2">
//             Begin Mission
//             <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button className="border-2 border-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 hover:scale-105">
//             Watch Demo
//           </button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="relative z-10 py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Advanced Space Solutions
//           </h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Satellite className="w-12 h-12" />,
//                 title: "Satellite Networks",
//                 description: "Deploy and manage advanced satellite constellations for global communications and Earth observation.",
//                 color: "from-blue-500 to-cyan-500"
//               },
//               {
//                 icon: <Shield className="w-12 h-12" />,
//                 title: "Space Defense",
//                 description: "Protect critical space assets with state-of-the-art defensive systems and threat detection.",
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 icon: <Zap className="w-12 h-12" />,
//                 title: "Quantum Propulsion",
//                 description: "Revolutionary propulsion technology enabling faster and more efficient space travel.",
//                 color: "from-green-500 to-teal-500"
//               }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-10 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
//                 style={{
//                   transform: `translateY(${scrollY * -0.05}px)`,
//                   animationDelay: `${index * 200}ms`,
//                 }}
//               >
//                 <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   {feature.description}
//                 </p>
//                 <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="relative z-10 py-20 px-6 bg-black bg-opacity-20 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             {[
//               { number: "500+", label: "Active Satellites" },
//               { number: "12", label: "Space Missions" },
//               { number: "50+", label: "Partner Nations" },
//               { number: "24/7", label: "Mission Control" }
//             ].map((stat, index) => (
//               <div key={index} className="group">
//                 <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-300 text-lg">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="relative z-10 py-20 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <Star className="w-16 h-16 text-yellow-400 mx-auto mb-8 animate-spin" />
//           <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
//             Ready to Reach for the Stars?
//           </h2>
//           <p className="text-xl text-gray-300 mb-12 leading-relaxed">
//             Join us in shaping the future of space exploration. Together, we'll unlock the mysteries of the cosmos and establish humanity's presence among the stars.
//           </p>
//           <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-3 mx-auto">
//             <Users className="w-6 h-6" />
//             Join the Mission
//             <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative z-10 py-12 px-6 bg-black bg-opacity-40 backdrop-blur-sm border-t border-gray-800">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center space-x-2 mb-4 md:mb-0">
//             <Rocket className="w-6 h-6 text-blue-400" />
//             <span className="text-xl font-bold">SpaceDomain</span>
//           </div>
//           <div className="text-gray-400">
//             © 2025 SpaceDomain. Exploring infinity, one mission at a time.
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
//         .animation-delay-300 { animation-delay: 0.3s; }
//         .animation-delay-600 { animation-delay: 0.6s; }
//       `}</style>
//     </div>
//   );
// };

// export default SpaceHomepage;