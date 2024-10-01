import { useState } from "react";

const PricingCard = ({
    title = "Basic Plan",
    subtitle = "Subtitle",
    price = "0",
    save = "0",
    features = [],
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isThankYouOpen, setIsThankYouOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        installationDate: "",
    });

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const clearInputValues = () => {
        setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            installationDate: "",
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(false); 
        setIsThankYouOpen(true); 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const closeThankYouModal = () => {
        setIsThankYouOpen(false);
        clearInputValues();
    };

    return (
        <>
            <section className="rounded-[14px] p-8 pr-1/3 border-2 shadow-xl shadow-slate-300 relative grow flex flex-col gap-6">
                <h3 className="text-3xl font-bold mb-2">{title}</h3>
                <p>{subtitle}</p>
                <div className="text-white text-center text-sm font-bold bg-gradient-to-r from-purple-900 to-black rounded-[25px] p-2 w-1/3 max-w-[7rem] absolute right-[-1rem] top-[-1rem]">SAVE ${save}</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">${price}</div>
                <ul className="list-none space-y-4">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-2 before:content-[''] before:inline-block before:w-4 before:h-4 before:bg-[url('/icons/check-icon.png')] before:bg-cover before:shrink-0"
                        >
                            {feature}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={toggleModal}
                    className="text-white bg-black hover:bg-purple-800 transition duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-purple-300 rounded-[25px] font-semibold text-sm px-10 py-2.5"
                >
                    Get Started
                </button>
            </section>

            {/* Modal for the form */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4"
                    onClick={toggleModal}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow-lg z-50" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-4 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">Purchase {title} Plan</h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                                onClick={toggleModal}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4">
                            <form className="space-y-4" onSubmit={handleFormSubmit}>
                                <div>
                                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">Full Name:</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Phone Number:</label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Home Address:</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="installationDate" className="block mb-2 text-sm font-medium text-gray-900">Installation Date:</label>
                                    <input
                                        type="date"
                                        id="installationDate"
                                        name="installationDate"
                                        value={formData.installationDate}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-black px-5 py-2 rounded-lg"
                                >
                                    Confirm Purchase
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Thank You Modal */}
            {isThankYouOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4"
                    onClick={closeThankYouModal}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow-lg z-50" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-center p-4 border-b rounded-t">
                            <h1 className="text-5xl font-extrabold text-gray-900">Thank You!!</h1>
                        </div>
                        <div className="p-4">
                            <p className="text-lg">Complete your purchase of the <strong>{title}</strong> plan for just <strong>${price}</strong>.</p>
                            <p>Your details:</p>
                            <ul className="list-none space-y-2">
                                <li><strong>Full Name:</strong> {formData.fullName}</li>
                                <li><strong>Email:</strong> {formData.email}</li>
                                <li><strong>Phone Number:</strong> {formData.phoneNumber}</li>
                                <li><strong>Home Address:</strong> {formData.address}</li>
                                <li><strong>Installation Date:</strong> {formData.installationDate}</li>
                            </ul>
                            <p className="mt-4 text-sm text-center text-gray-600">
                            Our Homify team will reach out to you 24/7 for further confirmation and payment processing.
                            </p>
                            <button
                                className="mt-4 w-full text-white bg-black px-5 py-2 rounded-lg"
                                onClick={closeThankYouModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PricingCard;
