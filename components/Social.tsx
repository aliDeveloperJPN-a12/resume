import React from "react";
import { BsInstagram, BsSkype, BsWhatsapp } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

const Social = () => {
    return (
        <div className="flex gap-5">
            <a href="https://www.instagram.com/ag062062zero/" className="container_contact_media">
                <BsInstagram />
            </a>

            <a href="https://t.me/zero12_aa" className="container_contact_media">
                <FaTelegram />
            </a>
        </div>
    );
};

export default Social;
