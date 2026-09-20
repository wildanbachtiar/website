import React from 'react';
import { SOCIAL_LINKS } from '../data/projects';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer
      id="main-footer"
      className={`w-full border-t transition-colors duration-200 py-10 px-4 sm:px-6 md:px-12 ${
        isDark
          ? 'bg-[#131313] border-white/10 text-neutral-400'
          : 'bg-white border-neutral-200 text-neutral-600'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm font-normal text-center sm:text-left">
          © 2026 Wildan Bachtiar
        </p>

        <div className="flex items-center gap-3">
          {/* Instagram */}
          <a
            id="footer-instagram-link"
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile @katawebe"
            className={`rounded-full w-10 h-10 flex items-center justify-center transition-all border ${
              isDark
                ? 'border-white/10 hover:border-white/40 text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10'
                : 'border-neutral-300 hover:border-neutral-500 text-neutral-700 hover:text-black bg-neutral-100 hover:bg-neutral-200'
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z" />
            </svg>
          </a>

          {/* Threads */}
          <a
            id="footer-threads-link"
            href={SOCIAL_LINKS.threads}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads profile @katawebe"
            className={`rounded-full w-10 h-10 flex items-center justify-center transition-all border ${
              isDark
                ? 'border-white/10 hover:border-white/40 text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10'
                : 'border-neutral-300 hover:border-neutral-500 text-neutral-700 hover:text-black bg-neutral-100 hover:bg-neutral-200'
            }`}
          >
            <svg
              aria-label="Threads"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 192 192"
            >
              <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            id="footer-linkedin-link"
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile Wildan Bachtiar"
            className={`rounded-full w-10 h-10 flex items-center justify-center transition-all border ${
              isDark
                ? 'border-white/10 hover:border-white/40 text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10'
                : 'border-neutral-300 hover:border-neutral-500 text-neutral-700 hover:text-black bg-neutral-100 hover:bg-neutral-200'
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9.29192 9.29151H12.6018V10.9786H12.6381C13.1427 10.0689 14.6331 9.14516 16.476 9.14516C20.013 9.14516 21 11.0231 21 14.5016V20.9996H17.4876V15.142C17.4876 13.5849 16.8659 12.2185 15.4117 12.2185C13.6462 12.2185 12.8043 13.4139 12.8043 15.3762V20.9996H9.29192V9.29151ZM3.43788 20.9996H6.95031V9.29151H3.43788V20.9996ZM7.38936 5.19368C7.38949 5.48192 7.33284 5.76737 7.22264 6.03372C7.11244 6.30007 6.95085 6.5421 6.74711 6.74599C6.54336 6.94988 6.30145 7.11165 6.03518 7.22203C5.76892 7.33243 5.48351 7.38928 5.19526 7.38936C4.90702 7.38944 4.62158 7.33273 4.35526 7.22248C4.08893 7.11224 3.84693 6.9506 3.64307 6.74682C3.43922 6.54304 3.2775 6.30109 3.16716 6.0348C3.05682 5.76851 3.00002 5.4831 3 5.19485C2.99995 4.61286 3.23108 4.05468 3.64254 3.64307C4.054 3.23147 4.6121 3.00016 5.19409 3C5.77609 2.99984 6.33431 3.23086 6.74599 3.64225C7.15767 4.05363 7.38909 4.61169 7.38936 5.19368Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
