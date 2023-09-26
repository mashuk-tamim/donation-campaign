
import PropTypes from 'prop-types';

DonatedDetails.propTypes = {
    donation: PropTypes.object.isRequired,
};

function DonatedDetails({ donation }) {
    console.log(donation);

    const { image, category, title, price, id, card_bg, category_bg, text_button_bg } = donation;

    const cardBackground = {
        background: card_bg,
    };
    const categoryBackground = {
        background: category_bg,
        color: text_button_bg
    }
    const ButtonBackground = {
        background: text_button_bg
    }
    const textColor = {
        color: text_button_bg
    }
    return (
        <div className='flex'>
            <div className='w-1/3 flex items-stretch'>
                <img className='rounded-tl-lg rounded-bl-lg h-full w-full' src={image} alt={title} />
            </div>
            <div className='w-2/3 rounded-br-lg rounded-tr-lg p-5 space-y-2' style={cardBackground}>
                <p className='inline-block rounded-md font-medium py-1 px-3 bg-violet-300' style={categoryBackground}>{category}</p>
                <h3 className='text-2xl text-[#0B0B0B] font-semibold'>{title}</h3>
                <p className='font-semibold' style={textColor}>${price}.00</p>
                <button
                    
                    className='text-white text-xs md:text-base lg:text-lg font-semibold py-2 px-3 lg:px-5 rounded-md'
                    style={ButtonBackground}>
                    View Details
                </button>
            </div>
        </div>
    );
}

export default DonatedDetails;