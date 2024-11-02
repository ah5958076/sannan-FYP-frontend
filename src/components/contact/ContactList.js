import React from "react";
import useGetContacts from "../../hooks/useGetContacts";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import InputSearch from "../form-controls/InputSearch";
const ContactList = () => {
  const contacts = useGetContacts();

  return (
    <div
      className=" min-h-screen bg-secondary-100 flex justify-center md:p-6 p-3 "
      id="contact-list"
    >
      <div className="max-w-screen-xl bg-neutral-200 flex flex-col gap-3 rounded-xl">
        <div className="flex justify-between items-center px-12 py-6">
          <h1 className="text-primary-900 font-semibold md:text-3xl text-xl my-5">Contacts</h1>
          <Link to={'/contact/create'} className=" bg-primary-700 hover:bg-primary-800 shadow-lg active:scale-70 transition-all duration-500 text-sm text-white px-4 py-3 rounded-lg">Add new Contact</Link>
        </div>
        <InputSearch className={'md:w-[30rem]'} bg={'bg-neutral-100'}/>

        <div className="md:px-6 px-3 py-6 mt-3 grid xl:grid-cols-2 gap-2 md:overflow-y-auto md:h-[70vh]">
          {contacts && contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <div key={index}>
                <Contact contact={contact} />
               
              </div>
            ))
          ) : (
            <h1 className="text-xl text-primary-800">No Contact Available</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
