/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'white-10': '#F2F3F2',
      'white-20': '#E5E6E4',
      'blue': '#2A4EE5',
      'black': '#2E353A',
      'red': '#FF3F3D'
    },
    extend: {
      backgroundImage: {
        // Background
        'heroes': "url('https://1.bp.blogspot.com/-0TT-6Jvu-Bk/XSeliVeMa9I/AAAAAAAAAyc/a8MpJUfI-TIECCEnhv37ZNRj9XjQX3SWACKgBGAs/w0/saber-codename-storm-skin-mobile-legends-uhdpaper.com-4K-21.jpg')",
        'heroes-1': "url('https://3.bp.blogspot.com/-0TT-6Jvu-Bk/XSeliVeMa9I/AAAAAAAAAyc/a8MpJUfI-TIECCEnhv37ZNRj9XjQX3SWACKgBGAs/w5120-h1440-c/saber-codename-storm-skin-mobile-legends-uhdpaper.com-4K-21.jpg')",
        'pricing': "url('https://www.pockettactics.com/wp-content/uploads/2021/03/Mobile-Legends-Wallpaper-Layla-3.jpg')",
        'pricing-1': "url('http://i0.wp.com/i.pinimg.com/originals/a2/5e/90/a25e903c5d4201f6b215f8b34c8a7dac.jpg?resize=160,120')",
        'order-details': "url('https://swall.teahub.io/photos/small/140-1403563_gatotkaca-spark-skin-mobile-legends-4k-mobile-legends.jpg')",
        'banner': "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdMe--GxhX3T3vFL6pIbJQa8aBdVT9ICafjN2hLGjY8KFYiWiAv7zWww5_0fe0R8mG9JMsatfTE_v5WUk1YvpKiUHwCGM9amMySVyIEWwMp7HkMzwmSoJgQhqx39ShldZA0azDCdeZ5XsuPYNYmFVsvjjWLfbek9CSVU_DUAN8htgoJm1up94k6UMC7g/s1920/ling-skin515%20(3).jpg')",
        // Heroes and Skins
        'resale-skin': "url('https://neartail.com/uploaded/1FAIpQLSchXRWIzBLD61AVIJwJof24cV44-KQpKQRmA1pj6RdQ1B8yFQ/318048638/prdimage/704589AE-9888-4050-94EE-6FF872176A7E.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}