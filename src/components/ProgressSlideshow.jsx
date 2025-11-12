import React from 'react'
import Slider from 'react-slick'

const ProgressSlideshow = () => {
  const progressImages = [
    {
      id: 1,
      image: '/Picture/balik-sinta.jpg',
      title: 'PUP Balik Sinta 2025',
      description: 'PUP Lopez proudly welcomed everyone back on campus, bitbit ang 𝙩𝙖𝙥𝙖𝙣𝙜, 𝙩𝙞𝙮𝙖𝙜𝙖, 𝙖𝙩 𝙥𝙪𝙨𝙤 for our unforgettable Balik Sinta 2025.'
    },
    {
      id: 2,
      image: '/Picture/leadership.jpg',
      title: 'Leadership Training Seminar and Workshop 2025',
      description: 'Leadership Training Seminar and Workshop 2025, with the theme: "𝘉𝘦 𝘢 𝘎𝘢𝘮𝘦 𝘊𝘩𝘢𝘯𝘨𝘦𝘳: 𝘓𝘦𝘢𝘥 𝘊𝘩𝘢𝘯𝘨𝘦 𝘸𝘪𝘵𝘩 𝘚𝘵𝘳𝘢𝘵𝘦𝘨𝘪𝘤 𝘝𝘪𝘴𝘪𝘰𝘯 𝘢𝘯𝘥 𝘛𝘳𝘢𝘯𝘴𝘧𝘰𝘳𝘮𝘢𝘵𝘪𝘷𝘦 𝘈𝘤𝘵𝘪𝘰𝘯".'
    },
    {
      id: 3,
      image: '/Picture/walkout.jpg',
      title: 'PUP Walkout 2025',
      description: 'Sa bawat 𝙨𝙞𝙜𝙖𝙬, 𝙥𝙡𝙖𝙠𝙖𝙧𝙙, 𝙖𝙩 𝙝𝙖𝙠𝙗𝙖𝙣𝙜 𝙣𝙜 𝙢𝙜𝙖 𝙄𝙨𝙠𝙤𝙡𝙖𝙧 𝙣𝙜 𝘽𝙖𝙮𝙖𝙣—naroon ang diwa ng pagkakaisa at paninindigan! Ang mga larawang ito ay patunay ng ating kolektibong lakas at tapang na humarap sa mga isyung patuloy na bumabagabag sa ating edukasyon at karapatan.'
    },
    {
      id: 4,
      image: '/Picture/hiv.jpg',
      title: 'HIV Awareness Webinar',
      description: 'A heartfelt thank you to everyone who joined us via 𝙑𝙞𝙖 𝙕𝙤𝙤𝙢 𝙖𝙣𝙙 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙇𝙞𝙫𝙚, and to our insightful resource speaker, 𝗞𝗹𝗮𝘂𝗱𝗲 𝗠. 𝗕𝘂ñ𝗮𝗴, 𝗥𝗡, 𝗠𝗦𝗡, 𝗟𝗣𝗧 for sharing valuable knowledge on Adolescent Reproductive Health and HIV awareness.'
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Progress & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Celebrating milestones and accomplishments in serving the student community
          </p>
        </div>

        <div className="glass-dark rounded-3xl p-4 md:p-8 shadow-2xl">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">--</div>
            <div className="text-gray-300">Events Organized</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">--</div>
            <div className="text-gray-300">Students Served</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">--</div>
            <div className="text-gray-300">Programs Launched</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">--</div>
            <div className="text-gray-300">Community Projects</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgressSlideshow

