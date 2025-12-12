import React from "react";

const PizzaLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center z-50 overflow-hidden">
      <style>
        {`
          @keyframes pizzaRotate {
            0% { transform: rotate(0deg) scale(1); }
            100% { transform: rotate(360deg) scale(1); }
          }
          
          @keyframes sliceSeparate1 {
            0%, 20% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
            30% { transform: translate(0, -10px) rotate(-3deg); opacity: 1; }
            100% { transform: translate(0, -10px) rotate(-3deg); opacity: 1; }
          }
          
          @keyframes sliceSeparate2 {
            0%, 20% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
            30% { transform: translate(10px, 0) rotate(3deg); opacity: 1; }
            100% { transform: translate(10px, 0) rotate(3deg); opacity: 1; }
          }
          
          @keyframes sliceSeparate3 {
            0%, 20% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
            30% { transform: translate(0, 10px) rotate(3deg); opacity: 1; }
            100% { transform: translate(0, 10px) rotate(3deg); opacity: 1; }
          }
          
          @keyframes sliceSeparate4 {
            0%, 20% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
            30% { transform: translate(-10px, 0) rotate(-3deg); opacity: 1; }
            100% { transform: translate(-10px, 0) rotate(-3deg); opacity: 1; }
          }
          
          /* Hand 1 - Top slice */
          @keyframes hand1Take {
            0%, 35% { transform: translate(0, -150px) rotate(0deg); opacity: 0; }
            40% { transform: translate(0, -60px) rotate(-10deg); opacity: 1; }
            45% { transform: translate(0, -10px) rotate(-5deg); opacity: 1; }
            50%, 70% { transform: translate(0, -10px) rotate(-5deg); opacity: 1; }
            75% { transform: translate(0, -150px) rotate(-20deg); opacity: 0; }
            100% { opacity: 0; }
          }
          
          /* Hand 2 - Right slice */
          @keyframes hand2Take {
            0%, 43% { transform: translate(150px, 0) rotate(90deg); opacity: 0; }
            48% { transform: translate(60px, 0) rotate(80deg); opacity: 1; }
            53% { transform: translate(10px, 0) rotate(85deg); opacity: 1; }
            58%, 70% { transform: translate(10px, 0) rotate(85deg); opacity: 1; }
            75% { transform: translate(150px, 0) rotate(110deg); opacity: 0; }
            100% { opacity: 0; }
          }
          
          /* Hand 3 - Bottom slice */
          @keyframes hand3Take {
            0%, 51% { transform: translate(0, 150px) rotate(180deg); opacity: 0; }
            56% { transform: translate(0, 60px) rotate(170deg); opacity: 1; }
            61% { transform: translate(0, 10px) rotate(175deg); opacity: 1; }
            66%, 70% { transform: translate(0, 10px) rotate(175deg); opacity: 1; }
            75% { transform: translate(0, 150px) rotate(200deg); opacity: 0; }
            100% { opacity: 0; }
          }
          
          /* Hand 4 - Left slice */
          @keyframes hand4Take {
            0%, 59% { transform: translate(-150px, 0) rotate(-90deg); opacity: 0; }
            64% { transform: translate(-60px, 0) rotate(-80deg); opacity: 1; }
            69% { transform: translate(-10px, 0) rotate(-85deg); opacity: 1; }
            74%, 78% { transform: translate(-10px, 0) rotate(-85deg); opacity: 1; }
            83% { transform: translate(-150px, 0) rotate(-110deg); opacity: 0; }
            100% { opacity: 0; }
          }
          
          /* All hands lift together */
          @keyframes handsLiftTogether {
            0%, 80% { transform: translateY(0) scale(1); opacity: 0; }
            82% { opacity: 1; transform: translateY(0) scale(1); }
            90% { opacity: 1; transform: translateY(-150px) scale(1.1); }
            100% { opacity: 0; transform: translateY(-250px) scale(1.2); }
          }
          
          @keyframes sliceDisappear1 {
            0%, 50% { opacity: 1; }
            75% { opacity: 0; transform: translate(0, -40px) rotate(-20deg) scale(0.5); }
            100% { opacity: 0; }
          }
          
          @keyframes sliceDisappear2 {
            0%, 58% { opacity: 1; }
            75% { opacity: 0; transform: translate(40px, 0) rotate(20deg) scale(0.5); }
            100% { opacity: 0; }
          }
          
          @keyframes sliceDisappear3 {
            0%, 66% { opacity: 1; }
            75% { opacity: 0; transform: translate(0, 40px) rotate(30deg) scale(0.5); }
            100% { opacity: 0; }
          }
          
          @keyframes sliceDisappear4 {
            0%, 74% { opacity: 1; }
            83% { opacity: 0; transform: translate(-40px, 0) rotate(-30deg) scale(0.5); }
            100% { opacity: 0; }
          }
          
          .pizza-rotate {
            animation: pizzaRotate 2s linear;
          }
          
          .slice-1 {
            animation: sliceSeparate1 1s ease-out 2s forwards, sliceDisappear1 1s ease-out 2s forwards;
          }
          
          .slice-2 {
            animation: sliceSeparate2 1s ease-out 2s forwards, sliceDisappear2 1s ease-out 2s forwards;
          }
          
          .slice-3 {
            animation: sliceSeparate3 1s ease-out 2s forwards, sliceDisappear3 1s ease-out 2s forwards;
          }
          
          .slice-4 {
            animation: sliceSeparate4 1s ease-out 2s forwards, sliceDisappear4 1s ease-out 2s forwards;
          }
          
          .hand-1 {
            animation: hand1Take 1s ease-in-out 3s forwards;
          }
          
          .hand-2 {
            animation: hand2Take 1s ease-in-out 3s forwards;
          }
          
          .hand-3 {
            animation: hand3Take 1s ease-in-out 3s forwards;
          }
          
          .hand-4 {
            animation: hand4Take 1s ease-in-out 3s forwards;
          }
          
          .all-hands-lift {
            animation: handsLiftTogether 1s ease-in-out 6s forwards;
          }
        `}
      </style>

      <div className="relative w-64 h-64">
        {/* Hand 1 - Top */}
        <div className="hand-1 absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 z-30">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            <g>
              <ellipse
                cx="50"
                cy="60"
                rx="18"
                ry="22"
                fill="#ffdbac"
                stroke="#d4a574"
                strokeWidth="2"
              />
              <ellipse
                cx="36"
                cy="56"
                rx="7"
                ry="13"
                fill="#ffdbac"
                stroke="#d4a574"
                strokeWidth="2"
              />
              <rect
                x="46"
                y="32"
                width="6"
                height="23"
                rx="3"
                fill="#ffdbac"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="52"
                y="30"
                width="6"
                height="25"
                rx="3"
                fill="#ffdbac"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="58"
                y="32"
                width="6"
                height="23"
                rx="3"
                fill="#ffdbac"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="64"
                y="35"
                width="5"
                height="20"
                rx="3"
                fill="#ffdbac"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>

        {/* Hand 2 - Right */}
        <div className="hand-2 absolute top-1/2 right-0 -translate-y-1/2 w-20 h-20 z-30">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            <g>
              <ellipse
                cx="50"
                cy="60"
                rx="18"
                ry="22"
                fill="#f5c4a0"
                stroke="#d4a574"
                strokeWidth="2"
              />
              <ellipse
                cx="36"
                cy="56"
                rx="7"
                ry="13"
                fill="#f5c4a0"
                stroke="#d4a574"
                strokeWidth="2"
              />
              <rect
                x="46"
                y="32"
                width="6"
                height="23"
                rx="3"
                fill="#f5c4a0"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="52"
                y="30"
                width="6"
                height="25"
                rx="3"
                fill="#f5c4a0"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="58"
                y="32"
                width="6"
                height="23"
                rx="3"
                fill="#f5c4a0"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="64"
                y="35"
                width="5"
                height="20"
                rx="3"
                fill="#f5c4a0"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>

        {/* Hand 3 - Bottom */}
        <div className="hand-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 z-30">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            <g>
              <ellipse
                cx="50"
                cy="60"
                rx="18"
                ry="22"
                fill="#ffe0c0"
                stroke="#d4a574"
                strokeWidth="2"
              />
              <ellipse
                cx="36"
                cy="56"
                rx="7"
                ry="13"
                fill="#ffe0c0"
                stroke="#d4a574"
                strokeWidth="2"
              />
              <rect
                x="46"
                y="32"
                width="6"
                height="23"
                rx="3"
                fill="#ffe0c0"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="52"
                y="30"
                width="6"
                height="25"
                rx="3"
                fill="#ffe0c0"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="58"
                y="32"
                width="6"
                height="23"
                rx="3"
                fill="#ffe0c0"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="64"
                y="35"
                width="5"
                height="20"
                rx="3"
                fill="#ffe0c0"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>

        {/* Hand 4 - Left */}
        <div className="hand-4 absolute top-1/2 left-0 -translate-y-1/2 w-20 h-20 z-30">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            <g>
              <ellipse
                cx="50"
                cy="60"
                rx="18"
                ry="22"
                fill="#ffd5b5"
                stroke="#d4a574"
                strokeWidth="2"
              />
              <ellipse
                cx="36"
                cy="56"
                rx="7"
                ry="13"
                fill="#ffd5b5"
                stroke="#d4a574"
                strokeWidth="2"
              />
              <rect
                x="46"
                y="32"
                width="6"
                height="23"
                rx="3"
                fill="#ffd5b5"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="52"
                y="30"
                width="6"
                height="25"
                rx="3"
                fill="#ffd5b5"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="58"
                y="32"
                width="6"
                height="23"
                rx="3"
                fill="#ffd5b5"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
              <rect
                x="64"
                y="35"
                width="5"
                height="20"
                rx="3"
                fill="#ffd5b5"
                stroke="#d4a574"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>

        {/* All Four Hands Together for Lift - shown at the end */}
        <div className="all-hands-lift absolute inset-0 flex items-center justify-center z-40">
          <div className="relative w-48 h-48">
            {/* Top hand */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-lg"
              >
                <g>
                  <ellipse
                    cx="50"
                    cy="60"
                    rx="18"
                    ry="22"
                    fill="#ffdbac"
                    stroke="#d4a574"
                    strokeWidth="2"
                  />
                  <rect
                    x="52"
                    y="30"
                    width="6"
                    height="25"
                    rx="3"
                    fill="#ffdbac"
                    stroke="#d4a574"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            </div>
            {/* Right hand */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-16 h-16 rotate-90">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-lg"
              >
                <g>
                  <ellipse
                    cx="50"
                    cy="60"
                    rx="18"
                    ry="22"
                    fill="#f5c4a0"
                    stroke="#d4a574"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
            {/* Bottom hand */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rotate-180">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-lg"
              >
                <g>
                  <ellipse
                    cx="50"
                    cy="60"
                    rx="18"
                    ry="22"
                    fill="#ffe0c0"
                    stroke="#d4a574"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
            {/* Left hand */}
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-16 h-16 -rotate-90">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-lg"
              >
                <g>
                  <ellipse
                    cx="50"
                    cy="60"
                    rx="18"
                    ry="22"
                    fill="#ffd5b5"
                    stroke="#d4a574"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Pizza Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-48 h-48 pizza-lift">
            {/* Whole Pizza with rotation */}
            <div className="pizza-rotate absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 shadow-2xl border-4 border-yellow-700">
              {/* Pepperoni */}
              <div className="absolute top-8 left-12 w-8 h-8 bg-red-700 rounded-full border-2 border-red-900"></div>
              <div className="absolute top-12 right-10 w-7 h-7 bg-red-700 rounded-full border-2 border-red-900"></div>
              <div className="absolute bottom-10 left-10 w-8 h-8 bg-red-700 rounded-full border-2 border-red-900"></div>
              <div className="absolute bottom-12 right-12 w-7 h-7 bg-red-700 rounded-full border-2 border-red-900"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-red-700 rounded-full border-2 border-red-900"></div>

              {/* Cheese texture */}
              <div className="absolute top-6 right-8 w-3 h-3 bg-yellow-300 rounded-full opacity-70"></div>
              <div className="absolute bottom-8 left-8 w-4 h-4 bg-yellow-300 rounded-full opacity-60"></div>
              <div className="absolute top-1/3 left-6 w-3 h-3 bg-yellow-300 rounded-full opacity-75"></div>
            </div>

            {/* Pizza Slices - appear after rotation */}
            <div className="absolute inset-0">
              {/* Slice 1 - Top */}
              <div
                className="slice-1 absolute inset-0 overflow-hidden"
                style={{
                  clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)",
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 border-4 border-yellow-700">
                  <div className="absolute top-12 right-10 w-7 h-7 bg-red-700 rounded-full border-2 border-red-900"></div>
                  <div className="absolute top-6 right-8 w-3 h-3 bg-yellow-300 rounded-full opacity-70"></div>
                </div>
              </div>

              {/* Slice 2 - Right */}
              <div
                className="slice-2 absolute inset-0 overflow-hidden"
                style={{
                  clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 border-4 border-yellow-700">
                  <div className="absolute bottom-12 right-12 w-7 h-7 bg-red-700 rounded-full border-2 border-red-900"></div>
                </div>
              </div>

              {/* Slice 3 - Bottom */}
              <div
                className="slice-3 absolute inset-0 overflow-hidden"
                style={{ clipPath: "polygon(50% 50%, 0% 100%, 50% 100%)" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 border-4 border-yellow-700">
                  <div className="absolute bottom-10 left-10 w-8 h-8 bg-red-700 rounded-full border-2 border-red-900"></div>
                  <div className="absolute bottom-8 left-8 w-4 h-4 bg-yellow-300 rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Slice 4 - Left */}
              <div
                className="slice-4 absolute inset-0 overflow-hidden"
                style={{ clipPath: "polygon(50% 50%, 0% 0%, 0% 50%)" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 border-4 border-yellow-700">
                  <div className="absolute top-8 left-12 w-8 h-8 bg-red-700 rounded-full border-2 border-red-900"></div>
                  <div className="absolute top-1/3 left-6 w-3 h-3 bg-yellow-300 rounded-full opacity-75"></div>
                </div>
              </div>
            </div>

            {/* Cut lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-1 bg-orange-800 opacity-30"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center rotate-90 pointer-events-none">
              <div className="w-full h-1 bg-orange-800 opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full">
          <h2 className="text-2xl font-bold text-gray-800 text-center animate-pulse">
            Loading Deliciousness...
          </h2>
          <div className="flex items-center justify-center space-x-2 mt-3">
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaLoader;
