import './mainContent1.scss'

export default function MainContent1() {
    return (
        <div className='main-content1'>
            <div className='info-content1'>
                <h2 className='main-content1-heading'>Premium Facilities</h2>
                <p className='info1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec felis. Sed id egestasegestas risus, ut imperdiet augue.</p>
                <button className='learnMoreButton'>Learn More</button>
            </div>

            <div className='image-content1'>
                <div className='image-content1-container'>
                    <img src='./img-public/ic1-front.png' className='ic1-front'></img>
                    <img src='./img-public/ic1-behind.png' className='ic1-behind'></img>
                </div>


            </div>
        </div>
    )
}
