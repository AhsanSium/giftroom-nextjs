
// const NewsLetterForm = () => {
//     return (
//         <form onSubmit={(e) => handleFormSubmit(e)} action="">
//             <input type="email" id="default-search" className="block p-4 pl-14  w-full text-sm text-gray-900 bg-white rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Email" required />
//             <button type="submit" className="w-32 lg:w-48 text-md lg:text-lg text-white absolute right-0 bottom-0 top-0 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                 Subscribe
//             </button>

//         </form>
//     )
// }

// export default NewsLetterForm


import { useState } from 'react';
import { decode } from 'html-entities';

const NewsletterForm = ({ status, message, onValidated, modalRef, color }) => {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);

    /**
     * Handle form submit.
     *
     * @return {{value}|*|boolean|null}
     */
    const handleFormSubmit = () => {

        setError(null);

        if (!email) {
            setError('Please enter a valid email address');
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        // On success return true
        console.log(email, email.indexOf("@"), isFormValidated, message, status);

        return email && email.indexOf("@") > -1 && isFormValidated;
    }

    /**
     * Handle Input Key Event.
     *
     * @param event
     */
    const handleInputKeyEvent = (event) => {
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            handleFormSubmit();
        }
    }

    /**
     * Extract message from string.
     *
     * @param {String} message
     * @return {null|*}
     */
    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split('-') ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return decode(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? decode(formattedMessage) : null;
    }

    return (
        <>
            <div className="d-flex newsletter-input-fields">

                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        {
                            color === 'homeBlue' ?
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17 3H7C4.23858 3 2 5.23858 2 8V16C2 18.7614 4.23858 21 7 21H16.9919L17.2087 20.9952C19.8687 20.8794 21.9901 18.6885 21.9939 16.0014L21.997 8.006L22 7.99797C22 5.23601 19.7607 2.99747 17 3ZM17.0009 5L17.1771 5.00494C18.6929 5.09145 19.907 6.30518 19.9949 7.8217L19.998 7.99949L19.9939 15.9995C19.9916 17.6556 18.6479 18.9985 16.991 19H7C5.34315 19 4 17.6569 4 16V8C4 6.34315 5.34315 5 7 5L17.0009 5Z" fill="white" />
                                    <g opacity="0.5">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.29289 8.29289C7.65338 7.93241 8.22061 7.90468 8.6129 8.2097L8.70711 8.29289L9.87868 9.46447C11.0034 10.5892 12.799 10.6342 13.9773 9.59943L14.1213 9.46447L15.2929 8.29289C15.6834 7.90237 16.3166 7.90237 16.7071 8.29289C17.0676 8.65338 17.0953 9.22061 16.7903 9.6129L16.7071 9.70711L15.5355 10.8787C13.6421 12.7721 10.6078 12.8295 8.64525 11.0508L8.46447 10.8787L7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289Z" fill="white" />
                                    </g>
                                </svg>
                                :
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17 3H7C4.23858 3 2 5.23858 2 8V16C2 18.7614 4.23858 21 7 21H16.9919L17.2087 20.9952C19.8687 20.8794 21.9901 18.6885 21.9939 16.0014L21.997 8.006L22 7.99797C22 5.23601 19.7607 2.99747 17 3ZM17.0009 5L17.1771 5.00494C18.6929 5.09145 19.907 6.30518 19.9949 7.8217L19.998 7.99949L19.9939 15.9995C19.9916 17.6556 18.6479 18.9985 16.991 19H7C5.34315 19 4 17.6569 4 16V8C4 6.34315 5.34315 5 7 5L17.0009 5Z" fill="black" />
                                    <g opacity="0.5">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.29289 8.29289C7.65338 7.93241 8.22061 7.90468 8.6129 8.2097L8.70711 8.29289L9.87868 9.46447C11.0034 10.5892 12.799 10.6342 13.9773 9.59943L14.1213 9.46447L15.2929 8.29289C15.6834 7.90237 16.3166 7.90237 16.7071 8.29289C17.0676 8.65338 17.0953 9.22061 16.7903 9.6129L16.7071 9.70711L15.5355 10.8787C13.6421 12.7721 10.6078 12.8295 8.64525 11.0508L8.46447 10.8787L7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289Z" fill="black" />
                                    </g>
                                </svg>

                        }
                    </div>

                    {
                        color === 'homeBlue' ?
                            <input
                                onChange={(event) => setEmail(event?.target?.value ?? '')}
                                type="email"
                                placeholder="Email" id="default-search" className="block p-4 pl-14  w-full text-md text-white placeholder-white  bg-transparent bg-opacity-80 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            :
                            <input
                                onChange={(event) => setEmail(event?.target?.value ?? '')}
                                type="email"
                                placeholder="Email" id="default-search" className="block p-4 pl-14  w-full text-md text-gray-900 bg-white rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                    }

                    {
                        color === 'blue' &&
                        <button type="submit" className="wp-block-button__link w-32 lg:w-48 text-md lg:text-lg text-white absolute right-0 bottom-0 top-0 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={handleFormSubmit}>
                            Subscribe
                        </button>

                    }
                    {
                        color === 'homeBlue' &&
                        <button type="submit" className="wp-block-button__link w-32 lg:w-48 text-md lg:text-lg text-white absolute right-0 bottom-0 top-0 bg-[#1A3AE2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={handleFormSubmit}>
                            Subscribe
                        </button>

                    }

                    {
                        color === 'black' &&
                        <button type="submit" className="wp-block-button__link w-32 lg:w-48 text-md lg:text-lg text-white absolute right-0 bottom-0 top-0 bg-black border-2 hover:border-gray-400  active:border-gray-500 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={handleFormSubmit}>
                            Subscribe
                        </button>

                    }

                    {
                        color === 'icoBlue' &&
                        <button style={{ background: "linear-gradient(180deg, #1AA6E2 0%, #682AB6 100%, #FF333F 100%)" }} type="submit" className="wp-block-button__link w-32 lg:w-48 text-md lg:text-lg text-white absolute right-0 bottom-0 top-0 border-2 border-gray-400 hover:border-gray-500  active:border-gray-600 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={handleFormSubmit}>
                            Subscribe
                        </button>

                    }
                </div>
                {/* <div className="mc-field-group">
                    <input
                        onChange={(event) => setEmail(event?.target?.value ?? '')}
                        type="email"
                        placeholder="Your email"
                        className="block p-4 pl-14  w-full text-sm text-gray-900 bg-white rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        onKeyUp={(event) => handleInputKeyEvent(event)}
                    />
                </div>
                <div className="button-wrap wp-block-button">
                    <button className="wp-block-button__link w-32 lg:w-48 text-md lg:text-lg text-white absolute right-0 bottom-0 top-0 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div> */}
            </div>
            <div className="newsletter-form-info">
                {status === "sending" && <div>Sending...</div>}
                {status === "error" || error ? (
                    <div
                        className="newsletter-form-error"
                        dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
                    />
                ) : null}
                {status === "success" && status !== "error" && !error && (
                    <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
                )}
            </div>
        </>
    );
}

export default NewsletterForm;