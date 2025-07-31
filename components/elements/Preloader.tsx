'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function SpinnerLoader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div 
        style={{
          animation: 'spin 1s linear infinite',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <svg 
          width="48"
          height="48"
          style={{ color: '#6e4ef2', display: 'block' }}
          viewBox="0 0 24 24"
        >
          <path 
            fill="currentColor" 
            d="M6 2v6h.01L12 12l5.99-4H18V2H6zm0 20h12v-6h-.01L12 12l-5.99 4H6v6z"
          />
        </svg>
      </div>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @media (max-width: 768px) {
          div[style*="width: 48px"] {
            width: 40px !important;
            height: 40px !important;
          }
          svg[width="48"] {
            width: 40px !important;
            height: 40px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="width: 48px"] {
            width: 36px !important;
            height: 36px !important;
          }
          svg[width="48"] {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    console.log('Preloader mounted - should be visible now');
    
    // Detect current theme
    const detectTheme = () => {
      const theme = document.documentElement.getAttribute('data-bs-theme') || 
                   localStorage?.getItem('theme') || 'dark';
      setIsDarkMode(theme === 'dark');
    };
    
    // Initial theme detection
    detectTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      detectTheme();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme']
    });

    // Ensure minimum loading time of 1 second to see the loader
    const minLoadTime = 1000; // 1 second
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);
      
      console.log(`Page loaded after ${elapsedTime}ms, waiting ${remainingTime}ms more`);
      
      setTimeout(() => {
        console.log('Hiding preloader now');
        setIsLoading(false);
      }, remainingTime);
    };

    // Always wait for the minimum time, regardless of load state
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback: Force hide after 5 seconds maximum
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback: Force hiding preloader after 5 seconds');
      setIsLoading(false);
    }, 5000);

    return () => {
      observer.disconnect();
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <motion.div
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: isDarkMode ? '#1f1f24' : '#ffffff',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ textAlign: 'center' }}>
        <SpinnerLoader />
        <motion.p
          style={{ 
            color: '#6e4ef2',
            marginTop: '16px',
            fontSize: '18px',
            fontWeight: '500'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}
