import { useForm } from "react-hook-form"

import ErrorIcon from '../assets/images/icon-error.svg'

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="flex flex-col items-center bg-blue-600 py-15">
            <div className="text-center max-w-md">
                <p className="text-white mb-7 tracking-widest">35,000+ ALREADY JOINED</p>
                <h2 className="text-4xl text-medium text-white mb-8">Stay up-to-date with what we’re doing</h2>

                <form 
                    className="flex justify-center items-start gap-4"
                    onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col w-full max-w-xs relative">
                        {/* Icono de error */}
                        {errors.email && (
                            <img
                            src={ErrorIcon}
                            alt="Error"
                            className="w-5 h-5 absolute right-3 top-5.5 -translate-y-1/2"
                            />
                        )}

                        <input 
                            type="text"
                            {...register("email", { 
                                required: "Whoops, make sure it's an email",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                  }
                             })}
                            placeholder="Enter your email address"
                            className={`bg-white px-4 py-2 text-gray-800 placeholder-gray-400 w-full focus:outline-none border-t border-l border-r rounded-md ${errors.email ? 'rounded-b-none border-red-400' : 'border-gray-300'}`}
                        />
                    
                        <span className={`bg-red-400 text-white text-sm px-4 py-1 w-full rounded-b-md min-h-[20px] transition-opacity duration-200 ${errors.email ? 'opacity-100' : 'opacity-0'}`}>
                            {errors.email?.message}
                        </span>
                    </div>

                    <button className="bg-red-400 px-4 py-2 text-white rounded-md cursor-pointer min-w-[130px] hover:bg-white hover:text-red-400 hover:border-2">Contact Us</button>

                </form>
            </div>
        </div>
    )
}

export default Contact;