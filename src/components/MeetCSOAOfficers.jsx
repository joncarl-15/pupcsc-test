import React from 'react'
import Slider from 'react-slick'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import cosoaImage from '../Picture/cosoa.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MeetCSOAOfficers = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation()
  const csoaOfficers = [
    {
      id: 1,
      name: 'Mx. Lorenzo V. Oriate',
      position: 'COSOA Chairperson',
      image: cosoaImage,
      social: {
        facebook: '#',
      }
    },
    {
      id: 2,
      name: 'Ms. Andrea Yeth S. Lusanta',
      position: 'COSOA Vice Chairperson',
      image: cosoaImage,
      social: {
        facebook: '#',
      }
    },
    {
      id: 3,
      name: 'MS. Kaela Maureen M. Miguel ',
      position: 'Director, Publicity and Creative Arts',
      image: cosoaImage,
      social: {
        facebook: '#',
      }
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-white-50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={sectionRef}
          className={`text-center mb-16 scroll-fade-in ${sectionVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet the COSOA Officers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            --
          </p>
        </div>

        <Slider {...settings} className="csoa-officer-slider">
          {csoaOfficers.map((officer) => (
            <div key={officer.id} className="px-4">
              <div className="glass rounded-2xl p-6 shadow-xl hover-lift hover-glow smooth-transition">
                <div className="relative mb-4">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-red-600/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-1">
                  {officer.name}
                </h3>
                <p className="text-red-600 font-medium text-center mb-3">
                  {officer.position}
                </p>
                <p className="text-gray-600 text-sm text-center mb-4">
                  {officer.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={officer.social.facebook}
                    className="text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default MeetCSOAOfficers

