const InaraLogo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    xs: "w-4 h-4",
    small: "w-6 h-6",
    default: "w-8 h-8", 
    large: "w-10 h-10",
    xl: "w-12 h-12"
  }

  const textSizes = {
    xs: "text-[10px]",
    small: "text-xs",
    default: "text-sm",
    large: "text-base", 
    xl: "text-lg"
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
            {/* Main IT Logo - Ultra Simple */}
      <div className={`${sizeClasses[size]} mb-1 flex items-center justify-center`}>
        {/* Letter I */}
        <div className="flex flex-col items-center mr-1">
          <div className="w-1 h-4 bg-[#3b82f6]" />
          <div className="w-1 h-1 bg-[#3b82f6] mt-1" />
        </div>
        
        {/* Letter T */}
        <div className="relative">
          <div className="w-4 h-1 bg-[#3b82f6] mb-1" />
          <div className="w-1 h-3 bg-[#3b82f6] mx-auto" />
        </div>
      </div>
      
      {/* Company Name */}
      <div className={`font-sans font-bold ${textSizes[size]} flex items-center justify-center`}>
        <span className="text-[#1e3a8a]">INARA</span>
        <span className="text-[#3b82f6] ml-1">TECH</span>
      </div>
    </div>
  )
}

export default InaraLogo 