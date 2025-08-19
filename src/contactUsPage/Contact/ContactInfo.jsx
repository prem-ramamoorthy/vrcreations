import { useState, useEffect } from "react"
import data from '/src/data/contactUs/ContactInfo.json'
import * as Icons from "lucide-react";

function ContactInfo() {

    const [contactDetails, setContactDetails] = useState();

    useEffect(() => {
        setContactDetails(data);
    }, [])

    const contactComponents = data.map((contact, index) => {
        const isAddressCard = index === 3;
        const Icon = Icons[(contact.icon || "").charAt(0).toUpperCase() + (contact.icon || "").slice(1)] || Icons.Code;
        return (
            <div className="contact-card" key={index}>
                <div className="contact-icon">
                   <Icon style={{ width: 28, height: 28, color: "white" }} />
                </div>

                <div className="contact-title">{contact.title}</div>

                <div className="contact-details">
                    {isAddressCard ? (
                        <>
                            {contact.details[0]} <br />
                            {contact.details[1]} <br />
                            {contact.details[2]}
                        </>
                    ) : (
                        <>
                            <a href={contact.details[0]?.link}>{contact.details[0]?.name}</a>
                            <br />
                            <a href={contact.details[1]?.link}>{contact.details[1]?.name}</a>
                            <br />
                            {contact.footer}
                        </>
                    )}
                </div>
            </div>
        );
    });

    return (
        <div className="contact-info">
            {contactComponents}
        </div>
    )
}

export default ContactInfo