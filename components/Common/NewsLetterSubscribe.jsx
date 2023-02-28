import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from "./NewsletterForm";

const NewsletterSubscribe = ({ modalRef, color }) => {

    const MAILCHIMP_URL = "https://gmail.us21.list-manage.com/subscribe/post?u=617942052e40f2ca6ef22e96e&amp;id=fc99843427&amp;f_id=0043c7e1f0";

    return (
        <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={(props) => {
                const { subscribe, status, message } = props || {};

                console.log("Status", status);
                if (status === "success") {
                    modalRef ? modalRef.current.checked = true : null;
                }

                return (
                    <NewsletterForm
                        color={color}
                        modalRef={modalRef}
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                );
            }}
        />
    );
};

export default NewsletterSubscribe;