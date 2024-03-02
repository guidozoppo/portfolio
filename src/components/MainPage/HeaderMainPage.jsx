import './HeaderMainPage.css'

export function HeaderMainPage() {

    const handleDownloadd = (e) => {
        e.target.download = 'ZoppoGuidoCV.pdf'  
    }

    return (
        <main className='HeaderMainPage-container'>
            <div className='info-profile'>
                <img src="https://media.licdn.com/dms/image/C4E03AQFOs9sKqr2nOQ/profile-displayphoto-shrink_800_800/0/1645125938026?e=1714003200&v=beta&t=i4UALtPavADlM2fFCdouVMZY6wCxw1kjITeHh3g73p0" alt="" />
                <div>
                    <h3>Guido Zoppo</h3>
                    <p>Software Developer</p>
                </div>
            </div>
            <div>
                <a href='../../../ZoppoGuidoCV.pdf' onClick={handleDownloadd}>Descargar CV</a>
            </div>
        </main>
    )
}
