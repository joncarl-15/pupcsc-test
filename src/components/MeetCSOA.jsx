import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MeetCSOA = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [leftRef, leftVisible] = useScrollAnimation()
  const [rightRef, rightVisible] = useScrollAnimation()

  return (
    <section id="csoa" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-fade-in ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet the COSOA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            --
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftRef}
            className={`glass rounded-2xl p-8 shadow-xl hover-lift scroll-fade-in-left ${leftVisible ? 'animate-in' : ''}`}
          >
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              About COSOA
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              --
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              --
            </p>
            <p className="text-gray-700 leading-relaxed">
              --
            </p>
          </div>

          <div 
            ref={rightRef}
            className={`space-y-6 scroll-fade-in-right ${rightVisible ? 'animate-in' : ''}`}
          >
            <div className="glass rounded-2xl p-6 shadow-lg hover-lift stagger-1">
              <h4 className="text-xl font-semibold text-red-600 mb-3">
                Purpose
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>--</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>--</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>--</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>--</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>--</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 shadow-lg hover-lift stagger-2">
              <h4 className="text-xl font-semibold text-red-600 mb-3">
                Key Functions
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>--</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>--</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>--</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-red-600 mr-2">•</span>
                  <span>--</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetCSOA

