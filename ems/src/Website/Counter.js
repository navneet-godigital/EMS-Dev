import React from 'react'

function Counter() {
    return (
        <div>
            <section class="iq_number_count_bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-3">
                            <div class="iq_counter">
                                <i class="icon">
                                    <img src='./img/icon/lecture.png' alt='' />
                                </i>
                                <span class="counter">2021</span>
                                <h6>Total Lectures</h6>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3">
                            <div class="iq_counter">
                                <i class="icon">
                                    <img src='./img/icon/book-stack.png' alt='' />
                                </i>
                                <span class="counter">1411</span>
                                <h6>Total Courses</h6>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3">
                            <div class="iq_counter">
                                <i class="icon">
                                    <img src='./img/icon/digital-drawing.png' alt='' />
                                </i>

                                <span class="counter">1591</span>
                                <h6>Total Tests</h6>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3">
                            <div class="iq_counter">
                                <i class="icon">
                                    <img src='./img/icon/certificate.png' alt='' />
                                </i>
                                <span class="counter">9921</span>
                                <h6>Total Classes</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Counter;
