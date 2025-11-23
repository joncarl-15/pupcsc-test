import React from 'react'
import Slider from 'react-slick'
import balikSintaImage from '../Picture/balik-sinta.jpg'
import leadershipImage from '../Picture/leadership.jpg'
import walkoutImage from '../Picture/walkout.jpg'
import hivImage from '../Picture/hiv.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ProgressSlideshow = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [sliderRef, sliderVisible] = useScrollAnimation()
  const [statsRef, statsVisible] = useScrollAnimation()
  const progressImages = [
    {
      id: 1,
      image: balikSintaImage,
      title: 'PUP Balik Sinta 2025',
    },
    {
      id: 2,
      image: leadershipImage,
      title: 'Leadership Training Seminar and Workshop 2025',
    },
    {
      id: 3,
      image: walkoutImage,
      title: 'PUP Walkout 2025',
    },
    {
      id: 4,
      image: hivImage,
      title: 'HIV Awareness Webinar',
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-fade-in ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Progress & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Celebrating milestones and accomplishments in serving the student community
          </p>
        </div>

        <div 
          ref={sliderRef}
          className={`glass-dark rounded-3xl p-4 md:p-8 shadow-2xl scroll-scale-in ${sliderVisible ? 'animate-in' : ''}`}
        >
          <Slider {...settings}>
            {progressImages.map((item) => (
              <div key={item.id} className="outline-none">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                    <h3 className="text-2xl md:text-4xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Progress Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 scroll-fade-in ${statsVisible ? 'animate-in' : ''}`}
        >
          <div className="glass-dark rounded-2xl p-6 text-center hover-lift stagger-1">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">--</div>
            <div className="text-gray-300">Events Organized</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 text-center hover-lift stagger-2">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">--</div>
            <div className="text-gray-300">Students Served</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 text-center hover-lift stagger-3">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">--</div>
            <div className="text-gray-300">Programs Launched</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 text-center hover-lift stagger-4">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">--</div>
            <div className="text-gray-300">Community Projects</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgressSlideshow

