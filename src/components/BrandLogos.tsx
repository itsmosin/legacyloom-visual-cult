
import { motion } from "framer-motion";

const BrandLogos = () => {
  return (
    <div className="pt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-16 items-center justify-items-center">
        {/* MTV Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="w-32 lg:w-24 aspect-auto"
        >
          <img 
            src="/lovable-uploads/8edf337d-0006-40ad-ab3d-e12bcfb1da68.png" 
            alt="MTV" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* 111PG Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="w-32 lg:w-24 aspect-auto"
        >
          <img 
            src="/lovable-uploads/8c90bbb0-2170-45e6-9a98-a394e09dc4fe.png" 
            alt="111PG" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Userology Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="w-32 lg:w-24 aspect-auto"
        >
          <img 
            src="/lovable-uploads/074abf38-69a2-415b-b882-a25faac38dba.png" 
            alt="Userology" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* SayF Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="w-32 lg:w-24 aspect-auto"
        >
          <img 
            src="/lovable-uploads/227e1629-b5ad-4e1b-b1c6-940645d288a8.png" 
            alt="SayF" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Securr Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="w-32 lg:w-24 aspect-auto"
        >
          <img 
            src="/lovable-uploads/02b4f325-7529-4a53-82dd-8f432af9a6b1.png" 
            alt="Securr" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* D Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="w-32 lg:w-24 aspect-auto"
        >
          <img 
            src="/lovable-uploads/0db71c67-a3aa-4a02-a57f-d37570bf719d.png" 
            alt="D" 
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BrandLogos;
