import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Cpu, User, Grid } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Favicon URLs for tools (sourced from web results or general knowledge)
const toolIcons = {
  zapier:
    "data:image/png;base64,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",
  make: "https://www.make.com/favicon.ico",
  ghl: "data:image/png;base64,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",
  n8n: "https://n8n.io/favicon.ico",
  aiAgent: "https://harpa.ai/favicon.ico", // Using HARPA AI as a proxy for AI Agent
  mondayCom: "https://monday.com/favicon.ico",
  airtable: "https://airtable.com/favicon.ico",
  googleSheets:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAEHCAMAAADI2meYAAAAclBMVEU0qFP///8YgDgup09gtnQppUuQyp13wIgcokQjpEgRoT+327+v2LiZzqXK5dAijUHa7N4Aeirv9/FOsGdmuXpErl9VmWbC4cnR6NZRl2NatXBdnW2CxJFin3EAnjcAnjiq1rTz+fRkqnUOiDYslkp1sITgaN0YAAADUUlEQVR4nO3d61abQBhG4ZkgFIhWQ0JJ09RDbe//FkuiMUAODAydmc/u/cs/rPW8mqAsEZVuVMyTVancFf3Stqnjh9Umz+LIIV+p1++T+ddl6ta+635hO+Dg3+bu9bV/Zjvg3b/MPOh3ftsBb/4y9sLf+S0H7P1LT/y9327Azr/18+I5+K0G1P517ov/7rcZUPtLH2eelt9igNJV6o3/4R8/QOmNv0//0T96gCr8vfqb/rED1NzbyaftHzlAJb7O/V3/uAFq5fHl3/aPGqBc/rzf4x8zwKf+xD9bfJPtHz4gMP/gAaH5hw4Izj9wQHj+YQMC9A8aEKJ/yIAg/QMGhOk3HxCo33hAqH7TAcH6DQeE6zcbELDfaEDIfpMBQfsNBoTtny1+yPb3Dgjd3zcgeH/PgPD91wcI8F8dIMF/bYAI/5UBMvyXBwjxXxwgxX9pgBj/hQFy/OcHCPKfHSDJf26AKP+ZAbL8pwOE+U8GSPPPFj9l+zsD5PnbAwT6WwMk+psDRPobA2T6jwOE+j8GSPUfBoj1vw+Q638bINi/HyDZvxvg1//73q7XP3791vm8+Y2IiIiIiIiIiIiIiGh8sZ+m4pd3iY/uJnq0QHRzctefm26m+e0Wfvz48ePHjx8/ftn+4nbe323HYnRM4cT/8Jj199jxGx3z4MZv8sDEvOM3ecpfiv9c+PHbhB+/Tfjx24Qfv0348dv06fxP/+j68cmNv3i+7e+54zc6xs31u7Pw48ePHz9+/Pjx468rkrv+ko7F6BhHv/96Mrj37uT6xeAYR9cv4q8f8Z8P/9nw47cJP36b8OO3CT9+m/AH5n9M+zu5fjQ5xo3/5atBVcdfmRz04sTvLPz48ePHjx8/fvz/pV+VX/w00fMT6q+An6biExERERERERERERERERERERERERFRQE12k6uXSrWSfJtrtFLJZP9mzkNxouaZb4RFWaUKk79sDbW8UHoj9w0QbbTSlcmfI4dZWtV+XUr9AkSl3vnXUt8B+Xrv11uZp6Bsq9/8einxe0C81Ae/LuUNiEt99L8spb2EsqVu+Ov3QC7pLBTlW93263WZSlkQpeVad/1aV5s8i0PfEMVZvmk8XKLh17qYJ6uwrwfKVTJvPaXyL+v8f6wdM0vhAAAAAElFTkSuQmCC",
  chatgpt: "https://openai.com/favicon.ico",
};

// Star component for background
const Star = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{
      scale: [0.7, 1, 0.7],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: Math.random() * 2 + 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute w-1 h-1 bg-white rounded-full"
    style={style}
  />
);

export const PortfolioSection = () => {
  const navigate = useNavigate();
  const [islamabadTime, setIslamabadTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      } as Intl.DateTimeFormatOptions;
      setIslamabadTime(new Date().toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSeeMoreClick = () => {
    navigate("/tech-stack");
  };
  const handleProfileClick = () => {
    navigate("/about-me");
  };
  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };

  // Generate random stars
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    },
  }));

  return (
    <div className="min-h-screen w-full bg-[#000000] text-[#FFFFFF] relative overflow-hidden pt-8 mt-0">
      {/* Animated Stars Background */}
      {stars.map((star, i) => (
        <Star key={i} style={star.style} />
      ))}

      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, #8B5CF6 0%, transparent 50%)",
            "radial-gradient(circle at 30% 70%, #EC4899 0%, transparent 50%)",
            "radial-gradient(circle at 70% 30%, #8B5CF6 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Vertical Location Block (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, y: -5, cursor: "pointer" }}
            transition={{ duration: 0.2 }}
            className="w-full md:w-1/4 bg-gradient-to-br from-[#1A0B3B] to-[#2D1B4D] rounded-2xl p-6 shadow-lg border border-[#8B5CF6/20] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-8 h-10" />
              <h3 className="text-lg font-semibold text-[#FFFFFF]">Location</h3>
            </div>
            <div className="text-[#D1D5DB] text-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtbQoA16OpDrn0CPz6mgjPFdyZmvL6J_kLw&s"
                alt="Islamabad Map"
                className="w-full h-60 object-cover rounded-lg mb-10"
              />
              <p className="text-2xl font-bold mb-0">Islamabad, Pakistan</p>
              <p className="text-sm">{islamabadTime}</p>
            </div>
          </motion.div>

          {/* Horizontal Tech Stack Block (Starting from neck of Location block) */}
          <div className="w-full md:w-3/4 flex flex-col gap-8">
            {/* Tech Stack (Horizontal, aligned at the top of Location block) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5, cursor: "pointer" }}
              transition={{ duration: 0.2 }}
              onClick={handleSeeMoreClick}
              className="bg-gradient-to-br from-[#1A0B3B] to-[#2D1B4D] rounded-2xl p-6 md:p-6 shadow-lg border border-[#8B5CF6/20] transition-all duration-300 h-64 md:h-64 relative backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 md:gap-4 mb-4 md:mb-4">
                <motion.div
                  animate={{
                    rotateY: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Cpu className="w-8 md:w-8 h-8 md:h-8" />
                </motion.div>
                <h3 className="text-lg md:text-lg font-semibold text-[#FFFFFF]">
                  Tech Stack
                </h3>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-4 items-center">
                {/* Mobile: Show only 3 tools (zapier, make, ghl) */}
                {Object.entries(toolIcons)
                  .slice(0, 3) // Show only the first 3 tools on mobile screens (< 640px)
                  .map(([tool, icon]) => (
                    <motion.div
                      key={tool}
                      className="flex flex-col items-center text-center"
                      whileHover={{ scale: 1.1, cursor: "pointer" }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img
                        src={icon}
                        alt={tool}
                        className="w-10 md:w-10 h-10 md:h-10 object-contain rounded-full bg-[#FFFFFF]/10 p-1"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="text-xs md:text-xs text-[#D1D5DB] mt-1 line-clamp-1">
                        {tool.charAt(0).toUpperCase() +
                          tool
                            .slice(1)
                            .toLowerCase()
                            .replace("Com", ".com")
                            .replace("Sheets", "Sheets")}
                      </span>
                    </motion.div>
                  ))}
                {/* Desktop/Tablet: Show all 9 tools (no change) */}
                {['md', 'lg'].includes(window.innerWidth >= 768 ? 'md' : '') && Object.entries(toolIcons)
                  .slice(3) // Show remaining 6 tools on desktop/tablet (≥ 768px)
                  .map(([tool, icon]) => (
                    <motion.div
                      key={tool}
                      className="flex flex-col items-center text-center hidden md:flex"
                      whileHover={{ scale: 1.1, cursor: "pointer" }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img
                        src={icon}
                        alt={tool}
                        className="w-10 md:w-10 h-10 md:h-10 object-contain rounded-full bg-[#FFFFFF]/10 p-1"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="text-xs md:text-xs text-[#D1D5DB] mt-1 line-clamp-1">
                        {tool.charAt(0).toUpperCase() +
                          tool
                            .slice(1)
                            .toLowerCase()
                            .replace("Com", ".com")
                            .replace("Sheets", "Sheets")}
                      </span>
                    </motion.div>
                  ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1, x: 10 }}
                className="absolute bottom-14 right-14 md:bottom-14 md:right-14 flex items-center gap-2 text-[#A78BFA] hover:text-[#8B5CF6] transition-colors"
              >
                <span className="text-sm md:text-sm">See More</span>
                <ArrowRight className="w-4 md:w-4 h-4 md:h-4" />
              </motion.button>
            </motion.div>

            {/* About Me and Pinboard (Two smaller blocks side by side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About Me */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5, cursor: "pointer" }}
                transition={{ duration: 0.2 }}
                onClick={handleProfileClick}
                className="bg-gradient-to-br from-[#2A1547] to-[#3B1E54] rounded-2xl p-6 shadow-md border border-[#8B5CF6/20] backdrop-blur-sm transition-all duration-300 h-48 relative overflow-hidden group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <User className="w-6 h-6" />
                  <h3 className="text-lg font-semibold text-[#FFFFFF]">
                    About Me
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Animated background elements */}
                    <motion.div
                      className="absolute w-32 h-32 bg-[#8B5CF6]/20 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute w-24 h-24 bg-[#EC4899]/20 rounded-full"
                      animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Profile content */}
                    <div className="z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xl font-bold text-[#FFFFFF]">
                          LR
                        </span>
                      </div>
                      <p className="text-sm text-[#D1D5DB] mb-2">
                        Full Stack Developer
                      </p>
                      <div className="flex justify-center gap-2">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 bg-[#8B5CF6]/20 rounded-full text-xs text-[#A78BFA]"
                        >
                          Automation
                        </motion.span>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 bg-[#EC4899]/20 rounded-full text-xs text-[#A78BFA]"
                        >
                          AI
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8B5CF6]/90 to-[#EC4899]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#FFFFFF] flex items-center gap-2">
                      View Profile <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Pinboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5, cursor: "pointer" }}
                transition={{ duration: 0.2 }}
                onClick={handlePortfolioClick}
                className="bg-gradient-to-br from-[#1A0B3B] to-[#2D1B4D] rounded-2xl p-6 shadow-md border border-[#8B5CF6/20] backdrop-blur-sm transition-all duration-300 h-48 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-2">
                    <motion.div
                      animate={{
                        rotate: [0, 90, 180, 270, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      <Grid className="w-6 h-6 text-[#FFFFFF]" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-[#FFFFFF]">
                      Pinboard
                    </h3>
                  </div>
                  <p className="text-[#D1D5DB] text-sm">
                    Explore my designs, experiments, and automation workflows.
                  </p>
                </div>

                {/* Static Image (Bottom 30% with Reduced Visibility) */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[30%] md:h-[30%] bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('src/assets/project.PNG')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B3B]/80 to-transparent opacity-70" />
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-[#D7B9FF]/30 rounded-2xl blur-md opacity-20 pointer-events-none" />

                {/* Hover Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#9D4EDD]/20 to-[#F472B6]/20 opacity-0 hover:opacity-30 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};