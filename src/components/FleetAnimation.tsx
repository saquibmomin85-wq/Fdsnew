import React from 'react';
import { motion } from 'motion/react';
import { Bike, Car, Truck, Zap, ShieldCheck, Clock } from 'lucide-react';

const PremiumCard = ({ icon: Icon, title, subtitle, badge, color, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {/* Glow Effect behind card */}
      <div className={`absolute -inset-0.5 bg-gradient-to-b ${color} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500`}></div>
      
      {/* Card Content */}
      <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl overflow-hidden">
        {/* Top Shine */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        {/* Icon Container */}
        <div className="flex justify-between items-start mb-8">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${color} shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}>
            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md">
            {badge}
          </span>
        </div>

        {/* Text */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          {subtitle}
        </p>

        {/* Animated Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: delay + 0.5, ease: "circOut" }}
            className={`h-full bg-gradient-to-r ${color}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export function FleetAnimation() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Ambient Light Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Premium Fleet Selection
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Delivery at the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Speed of Business</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Choose the perfect vehicle for your needs. From urgent documents to heavy cargo, our premium fleet is ready to deploy instantly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PremiumCard 
            icon={Bike}
            title="FDS Moto"
            subtitle="The fastest way to move documents and small parcels through city traffic. Guaranteed under 60 mins."
            badge="Urgent"
            color="from-amber-500 to-orange-600"
            delay={0.3}
          />
          <PremiumCard 
            icon={Car}
            title="FDS Express"
            subtitle="Secure, climate-controlled transport for sensitive packages and medium-sized boxes."
            badge="Popular"
            color="from-blue-500 to-indigo-600"
            delay={0.4}
          />
          <PremiumCard 
            icon={Truck}
            title="FDS Cargo"
            subtitle="Heavy-duty logistics for furniture, equipment, and bulk orders. Professional handling included."
            badge="Heavy Load"
            color="from-emerald-500 to-teal-600"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
