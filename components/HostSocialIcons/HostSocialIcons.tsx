import React from "react";

const HostSocialIcons = () => {
    return (
        <div className = "absolute right-2 bottom-5 bg-(--gray-color) rounded-full group">
            <i className = "bi bi-plus-lg flex items-center justify-center w-14 h-14 bg-(--gray-color) rounded-full cursor-pointer border border-transparent group-hover:rounded-t-none group-hover:bg-(--gray-light) group-hover:border group-hover:border-(--gray-color) transition-all duration-300"></i>
            <div className = "flex flex-col gap-0.5 absolute right-0 bottom-14 opacity-0 invisible translate-y-4 bg-(--gray-color) rounded-t-full p-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all ease-out duration-300 host-hidden">
                <i className = "bi bi-facebook flex items-center justify-center w-10 h-10 mb-1 rounded-full bg-(--gray-light) hover:bg-(--primary) border border-(--primary) cursor-pointer transition-all duration-300"></i>
                <i className = "bi bi-whatsapp flex items-center justify-center w-10 h-10 mb-1 rounded-full bg-(--gray-light) hover:bg-(--primary) border border-(--primary) cursor-pointer transition-all duration-300"></i>
                <i className = "bi bi-twitter-x flex items-center justify-center w-10 h-10 mb-1 rounded-full bg-(--gray-light) hover:bg-(--primary) border border-(--primary) cursor-pointer transition-all duration-300"></i>
            </div>
        </div>
    )
}

export default HostSocialIcons;