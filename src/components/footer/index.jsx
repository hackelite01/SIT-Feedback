import './footer.style.css'

const Footer = ({ desktop }) => {
  return (
    <p className={`footer ${desktop && 'deskFooter'}`}>
      Copyright © {new Date().getFullYear()} Developed by{' '}
      <a href='https://t.me/NonRootedInsaan' target='_blank' rel='noopener noreferrer'>
        Mayank Rajput
      </a>
    </p>
  )
}

export default Footer
