import {ReactComponent as DawsonLogo} from '../../public/images/logos/Dawson_En_Logo_White_RGB.svg'

export default function MediaPage(){
  const iframeStyle = {
    border: '0',
    width:'30%',
    height:'400px'
}
  return (
    <div id="media-container">
        <section id="media-section">
          <p>Thank you for Dawson College and SPACE for providing opportunities to learn and experiment in Robotics</p>
          <div>
            
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.0055466461954!2d-73.58763613560149!3d45.49029263509446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a12a3fee4ab%3A0x6d25c9582df137e1!2sDawson%20College!5e1!3m2!1sen!2sca!4v1675111428738!5m2!1sen!2sca"
            title="dawson on google maps"
            width="100vw"
            style={iframeStyle}
            allowFullScreen loading="lazy"
            referrerPolicy='no-referrer-when-downgrade'
          />
        </section>
    </div>
  )
}