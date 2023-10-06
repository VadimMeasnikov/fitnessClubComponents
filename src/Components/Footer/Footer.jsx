import './footer.scss'

export default function Footer() {
    return (
        <footer>
        <div className='footer-container'>
      <div className='footerTop'>

          <div className='footer-links'>
              <div className='media'>
                  <div className='footer-heading'>
                      <p className='logoText1'>Good</p>
                      <p className='logoText2'>lyfe</p>
                  </div>

                  <p className='footer-info'>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>

              </div>
              <div className='links'>
                  <p className='links-heading'>Quick Links</p>

                  <a hred='#' className='footer-link'>Classes</a>
                  <a hred='#' className='footer-link'>Timetable</a>
                  <a hred='#' className='footer-link'>Clubs</a>
                  <a hred='#' className='footer-link'>Nutrition</a>
                  <a hred='#' className='footer-link'>Free Trial</a>
              </div>
              <div className='links'>
                  <p className='links-heading'>Guides</p>

                  <a hred='#' className='footer-link'>Weight Loss</a>
                  <a hred='#' className='footer-link'>Strength Gain</a>
                  <a hred='#' className='footer-link'>Crossfit</a>
                  <a hred='#' className='footer-link'>Washbaord Abs</a>
                  <a hred='#' className='footer-link'>Dieting</a>
              </div>
              <div className='links'>
                  <p className='links-heading'>Guides</p>

                  <p className='footerEmail footer-link'>admin@goodlyfe.co</p>
                  <p className='footerPhone footer-link'>+88 98765 43210</p>
                  <p className='footerLocation footer-link'>90210 Beverly Hills
                      California USA</p>
              </div>
          </div>

      </div>

      <div className='footerLow'>
          <div className='license'>
              <p className='licenseText'>© 2020 GoodLyfe. All rights reserved</p>
          </div>
          <div className='footer-main-links'>
              <a hred="#" className='footerMainLink'>Terms & Conditions</a>
              <img src='./img-public/line.png'></img>
              <a hred="#" className='footerMainLink'>Privacy Policy</a>
              <img src='./img-public/line.png'></img>
              <a hred="#" className='footerMainLink'>Sitemap</a>
              <img src='./img-public/line.png'></img>
              <a hred="#" className='footerMainLink'>Disclaimer</a>
          </div>
      </div>
  </div>
  </footer>
    )
}
