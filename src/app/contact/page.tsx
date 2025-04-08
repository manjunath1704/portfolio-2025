import ContactForm from '../components/home/contact-form';
const Contact: React.FC = () => {
    return (
        <>
            <section className="pt-10 pb-20">
                <div className="max-w-[1500px] m-auto px-10 mt-[150px]">
                    <h5 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center text-neutral-100">
                        <span className="text-neutral-40">Say Hi!</span> and tell me about your idea
                    </h5>
                </div>
            </section>
            <section className="pb-10">
                <div className="max-w-[1500px] m-auto px-10">
                    <ContactForm />
                </div>
            </section>

        </>
    );
};

export default Contact;

