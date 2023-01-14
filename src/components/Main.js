import React, { useState } from 'react'

function Main() {
    const [number, setNumber] = useState("");

    const handleChange = (e) => {
        setNumber(e.target.value);
        if (e.target.value === "") {
            setNumber("")
        }

        else if (e.target.value % 15 === 0) {
            setNumber("fizzBuzz")
        }
        else if (e.target.value % 3 === 0) {
            setNumber("fizz");
        }
        else if (e.target.value % 5 === 0) {
            setNumber("Buzz")
        }
        else {
            setNumber(e.target.value);
        }
    }



    return (
        <div>
            <div className='speechers-info'>
                <div className='speecher-info'>
                    <div className='main-bubble'>
                        <h4>if number 3 and multiples of 3 say "Fizz!"</h4>
                        < img src="https://cdn2.iconfinder.com/data/icons/round-speech-bubbles-outline/64/comment-bubble-outline-01-512.png" alt="" />
                    </div>
                    <div className="footer-people">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-HJu-vVGHUsXVGno0rmSyMN4KcAhuM6GsHQu1m7dlO-bSD7EVr_i2CLYVmxR-Q68Ihg&usqp=CAU" alt="" />
                    </div>
                </div>
                <div className='speecher-info'>
                    <div className='main-bubble'>
                        <h4>if number 5 and multiples of 5 say "Buzz!"</h4>
                        < img src="https://cdn2.iconfinder.com/data/icons/round-speech-bubbles-outline/64/comment-bubble-outline-01-512.png" alt="" />
                    </div>
                    <div className="footer-people">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-HJu-vVGHUsXVGno0rmSyMN4KcAhuM6GsHQu1m7dlO-bSD7EVr_i2CLYVmxR-Q68Ihg&usqp=CAU" alt="" />
                    </div>
                </div>
                <div className='speecher-info'>
                    <div className='main-bubble'>
                        <h4>if number sametime multiples of 3 and 5 say "FizzBuzz!!!"</h4>
                        < img src="https://cdn2.iconfinder.com/data/icons/round-speech-bubbles-outline/64/comment-bubble-outline-01-512.png" alt="" />
                    </div>
                    <div className="footer-people">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-HJu-vVGHUsXVGno0rmSyMN4KcAhuM6GsHQu1m7dlO-bSD7EVr_i2CLYVmxR-Q68Ihg&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
            {/* MAİN */}
            <div className='speecher-2'>
                <div className='footer-bubble'>
                    <h2>{number}</h2>
                    < img src="https://cdn2.iconfinder.com/data/icons/round-speech-bubbles-outline/64/comment-bubble-outline-01-512.png" alt="" />
                </div>
                <div className="footer-people">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-HJu-vVGHUsXVGno0rmSyMN4KcAhuM6GsHQu1m7dlO-bSD7EVr_i2CLYVmxR-Q68Ihg&usqp=CAU" alt="" />
                </div>
                <p>Enter Your Number</p>
                <input type="number" onChange={handleChange} />
            </div>


        </div >
    )
}

export default Main