
import PropTypes from 'prop-types';

DonationCards.propTypes = {
    donation: PropTypes.object.isRequired,
};

function DonationCards({ donation }) {
    console.log(donation);

    const { image, description, price, title, text_button_bg } = donation || {};

    const buttonBackground = {
        background: text_button_bg,
    }

    const backgroundImage = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '55vh'
    }
    return (
        <div className='space-y-5'>
            <div className='relative' style={backgroundImage}>
                {/* <img src={image} alt={title} /> */}
                <div className='absolute inset-0 bg-black opacity-50 top-96'>
                </div>
                <div>
                    <button className='text-white text-xl font-semibold py-2 px-5 rounded-md ml-10 bottom-10 absolute' style={buttonBackground}>Donate {price}</button>
                </div>
            </div>

            <h2 className='text-[#0B0B0B] text-xl lg:text-4xl font-bold'>{title}</h2>
            <p className='text-[#0b0b0bb3] text-sm md:text-base'>{description}</p>
        </div>
    );
}

export default DonationCards;