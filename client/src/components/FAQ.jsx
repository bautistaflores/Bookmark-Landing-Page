import { useState } from 'react';

const questions = [
    {
        question: "What is Bookmark?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
        question: "How can I request a new browser?",
        answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    },
    {
        question: "Is there a mobile app?",
        answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
        question: "What about other Chromium browsers?",
        answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }

    return (
        <div className='flex flex-col justify-center items-center pb-40'>
            <div className="flex flex-col justify-center items-center text-[18px] mt-35 mb-15">
                <h2 className="text-3xl font-medium mb-3">Frequently Asked Questions</h2>
                <p className="text-gray-500 text-center max-w-[530px] mx-auto">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            </div>

            <div className='w-[530px]'>
                {questions.map((item, index) => (
                    <div
                        key={index}
                        className={`border-b border-gray-300 py-3 ${index === 0 ? 'border-t' : ''} cursor-pointer hover:text-red-400`}
                        onClick={() => toggle(index)}
                    >
                        <div className='flex justify-between items-center'>
                            <span className='text-[18px]'>{item.question}</span>

                            {openIndex === index ? (
                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path fill="none" stroke="#FA5757" strokeWidth="3" d="M1 11l8-8 8 8" />
                            </svg>
                            ) : (
                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" />
                            </svg>
                            )}

                        </div>

                        {openIndex === index && (
                            <div className="text-gray-500 py-5 leading-loose">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button className='mt-15 px-5 py-2 bg-blue-600 rounded-md text-white cursor-pointer hover:border-2 hover:bg-white hover:text-blue-600'>More Info</button>
        </div>
    )
}

export default FAQ;