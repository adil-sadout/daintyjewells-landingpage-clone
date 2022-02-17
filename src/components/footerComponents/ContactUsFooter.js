import {Link} from 'react-router-dom'

function ContactUsFooter() {
  return (
    <div className='col-4 p-4 border-top border-end'>
        <p className='h3 text-rosybrown'>HOW CAN WE HELP?</p>
        <p className='h6'>We’re known for our exceptional customer service and we would be happy to help!</p>
        <p className='h4 text-dark'>(800) 663-1594</p>
        <Link to="/" className='h3 text-rosybrown' >Contact Us</Link>
    </div>
  )
}

export default ContactUsFooter