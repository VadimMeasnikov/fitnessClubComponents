import './mainContent.scss'

export default function MainContent() {
    return (
        <div className='main-content'>
            <div className='image-content'>
                <img className='behindImage' src='./img-public/ic-behind.png'></img>
                <img className='frontImage' src='./img-public/ic-front.png'></img>
            </div>

            <div className='info-content'>
                <div className='info-content-container'>
                    <h2 className='info-content_heading'>Meet your new body</h2>
                    <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec felis. Sed id egestasegestas risus, ut imperdiet augue.</p>
                    <button className='viewFAQButton'>View the FAQ</button>
                </div>
            </div>
        </div>
    )
}
