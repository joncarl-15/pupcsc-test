import React from 'react'

const MeetCSOA = () => {
  return (
    <section id="csoa" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet the COSOA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            --
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass rounded-2xl p-8 shadow-xl">
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

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 shadow-lg">
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
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>--</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 shadow-lg">
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
                <li className="flex items-start">
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

