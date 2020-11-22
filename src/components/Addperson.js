import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/ducks/people";
import { useInput } from "../hooks/InputHook";
import cntl from "cntl";

const Addperson = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const inputClass = cntl`
    block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-2 leading-tight`;
  const labelClass = cntl`
    block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1`;
  const buttonClass = cntl`
    bg-green-500 text-white hover:bg-green-700 font-bold  text-sm px-3 py-3 rounded shadow`;

  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useInput("");
  const {
    value: lastName,
    bind: bindLastName,
    reset: resetLastName,
  } = useInput("");
  const { value: title, bind: bindTitle, reset: resetLastname } = useInput("");
  const {
    value: allocation,
    bind: bindAllocation,
    reset: resetAllocation,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "add",
      value: {
        firstName,
        lastName,
        title,
        allocation,
      },
    });
  };
  return (
    <>
    <div className="mt-2">
      <button
        className={buttonClass} 
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Lisää työntekijä
      </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-4 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Lisää työntekijä</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                  <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div class="flex flex-wrap">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className={labelClass}>Etunimi</label>
                        <input
                          className={inputClass}
                          name="firstName"
                          type="text"
                          placeholder="Jane"
                          {...bindFirstName}
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className={labelClass}>Sukunimi</label>
                        <input
                          className={inputClass}
                          id="lastName"
                          type="text"
                          placeholder="Jane"
                          {...bindLastName}
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap mt-2 mb-2">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                        <label className={labelClass}>Titteli</label>
                        <input
                          className={inputClass}
                          name="title"
                          type="text"
                          placeholder="Jane"
                          {...bindTitle}
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className={labelClass}>Allokaatio</label>
                        <input
                          className={inputClass}
                          id="allocation"
                          type="text"
                          placeholder="Jane"
                          {...bindAllocation}
                        />
                      </div>
                    </div>
                    <button
                      className={buttonClass}
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Lisää
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Addperson;
