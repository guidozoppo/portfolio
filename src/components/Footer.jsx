import './Footer.css'

export function Footer () {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <h4>© {currentYear} Guido Zoppo.</h4>
        </footer>
    )
}