import React from 'react'
import { FaGraduationCap, FaUsers, FaBook, FaAward } from 'react-icons/fa'
import pupLqImage from '../Picture/pup-lq.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AboutUniversity = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [leftRef, leftVisible] = useScrollAnimation()
  const [rightRef, rightVisible] = useScrollAnimation()
  const [statsRef, statsVisible] = useScrollAnimation()
  const [featuresRef, featuresVisible] = useScrollAnimation()
  const stats = [
    { icon: FaGraduationCap, number: '--', label: 'Students' },
    { icon: FaUsers, number: '--', label: 'Faculty Members' },
    { icon: FaBook, number: '--', label: 'Programs' },
    { icon: FaAward, number: '--', label: 'Years of Excellence' },
  ]

  return (
    <section id="university" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-fade-in ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About PUP Lopez Campus
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div 
            ref={leftRef}
            className={`glass rounded-2xl p-8 shadow-xl hover-lift scroll-fade-in-left ${leftVisible ? 'animate-in' : ''}`}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Polytechnic University of the Philippines Lopez Campus
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Established in 1979, the Polytechnic University of the Philippines (PUP) Lopez Campus is one of the
              provincial campuses of the university system, located in Lopez, Quezon. It was founded to extend
              quality and affordable education to students in the southern part of Quezon Province.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The campus offers various academic programs ranging from undergraduate to diploma courses,
              focusing on disciplines such as business, education, information technology, and engineering.
              Through these programs, PUP Lopez continues to uphold the university’s mission of providing
              accessible and transformative education for all.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Guided by the ideals of public service, academic excellence, and social responsibility,
              PUP Lopez produces graduates who are equipped with the skills, knowledge, and values needed to
              contribute to regional and national development.
            </p>
          </div>

          <div 
            ref={rightRef}
            className={`relative scroll-fade-in-right ${rightVisible ? 'animate-in' : ''}`}
          >
            <div className="glass rounded-2xl p-8 shadow-xl overflow-hidden hover-lift">
              <img
                src={pupLqImage}
                alt="PUP Campus"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="glass-dark rounded-lg p-4">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Our Legacy
                </h4>
                <p className="text-white/90">
                  Since 1979, PUP Lopez has been a beacon of accessible and quality education in Southern Quezon,
                  nurturing professionals and community leaders who help shape the nation’s progress.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 scroll-fade-in ${statsVisible ? 'animate-in' : ''}`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 text-center shadow-lg hover-lift stagger-${index + 1}`}
            >
              <stat.icon className="text-4xl text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div 
          ref={featuresRef}
          className={`mt-16 grid md:grid-cols-3 gap-6 scroll-fade-in ${featuresVisible ? 'animate-in' : ''}`}
        >
          <div className="glass rounded-2xl p-6 shadow-lg hover-lift stagger-1">
            <h4 className="text-xl font-semibold text-orange-600 mb-3">
              Quality Education
            </h4>
            <p className="text-gray-700">
              Comprehensive academic programs designed to meet industry standards and prepare students
              for successful careers.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 shadow-lg hover-lift stagger-2">
            <h4 className="text-xl font-semibold text-orange-600 mb-3">
              Research Excellence
            </h4>
            <p className="text-gray-700">
              Cutting-edge research initiatives that contribute to knowledge creation and address
              societal challenges.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 shadow-lg hover-lift stagger-3">
            <h4 className="text-xl font-semibold text-orange-600 mb-3">
              Community Service
            </h4>
            <p className="text-gray-700">
              Strong commitment to community engagement and extension services that benefit
              society at large.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUniversity

