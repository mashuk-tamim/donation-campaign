import swal from 'sweetalert';
import PropTypes from 'prop-types';

DonationCards.propTypes = {
    donation: PropTypes.object.isRequired,
};

function DonationCards({ donation }) {
    // console.log(donation);

    const { id, image, description, price, title, text_button_bg } = donation || {};

    const handleDonate = () => {

        const donatedArray = [];

        const donated = JSON.parse(localStorage.getItem('donation'));

        if (!donated) {
            donatedArray.push(donation);
            localStorage.setItem('donation', JSON.stringify(donatedArray));
            swal("Thanks!", "You have donated successfully!", "success");
        }
        else {
            const isExist = donated.find(donate => donate.id === id)
            // console.log(isExist);
            if (!isExist) {
                donatedArray.push(...donated, donation);
                localStorage.setItem('donation', JSON.stringify(donatedArray))
                swal("Thanks!", "You have donated successfully!", "success");
            }
            else {
                swal("Sorry!", "You have already donated", "error");
            }
        }


    }

    const buttonBackground = {
        background: text_button_bg,
    }

    const backgroundImage = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        borderRadius: 10,
    }
    return (
        <div className='space-y-5'>
            <div className='relative' style={backgroundImage}>
                {/* <img src={image} alt={title} /> */}
                <div className='absolute inset-x-0 bg-black opacity-60 bottom-0 h-1/4 rounded-br-lg rounded-bl-lg'>
                </div>
                <div className='absolute inset-x-0 bottom-0 h-1/6 left-5 lg:left-10'>
                    <button
                        onClick={handleDonate}
                        className='text-white text-xs md:text-base lg:text-xl font-semibold py-2 px-3 lg:px-5 rounded-md' style={buttonBackground}>Donate ${price}</button>
                </div>
            </div>

            <h2 className='text-[#0B0B0B] text-xl md:text-3xl lg:text-5xl font-bold'>{title}</h2>
            <p className='text-[#0b0b0bb3] text-sm md:text-base'>{description}</p>
        </div>
    );
}

export default DonationCards;