import React from 'react'
import Slider from 'react-slick'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import cscLogo from '../Picture/csc-logo.png'
import cscpres from '../Picture/president.png'
import vpres from '../Picture/vp.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MeetOfficers = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation()
  const officers = [
    {
      id: 1,
      name: 'Ms. Franz Bondeci',
      position: 'President',
      image: cscpres,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'Mr. Mark Aron Barretto Reyes',
      position: 'Vice President',
      image: vpres,
      social: {
        facebook: '#',
      }
    },
    {
      id: 3,
      name: 'Nehemiah Yzabhll F. Gallardot',
      position: 'General Secretary',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 4,
      name: 'Harry Jay H. Sevillena',
      position: 'Assistant Secretary',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 5,
      name: 'Kate Angel E. Driz',
      position: 'General Treasurer',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 5,
      name: 'Janelle L. Cantillana',
      position: 'General Auditor',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 6,
      name: 'Precious Mikyla Montes',
      position: 'Chairperson, Academic Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 7,
      name: 'Francis S. Flores',
      position: 'Vice Chairperson, Academic Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 8,
      name: 'Kurl Paulo L. Bulaklak',
      position: 'Chairperson, Cultural Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 9,
      name: 'Jorgia Beatriz C. Albos',
      position: 'Vice Chairperson, Cultural Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 10,
      name: 'Jolan R. Maquiñana',
      position: 'Chairperson, Institutional Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 11,
      name: 'Juan Jordan Emmanuel Revediso',
      position: 'Vice Chairperson, Institutional Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 12,
      name: 'Darren A. Morelo',
      position: 'Chairperson, Networking Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 13,
      name: 'Reiven Kyle M. Velano',
      position: 'Chairperson, PCA Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 14,
      name: 'Janella E. Cantillana',
      position: 'Vice Chairperson, PCA Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 15,
      name: 'Jon Carlo A. Marasigan',
      position: 'Member, PCA Committee (Web Developer)',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 16,
      name: 'Jayzel L. Pedrezuela',
      position: 'Chairperson, Sports Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 17,
      name: 'Ann Jillian Pauleen B. Avila',
      position: 'Vice Chairperson, Sports Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 18,
      name: 'Noelle Cassandra A. Perida',
      position: 'Member, Sports Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 19,
      name: 'Joy Ann E. Tormon',
      position: 'Chairperson, S.T.R.A.W Committee',
      image: cscLogo,
      social: {
        facebook: '#',
      }
    },
    {
      id: 20,
      name: 'Aina Mae L. Lascano',
      position: 'Vice Chairperson, S.T.R.A.W Committee',
      image: cscLogo,
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
    <section id="officers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={sectionRef}
          className={`text-center mb-16 scroll-fade-in ${sectionVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet the Officers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the dedicated leaders serving the student body
          </p>
        </div>

        <Slider {...settings} className="officer-slider">
          {officers.map((officer) => (
            <div key={officer.id} className="px-4">
              <div className="glass rounded-2xl p-6 shadow-xl hover-lift hover-glow smooth-transition">
                <div className="relative mb-4">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-600/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-1">
                  {officer.name}
                </h3>
                <p className="text-orange-600 font-medium text-center mb-3">
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

export default MeetOfficers

