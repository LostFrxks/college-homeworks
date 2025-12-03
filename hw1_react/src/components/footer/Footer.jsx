import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__left'>
                <div className='footer__links'>
                    <a href='#privacy' className='footer__link'>Privacy policy</a>
                    <a href='#terms' className='footer__link'>Terms of service</a>
                    <a href='#support' className='footer__link'>Support</a>
                </div>
            </div>

            <div className='footer__social'>
                <a href='https://s.team/p/hrnb-mcfh/VJFCMWQJ' className='footer__social-link'>Steam</a>
                <a href='https://www.dota2.com' className='footer__social-link'>Dota 2</a>
                <a href='https://github.com/lostfrxks' className='footer__social-link'>GitHub</a>
            </div>
        </footer>
    )
}





export default Footer
