import React from "react";

const feedback = {
    name: "James Mavilon",
    email: "james@gmail.com",
    date:"03-11-2024 18:25",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus assumenda, hic quos debitis commodi suscipit asperiores quia perspiciatis et!"
};

const FeedbackModal = ({ isOpen, onClick }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute z-50 top-0 left-0 w-full h-full grid place-items-center backdrop-blur-sm bg-gray-400 bg-opacity-[0.5] px-3 ">
          <div
            className={` ${
              isOpen ? "modal-fade" : " "
            } max-w-screen-xl h-max flex flex-col gap-3 bg-white rounded-xl md:py-10 py-5 shadow-xl lg:w-[35rem]`}
          >
            <div>
              <h1 className="text-primary-800 tracking-wider md:px-8 px-6 font-bold text-2xl mb-3">
                Feedback Detail
              </h1>

              <main className="md:px-8 px-6  border-primary-800 my-5 py-5">
                <section className="flex flex-col gap-3 mb-2">
                  <div>
                    <strong className=" tracking-wide">Name:</strong>
                    <span className="ms-1">{feedback.name}</span>
                  </div>
                  <div>
                    <strong className=" tracking-wide">Email:</strong>
                    <span className="ms-1">{feedback.email}</span>
                  </div>
                  <div>
                    <strong className=" tracking-wide">Date:</strong>
                    <span className="ms-1">{feedback.date}</span>
                  </div>
                  <div>
                    <strong className=" tracking-wide">Description:</strong>
                    <span className="ms-1">{feedback.description}</span>
                  </div>

                </section>
              </main>

              <div className=" flex gap-3 justify-end items-center md:px-8 px-6">
                <button className="px-3 py-2 rounded-lg bg-primary-500 text-white">
                  Read
                </button>
                <button
                  onClick={onClick}
                  className="px-3 py-2 rounded-lg bg-blue-500 text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackModal;
