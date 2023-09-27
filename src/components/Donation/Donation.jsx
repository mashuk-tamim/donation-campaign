
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Donation.propTypes = {
    donation: PropTypes.object.isRequired,
};

function Donation({ donation }) {
    // console.log(donation);

    const { id, image, category, title, card_bg, category_bg, text_button_bg } = donation || {};

    const cardBackground = {
        background: card_bg,
        color: text_button_bg
    };
    const categoryBackground = {
        background: category_bg,

    }

    return (
        <div className='flex flex-wrap'>
            <Link to={`/donations/${id}`}>
                <div className='h-3/5'>
                    <img className='rounded-tr-md rounded-tl-md h-full w-full' src={image} alt={title} />
                </div>
                <div className='h-2/5 rounded-br-md rounded-bl-md p-5' style={cardBackground}>
                    <p className='inline-block rounded-md font-medium py-1 px-3 bg-violet-300' style={categoryBackground}>{category}</p>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                </div>
            </Link>
        </div>
    );
}

export default Donation;