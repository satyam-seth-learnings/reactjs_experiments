import './App.css';

function App() {

  return (
    <>
      <address id="address">
        BBD City, Faizabad Road <br />
        Lucknow, Uttar Pradesh - 226028
      </address>
      <div className='responsive-map'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5927476506367!2d81.0558566750097!3d26.88467717666383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be20bfb0f1d33%3A0x9f14bcf7c5d08f69!2sBBD%20Green%20City%2C%20Faizabad%20Rd%2C%20Lucknow%2C%20Uattardhona%2C%20Uttar%20Pradesh%20226028!5e0!3m2!1sen!2sin!4v1702794736564!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  )
}

export default App
